"use client";

import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Share2, UploadCloud, CheckCircle2, AlertCircle, Loader2, X, FileText, CircleQuestionMark } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { submitPartnerLead } from '../services/partnerService';
import { IoCloseOutline } from "react-icons/io5";

// ── Location data (pre-processed from pri_local_bodies.csv & districts.csv) ──
const LOCATION_DATA_URL = '/assets/location_data.json';

// ─── Zod Schema ───────────────────────────────────────────────────────────────
const partnerSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z.string().min(1, "Mobile number is required").regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"),
    email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
    state: z.string().min(1, "State is required"),
    district: z.string().min(1, "District is required"),
    blockPanchayat: z.string().min(1, "Block panchayat is required"),
    locationPin: z.string().min(1, "Location PIN is required").regex(/^[0-9]{6}$/, "Please enter a valid 6-digit PIN code"),
    message: z.string().optional(),
});

// ─── Custom Dropdown ──────────────────────────────────────────────────────────
const CustomSelect = ({ options, value, onChange, placeholder, disabled, error }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (disabled) setIsOpen(false);
    }, [disabled]);

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div className="relative" ref={selectRef}>
            <select className="hidden" value={value} onChange={() => { }} aria-hidden="true">
                <option value="">{placeholder}</option>
                {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>

            <div
                className={`w-full px-4 py-3 rounded-lg border text-sm bg-white flex justify-between items-center transition-colors ${disabled
                        ? 'opacity-50 cursor-not-allowed bg-gray-50 border-gray-200'
                        : error
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500 cursor-pointer'
                            : 'border-gray-200 hover:border-gray-300 focus:border-(--brand-primary) focus:ring-(--brand-primary) cursor-pointer'
                    }`}
                onClick={() => { if (!disabled) setIsOpen(!isOpen); }}
            >
                <span className={selectedOption ? 'text-slate-900' : 'text-gray-400'}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <svg className={`fill-current h-4 w-4 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''} ${error ? 'text-red-500' : 'text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>

            {isOpen && !disabled && (
                <div className="absolute z-20 w-full mt-1 bg-white rounded-lg shadow-[0_4px_20px_rgb(0,0,0,0.1)] border border-gray-100 py-1.5 max-h-60 overflow-y-auto">
                    {options.length === 0 ? (
                        <div className="px-4 py-3 text-sm text-gray-400 italic">No options available</div>
                    ) : (
                        options.map((option) => (
                            <div
                                key={option.value}
                                className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between transition-colors"
                                onClick={() => { onChange(option.value); setIsOpen(false); }}
                            >
                                <span className="text-[13px] font-medium text-slate-700">{option.label}</span>
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${value === option.value ? 'border-(--brand-primary)' : 'border-gray-300'}`}>
                                    {value === option.value && <div className="w-2 h-2 rounded-full bg-(--brand-primary)" />}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
            {error && (
                <span className="mt-1.5 text-xs text-red-500 inline-block">
                    {error.message}
                </span>
            )}
        </div>
    );
};

// ─── Main Form ────────────────────────────────────────────────────────────────
export default function PartenrForm() {
    const {
        register,
        handleSubmit,
        reset,
        control,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(partnerSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            state: '',
            district: '',
            blockPanchayat: '',
            locationPin: '',
            message: '',
        },
    });

    // Location cascade state
    const [districtOptions, setDistrictOptions] = useState([]);
    const [blockOptions, setBlockOptions] = useState([]);
    const [locationData, setLocationData] = useState(null);

    // CV file
    const [cvFile, setCvFile] = useState(null);
    const fileInputRef = useRef(null);
    const successRef = useRef(null);

    // Submission state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [cvError, setCvError] = useState('');

    const watchedState = watch('state');
    const watchedDistrict = watch('district');

    // Prevent layout shift jump when form collapses into success screen
    useLayoutEffect(() => {
        if (successMessage && !isSubmitting && successRef.current) {
            const element = successRef.current;
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'auto' });
        }
    }, [successMessage, isSubmitting]);

    // Load location JSON once
    useEffect(() => {
        fetch(LOCATION_DATA_URL)
            .then(res => res.json())
            .then(data => setLocationData(data))
            .catch(err => console.error('Failed to load location data:', err));
    }, []);

    const stateOptions = [
        { value: 'Kerala', label: 'Kerala' },
        { value: 'Tamil Nadu', label: 'Tamil Nadu' },
        { value: 'Karnataka', label: 'Karnataka' },
    ];

    // Handle cascade: State -> District
    useEffect(() => {
        if (locationData && watchedState) {
            const dists = (locationData.districts[watchedState] || [])
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(d => ({ value: d.code, label: d.name }));
            setDistrictOptions(dists);

            // Check if current district is still valid for this state, if not reset
            const currentDistValid = dists.find(d => d.value === watchedDistrict);
            if (!currentDistValid) {
                setValue('district', '', { shouldValidate: watchedDistrict !== '' });
                setValue('blockPanchayat', '', { shouldValidate: watchedDistrict !== '' });
            }
        } else {
            setDistrictOptions([]);
        }
    }, [watchedState, locationData]);

    // Handle cascade: District -> Block
    useEffect(() => {
        if (locationData && watchedDistrict) {
            const blocks = (locationData.blocks[watchedDistrict] || [])
                .map(b => ({ value: b, label: b }));
            setBlockOptions(blocks);

            // If block options exist, and current block is not in it, reset
            const currentBlock = watch('blockPanchayat');
            const currentBlockValid = blocks.find(b => b.value === currentBlock);
            if (!currentBlockValid && blocks.length > 0) {
                setValue('blockPanchayat', '', { shouldValidate: currentBlock !== '' });
            } else if (blocks.length === 0) {
                // If there are no blocks, it's possible the placeholder will just say "Not available"
                // Let's set it to something or clear it
                setValue('blockPanchayat', '', { shouldValidate: currentBlock !== '' });
            }
        } else {
            setBlockOptions([]);
        }
    }, [watchedDistrict, locationData]);

    // CV file handler
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            setCvError('CV file must be under 5 MB.');
            setCvFile(null);
            if (fileInputRef.current) fileInputRef.current.value = '';
            setTimeout(() => setCvError(''), 5000);
            return;
        }
        setCvError('');
        setErrorMessage('');
        setCvFile(file);
    };

    const removeFile = () => {
        setCvFile(null);
        setCvError('');
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    // ── Submit ────────────────────────────────────────────────────────────────
    const onSubmit = async (data) => {
        setErrorMessage('');
        setSuccessMessage('');
        setCvError('');

        setIsSubmitting(true);

        try {
            // Find district label corresponding to district code for backend storage
            const selectedDistrictLabel = districtOptions.find(d => d.value === data.district)?.label || data.district;

            // We'll replace the district code with its label for the payload
            const payload = {
                ...data,
                district: selectedDistrictLabel,
                cv: cvFile
            };

            const response = await submitPartnerLead(payload);
            setSuccessMessage(response?.message || 'Submitted successfully.');
            reset();
            setCvFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } catch (err) {
            console.error('Partner lead submit error:', err);
            const msg = err?.response?.data?.message || err?.message || 'Something went wrong. Please try again.';
            setErrorMessage(msg);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
        }
    };

    // Helper for input classes
    const getInputCls = (error) =>
        `w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors placeholder-gray-400 text-sm ${error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-gray-200 focus:border-(--brand-primary) focus:ring-(--brand-primary)"
        }`;

    // ── Share ─────────────────────────────────────────────────────────────────
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'PayNback Partner Application',
                    text: 'Join as a partner with PayNback!',
                    url: window.location.href,
                });
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Error sharing:', error);
                }
            }
        } else {
            try {
                await navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        }
    };

    // ── Render ────────────────────────────────────────────────────────
    return (
        <motion.div
            layout
            ref={successRef}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10 relative overflow-hidden"
        >
            <AnimatePresence mode="wait">
                {successMessage && !isSubmitting ? (
                    <motion.div
                        key="success"
                        className="flex flex-col items-center justify-center text-center min-h-[400px] space-y-4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <CheckCircle2 className="w-16 h-16 text-emerald-500" />
                        <h3 className="text-xl font-semibold text-slate-800">Application Submitted!</h3>
                        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                            {successMessage}
                        </p>
                        <button
                            onClick={() => setSuccessMessage('')}
                            className="mt-4 text-sm font-medium text-(--brand-primary) hover:underline underline-offset-2 cursor-pointer transition-all"
                        >
                            Submit another application
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>

                            {/* Row 1 — Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-medium text-(--brand-primary)">First name*</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your first name"
                                        className={getInputCls(errors.firstName)}
                                        {...register("firstName")}
                                    />
                                    {errors.firstName && (
                                        <span className="mt-1.5 text-xs text-red-500">{errors.firstName.message}</span>
                                    )}
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-medium text-(--brand-primary)">Last name*</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your last name"
                                        className={getInputCls(errors.lastName)}
                                        {...register("lastName")}
                                    />
                                    {errors.lastName && (
                                        <span className="mt-1.5 text-xs text-red-500">{errors.lastName.message}</span>
                                    )}
                                </div>
                            </div>

                            {/* Row 2 — Contact */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-medium text-(--brand-primary)">Mobile number*</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter your mobile number"
                                        maxLength={10}
                                        className={getInputCls(errors.phone)}
                                        {...register("phone")}
                                    />
                                    {errors.phone && (
                                        <span className="mt-1.5 text-xs text-red-500">{errors.phone.message}</span>
                                    )}
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-medium text-(--brand-primary)">E-mail id*</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your e-mail id"
                                        className={getInputCls(errors.email)}
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <span className="mt-1.5 text-xs text-red-500">{errors.email.message}</span>
                                    )}
                                </div>
                            </div>

                            {/* Row 3 — State & District */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-medium text-(--brand-primary)">State*</label>
                                    <Controller
                                        name="state"
                                        control={control}
                                        render={({ field }) => (
                                            <CustomSelect
                                                options={stateOptions}
                                                value={field.value}
                                                onChange={(val) => {
                                                    field.onChange(val);
                                                }}
                                                placeholder="Select state"
                                                error={errors.state}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-medium text-(--brand-primary)">District*</label>
                                    <Controller
                                        name="district"
                                        control={control}
                                        render={({ field }) => (
                                            <CustomSelect
                                                options={districtOptions}
                                                value={field.value}
                                                onChange={field.onChange}
                                                placeholder={watchedState ? 'Select district' : 'Select state first'}
                                                disabled={!watchedState || districtOptions.length === 0}
                                                error={errors.district}
                                            />
                                        )}
                                    />
                                </div>
                            </div>

                            {/* Row 4 — Block Panchayat & PIN */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-medium text-(--brand-primary)">Block panchayat*</label>
                                    <Controller
                                        name="blockPanchayat"
                                        control={control}
                                        render={({ field }) => (
                                            <CustomSelect
                                                options={blockOptions}
                                                value={field.value}
                                                onChange={field.onChange}
                                                placeholder={
                                                    !watchedDistrict
                                                        ? 'Select district first'
                                                        : blockOptions.length === 0
                                                            ? 'No block panchayats available'
                                                            : 'Select block panchayat'
                                                }
                                                disabled={!watchedDistrict || blockOptions.length === 0}
                                                error={errors.blockPanchayat}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-medium text-(--brand-primary)">Location PIN*</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your 6-digit PIN code"
                                        maxLength={6}
                                        className={getInputCls(errors.locationPin)}
                                        {...register("locationPin", {
                                            onChange: (e) => {
                                                e.target.value = e.target.value.replace(/\D/g, '').slice(0, 6);
                                            }
                                        })}
                                    />
                                    {errors.locationPin && (
                                        <span className="mt-1.5 text-xs text-red-500">{errors.locationPin.message}</span>
                                    )}
                                </div>
                            </div>

                            {/* Row 5 — CV Upload */}
                            {/* <div className="space-y-2 mt-6">
                    <div className="mb-2 flex items-center justify-start gap-1">
                        <label className="text-sm font-medium text-(--brand-primary)">CV Upload</label>
                        <CircleQuestionMark size={14} className="text-slate-400" />
                    </div>
                    {cvFile ? (
                        <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-5 py-4 bg-gray-50">
                            <FileText className="w-8 h-8 text-(--brand-primary) shrink-0" />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-700 truncate">{cvFile.name}</p>
                                <p className="text-xs text-gray-400">{(cvFile.size / 1024).toFixed(1)} KB</p>
                            </div>
                            <button
                                type="button"
                                onClick={removeFile}
                                className="p-1.5 rounded-full hover:bg-red-50 transition-colors shrink-0 group cursor-pointer"
                                aria-label="Remove file"
                            >
                                <IoCloseOutline className="w-5 h-5 text-gray-500 group-hover:text-red-500" />
                            </button>
                        </div>
                    ) : (
                        <div
                            className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer group bg-white relative"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <UploadCloud className="w-8 h-8 text-gray-400 mb-3 group-hover:text-(--brand-primary) transition-colors" />
                            <div className="flex flex-col items-center text-sm text-gray-600 justify-center gap-1">
                                <p>
                                    <span className="font-semibold text-(--brand-primary)">Upload a file</span>
                                    {' '}or drag and drop here
                                </p>
                            </div>
                            <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX up to 5 MB</p>
                            <input
                                ref={fileInputRef}
                                id="cv-upload"
                                type="file"
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                            />
                        </div>
                    )}
                    {cvError && (
                        <span className="mt-1.5 text-xs text-red-500 block">{cvError}</span>
                    )}
                </div> */}

                            {/* Row 6 — Message */}
                            <div className="flex flex-col space-y-2">
                                <div className="mb-2 flex items-center justify-start gap-1">
                                    <label className="text-sm font-medium text-(--brand-primary)">Message</label>
                                    <CircleQuestionMark size={12} className="text-slate-400" />
                                </div>
                                <textarea
                                    rows={4}
                                    placeholder="Enter your message"
                                    className={`${getInputCls(errors.message)} resize-none`}
                                    {...register("message")}
                                />
                                {errors.message && (
                                    <span className="mt-1.5 text-xs text-red-500">{errors.message.message}</span>
                                )}
                            </div>

                            {/* Consent */}
                            <p className="text-xs text-gray-500 leading-relaxed">
                                By clicking submit below, you consent to allow PayNback to store and process the personal information submitted above to provide you the content requested.
                            </p>

                            {/* hCaptcha (Mockup) */}
                            {/* <div className="inline-flex items-center justify-between border border-gray-200 rounded-lg bg-[#FAFAFA] px-4 py-3 w-[280px]">
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 border border-gray-300 rounded-sm bg-white cursor-pointer hover:border-gray-400 flex-shrink-0" />
                                    <span className="text-sm text-gray-700 font-medium">I am human</span>
                                </div>
                                <div className="flex flex-col items-center justify-center pt-0.5">
                                    <div className="w-7 h-7 flex items-center justify-center">
                                        <svg viewBox="0 0 32 32" className="w-full h-full text-teal-500" fill="currentColor">
                                            <path d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12 12.014 12.014 0 0 1-12 12Z" />
                                            <path d="M16 6a10 10 0 1 0 10 10A10.011 10.011 0 0 0 16 6Zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z" />
                                            <path d="M16 10a6 6 0 1 0 6 6 6.007 6.007 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4Z" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] text-gray-500 mt-0.5 whitespace-nowrap">Privacy - Terms</span>
                                </div>
                            </div> */}

                            {/* Status Message Animation */}
                            <div className="min-h-[50px] flex flex-col justify-center">
                                <AnimatePresence mode="wait">
                                    {isSubmitting ? (
                                        <motion.div
                                            key="submitting"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="flex items-center justify-center text-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-sm text-(--brand-primary) border border-blue-100/50"
                                        >
                                            <Loader2 className="h-5 w-5 animate-spin shrink-0" />
                                            <span className="font-medium">Submitting application...</span>
                                        </motion.div>
                                    ) : errorMessage ? (
                                        <motion.div
                                            key="error"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                                            className="flex items-center justify-center text-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 border border-red-100/50"
                                        >
                                            <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                                            <span className="font-medium leading-relaxed">{errorMessage}</span>
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>
                            </div>

                            {/* Buttons */}
                            <div className="mt-2 flex flex-col sm:flex-row items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px] bg-(--brand-primary) active:scale-[0.98] text-white font-medium py-3.5 px-8 rounded-full transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={handleShare}
                                    className="flex items-center justify-center space-x-2 w-full sm:w-auto border border-gray-300 text-gray-700 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 cursor-pointer"
                                >
                                    <span>Share</span>
                                    <Share2 className="w-[16px] h-[16px]" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
