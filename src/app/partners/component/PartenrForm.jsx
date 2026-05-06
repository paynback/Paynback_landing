"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Share2, UploadCloud } from 'lucide-react';

const CustomSelect = ({ options, value, onChange, placeholder }) => {
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

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div className="relative" ref={selectRef}>
            {/* Hidden native select for form submission / accessibility if needed */}
            <select className="hidden" value={value} onChange={() => {}} aria-hidden="true">
                <option value="">{placeholder}</option>
                {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>

            <div 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-(--brand-primary) focus:ring-(--brand-primary) transition-colors text-sm bg-white cursor-pointer flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={selectedOption ? 'text-slate-900' : 'text-gray-400'}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <svg className={`fill-current h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>

            {isOpen && (
                <div className="absolute z-20 w-full mt-1 bg-white rounded-lg shadow-[0_4px_20px_rgb(0,0,0,0.1)] border border-gray-100 py-1.5 overflow-hidden">
                    {options.map((option) => (
                        <div 
                            key={option.value}
                            className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between transition-colors"
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                        >
                            <span className="text-[13px] font-medium text-slate-700">{option.label}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${value === option.value ? 'border-(--brand-primary)' : 'border-gray-300'}`}>
                                {value === option.value && <div className="w-2 h-2 rounded-full bg-(--brand-primary)" />}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default function PartenrForm() {
    const [stateVal, setStateVal] = useState('');
    const [districtVal, setDistrictVal] = useState('');
    const [panchayatVal, setPanchayatVal] = useState('');

    const stateOptions = [
        { value: 'kerala', label: 'Kerala' },
        { value: 'tamil_nadu', label: 'Tamil Nadu' },
        { value: 'karnataka', label: 'Karnataka' },
    ];

    const districtOptions = [
        { value: 'district1', label: 'District 1' },
        { value: 'district2', label: 'District 2' },
        { value: 'district3', label: 'District 3' },
    ];

    const panchayatOptions = [
        { value: 'panchayat1', label: 'Panchayat 1' },
        { value: 'panchayat2', label: 'Panchayat 2' },
        { value: 'panchayat3', label: 'Panchayat 3' },
    ];

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10">
            <form className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-(--brand-primary)">First name*</label>
                        <input 
                            type="text" 
                            placeholder="Enter your first name" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-(--brand-primary) focus:ring-(--brand-primary) transition-colors placeholder-gray-400 text-sm"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-(--brand-primary)">Last name*</label>
                        <input 
                            type="text" 
                            placeholder="Enter your last name" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-(--brand-primary) focus:ring-(--brand-primary) transition-colors placeholder-gray-400 text-sm"
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-(--brand-primary)">Mobile number*</label>
                        <input 
                            type="tel" 
                            placeholder="Enter your mobile number" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-(--brand-primary) focus:ring-(--brand-primary) transition-colors placeholder-gray-400 text-sm"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-(--brand-primary)">E-mail id*</label>
                        <input 
                            type="email" 
                            placeholder="Enter your e-mail id" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-(--brand-primary) focus:ring-(--brand-primary) transition-colors placeholder-gray-400 text-sm"
                        />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-(--brand-primary)">State*</label>
                        <CustomSelect 
                            options={stateOptions}
                            value={stateVal}
                            onChange={setStateVal}
                            placeholder="Select state"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-(--brand-primary)">District*</label>
                        <CustomSelect 
                            options={districtOptions}
                            value={districtVal}
                            onChange={setDistrictVal}
                            placeholder="Select district"
                        />
                    </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-(--brand-primary)">Block panchayat*</label>
                        <CustomSelect 
                            options={panchayatOptions}
                            value={panchayatVal}
                            onChange={setPanchayatVal}
                            placeholder="Select block panchayat"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-(--brand-primary)">Location PIN*</label>
                        <input 
                            type="text" 
                            placeholder="Enter your location PIN" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-(--brand-primary) focus:ring-(--brand-primary) transition-colors placeholder-gray-400 text-sm"
                        />
                    </div>
                </div>

                {/* Row 5 - CV Upload */}
                <div className="space-y-2 mt-6">
                    <label className="text-sm font-medium text-(--brand-primary)">CV Upload*</label>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer group bg-white relative">
                        <UploadCloud className="w-8 h-8 text-gray-400 mb-3 group-hover:text-(--brand-primary) transition-colors" />
                        <div className="flex flex-col items-center text-sm text-gray-600 justify-center gap-1">
                            <p>
                                <span className="font-semibold text-(--brand-primary)">Upload a file</span>, Drag 'n' drop some files here or click to select files
                            </p>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX upto 5MB</p>
                        <input id="file-upload" name="file-upload" type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" />
                    </div>
                </div>

                {/* Row 6 - Message */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-(--brand-primary)">Message</label>
                    <textarea 
                        rows={4} 
                        placeholder="Enter your message" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-(--brand-primary) focus:ring-(--brand-primary) transition-colors placeholder-gray-400 text-sm resize-none"
                    ></textarea>
                </div>

                {/* Consent Text */}
                <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                    By clicking submit below, you consent to allow payNback to store and process the personal information submitted above to provide you the content requested.
                </p>

                {/* hCaptcha (Mockup) */}
                {/* <div className="inline-flex items-center justify-between border border-gray-200 rounded-lg bg-[#FAFAFA] px-4 py-3 w-[280px]">
                    <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 border border-gray-300 rounded-sm bg-white cursor-pointer hover:border-gray-400 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700 font-medium">I am human</span>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-0.5">
                        <div className="w-7 h-7 flex items-center justify-center">
                            <svg viewBox="0 0 32 32" className="w-full h-full text-teal-500" fill="currentColor">
                                <path d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12 12.014 12.014 0 0 1-12 12Z"/>
                                <path d="M16 6a10 10 0 1 0 10 10A10.011 10.011 0 0 0 16 6Zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z"/>
                                <path d="M16 10a6 6 0 1 0 6 6 6.007 6.007 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4Z"/>
                            </svg>
                        </div>
                        <span className="text-[10px] text-gray-500 mt-0.5 whitespace-nowrap">Privacy - Terms</span>
                    </div>
                </div> */}

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                    <button 
                        type="submit" 
                        className="block w-full sm:w-auto min-w-[200px] bg-(--brand-primary) hover:bg-(--brand-primary) active:scale-[0.98] text-white font-medium py-3.5 px-8 rounded-full transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-(--brand-primary) cursor-pointer focus:ring-offset-2"
                    >
                        Submit
                    </button>
                    <button 
                        type="button" 
                        className="flex items-center justify-center space-x-2 block w-full sm:w-auto border border-gray-300 text-gray-700 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                    >
                        <span>Share</span>
                        <Share2 className="w-[16px] h-[16px]" />
                    </button>
                </div>
            </form>
        </div>
    );
}
