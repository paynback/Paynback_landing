'use client'

import { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, AlertCircle, Loader2, CheckCircle2 } from 'lucide-react'
import { LiaExchangeAltSolid } from "react-icons/lia"
import { IoCloseOutline } from "react-icons/io5"
import Image from 'next/image'
import { submitMerchantForm, fetchShopCategories, fetchSubCategories } from '../services/merchantService'
import { LOCATION_UPDATED_EVENT } from '@/components/providers/GeolocationProvider'
import { useMsmeLocation } from '@/app/msme/components/MsmeLocationProvider'

const msmeSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  phone: z.string().min(1, "Mobile number is required").regex(/^[0-9+\-\s()]*$/, "Please enter a valid phone number"),
  shopName: z.string().min(1, "Shop name is required"),
  category: z.string().min(1, "Category is required"),
  subCategory: z.string().optional(),
  address: z.string().min(1, "Address is required"),
  pincode: z.string().min(1, "Location PIN is required"),
})

export default function MsmeForm() {
  const { enableLocation } = useMsmeLocation()
  const fileInputRef = useRef(null)
  const [shopThumbnail, setShopThumbnail] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [categories, setCategories] = useState([])
  const [categoriesLoading, setCategoriesLoading] = useState(true)
  const [subCategories, setSubCategories] = useState([])
  const [subCategoriesLoading, setSubCategoriesLoading] = useState(false)
  const [allowLocationAccess, setAllowLocationAccess] = useState(false)

  useEffect(() => {
    fetchShopCategories()
      .then((data) => setCategories(data))
      .catch(() => setCategories([]))
      .finally(() => setCategoriesLoading(false))
  }, [])

  useEffect(() => {
    const syncLocation = () => {
      try {
        setAllowLocationAccess(!!localStorage.getItem('paynback_user_location'))
      } catch {
        setAllowLocationAccess(false)
      }
    }

    syncLocation()

    window.addEventListener(LOCATION_UPDATED_EVENT, syncLocation)
    window.addEventListener('storage', syncLocation)

    return () => {
      window.removeEventListener(LOCATION_UPDATED_EVENT, syncLocation)
      window.removeEventListener('storage', syncLocation)
    }
  }, [])

  useEffect(() => {
    if (!shopThumbnail) {
      setPreviewUrl(null)
      return
    }
    const url = URL.createObjectURL(shopThumbnail)
    setPreviewUrl(url)
    return () => URL.revokeObjectURL(url)
  }, [shopThumbnail])

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(msmeSchema),
    defaultValues: {
      name: '',
      phone: '',
      shopName: '',
      category: '',
      subCategory: '',
      address: '',
      pincode: '',
    },
  })

  const selectedCategory = watch("category");

  useEffect(() => {
    if (selectedCategory) {
      setSubCategoriesLoading(true);
      fetchSubCategories(selectedCategory)
        .then((data) => {
          setSubCategories(data);
          setValue("subCategory", "");
        })
        .catch(() => setSubCategories([]))
        .finally(() => setSubCategoriesLoading(false));
    } else {
      setSubCategories([]);
    }
  }, [selectedCategory, setValue]);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    setShopThumbnail(file || null)
  }

  const triggerFilePicker = () => {
    fileInputRef.current?.click()
  }

  const onSubmit = async (data) => {
    setErrorMessage('')
    setSuccessMessage('')

    if (!allowLocationAccess) {
      setErrorMessage('Please allow location access before submitting.')
      setTimeout(() => setErrorMessage(''), 5000)
      return
    }

    if (!shopThumbnail) {
      setErrorMessage('Please upload a shop thumbnail image.')
      setTimeout(() => setErrorMessage(''), 5000)
      return
    }

    setIsSubmitting(true)
    try {
      const response = await submitMerchantForm({
        ...data,
        shopThumbnail,
      })
      setSuccessMessage(response?.message || 'Submitted successfully.')
      reset()
      setShopThumbnail(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (error) {
      setErrorMessage(error?.message || 'Unable to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setErrorMessage('')
        setSuccessMessage('')
      }, 5000)
    }
  }

  const handleLocationConsentChange = (event) => {
    const isChecked = event.target.checked

    // Prevent unticking if location is already set
    if (!isChecked) {
      try {
        if (localStorage.getItem('paynback_user_location')) {
          return
        }
      } catch {}
    }

    setAllowLocationAccess(isChecked)

    if (isChecked) {
      void enableLocation()
    }
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-10 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
            <span className="text-(--brand-primary)">Be</span> Our Merchant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base md:text-lg text-slate-600 text-left">
            <p>
              Join PayNback’s merchant network and connect your business with customers seeking exclusive deals, rewards, and seamless digital payments.
            </p>
            <p>
              Boost your visibility, increase repeat purchases, and build stronger customer relationships through our smart rewards ecosystem.
            </p>
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

            {/* 2-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Full Name */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-(--brand-primary)">Full name*</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  {...register("name")}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors placeholder-gray-400 text-sm ${errors.name
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:border-(--brand-primary) focus:ring-(--brand-primary)"
                    }`}
                />
                {errors.name && (
                  <span className="mt-1.5 text-xs text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-(--brand-primary)">Mobile number*</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your mobile number"
                  {...register("phone")}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors placeholder-gray-400 text-sm ${errors.phone
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:border-(--brand-primary) focus:ring-(--brand-primary)"
                    }`}
                />
                {errors.phone && (
                  <span className="mt-1.5 text-xs text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              {/* Shop Name */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="shopName" className="text-sm font-medium text-(--brand-primary)">Shop name*</label>
                <input
                  type="text"
                  id="shopName"
                  placeholder="Enter your shop name"
                  {...register("shopName")}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors placeholder-gray-400 text-sm ${errors.shopName
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:border-(--brand-primary) focus:ring-(--brand-primary)"
                    }`}
                />
                {errors.shopName && (
                  <span className="mt-1.5 text-xs text-red-500">
                    {errors.shopName.message}
                  </span>
                )}
              </div>

              {/* Category */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="category" className="text-sm font-medium text-(--brand-primary)">Category*</label>
                <div className="relative">
                  <select
                    id="category"
                    {...register("category")}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors appearance-none text-sm text-gray-500 bg-white ${errors.category
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-200 focus:border-(--brand-primary) focus:ring-(--brand-primary)"
                      }`}
                    defaultValue=""
                    disabled={categoriesLoading}
                  >
                    <option value="" disabled>
                      {categoriesLoading ? 'Loading categories...' : 'Select category'}
                    </option>
                    {categories.map((cat) => (
                      <option key={cat.category_id} value={cat.category_id}>
                        {cat.categoryName}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    {categoriesLoading
                      ? <Loader2 className="h-4 w-4 animate-spin" />
                      : <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    }
                  </div>
                </div>
                {errors.category && (
                  <span className="mt-1.5 text-xs text-red-500">
                    {errors.category.message}
                  </span>
                )}
              </div>

              {/* Sub Category */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="subCategory" className="text-sm font-medium text-(--brand-primary)">Sub Category*</label>
                <div className="relative">
                  <select
                    id="subCategory"
                    {...register("subCategory")}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors appearance-none text-sm text-gray-500 bg-white ${errors.subCategory
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-200 focus:border-(--brand-primary) focus:ring-(--brand-primary)"
                      } disabled:bg-gray-50 disabled:text-gray-400`}
                    defaultValue=""
                    disabled={subCategoriesLoading || !selectedCategory || subCategories.length === 0}
                  >
                    <option value="" disabled>
                      {subCategoriesLoading 
                        ? 'Loading sub categories...' 
                        : !selectedCategory 
                          ? 'Select a category first'
                          : subCategories.length === 0 
                            ? 'No sub categories' 
                            : 'Select sub category'}
                    </option>
                    {subCategories.map((cat) => (
                      <option key={cat.category_id} value={cat.category_id}>
                        {cat.categoryName}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    {subCategoriesLoading
                      ? <Loader2 className="h-4 w-4 animate-spin" />
                      : <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    }
                  </div>
                </div>
                {errors.subCategory && (
                  <span className="mt-1.5 text-xs text-red-500">
                    {errors.subCategory.message}
                  </span>
                )}
              </div>

              {/* Address */}
              <div className="flex flex-col space-y-2 md:row-span-2">
                <label htmlFor="address" className="text-sm font-medium text-(--brand-primary)">Address*</label>
                <textarea
                  id="address"
                  placeholder="Enter your address"
                  {...register("address")}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors placeholder-gray-400 text-sm resize-none h-full min-h-[120px] ${errors.address
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:border-(--brand-primary) focus:ring-(--brand-primary)"
                    }`}
                />
                {errors.address && (
                  <span className="mt-1.5 text-xs text-red-500">
                    {errors.address.message}
                  </span>
                )}
              </div>

              {/* Location PIN */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="pincode" className="text-sm font-medium text-(--brand-primary)">Location PIN*</label>
                <input
                  type="text"
                  id="pincode"
                  placeholder="Enter your location PIN"
                  {...register("pincode")}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors placeholder-gray-400 text-sm ${errors.pincode
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:border-(--brand-primary) focus:ring-(--brand-primary)"
                    }`}
                />
                {errors.pincode && (
                  <span className="mt-1.5 text-xs text-red-500">
                    {errors.pincode.message}
                  </span>
                )}
              </div>

            </div>

            {/* Thumbnail Upload */}
            <div className="space-y-2 mt-6">
              <label className="text-sm font-medium text-(--brand-primary)">Thumbnail Upload*</label>
              
              {!shopThumbnail ? (
                <div
                  className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={triggerFilePicker}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      triggerFilePicker()
                    }
                  }}
                >
                  <Upload className="w-8 h-8 text-gray-400 mb-3" />
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="text-(--brand-primary) font-semibold">Upload an image</span>, Drag 'n' drop an image here or click to select image
                  </p>
                  <p className="text-xs text-gray-400">
                    jpg, png, upto 5MB
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              ) : (
                <div className="relative border-2 border-gray-200 rounded-xl overflow-hidden aspect-video max-h-[200px] flex items-center justify-center bg-gray-50 group">
                  {previewUrl && (
                    <Image 
                      src={previewUrl} 
                      alt="Thumbnail Preview" 
                      fill 
                      className="object-contain" 
                      unoptimized 
                    />
                  )}
                  
                  {/* Overlay for hover actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={triggerFilePicker}
                      className="text-white hover:bg-white/20 p-2 rounded-full transition-all cursor-pointer hover:scale-110"
                      title="Change image"
                    >
                      <LiaExchangeAltSolid className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShopThumbnail(null);
                        if (fileInputRef.current) {
                          fileInputRef.current.value = '';
                        }
                      }}
                      className="text-white hover:bg-red-500/80 p-2 rounded-full transition-all cursor-pointer hover:scale-110"
                      title="Remove image"
                    >
                      <IoCloseOutline className="w-6 h-6" />
                    </button>
                  </div>
                  
                  {/* Keep the input hidden but functional */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              )}
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 mt-4 leading-relaxed mb-10">
              By clicking submit below, you consent to allow PayNback to store and process the personal information submitted above to provide you the content requested.
            </p>

            <label className="flex items-start gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={allowLocationAccess}
                onChange={handleLocationConsentChange}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-(--brand-primary) focus:ring-(--brand-primary)"
              />
              <span>Allow access to your location</span>
            </label>

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
                ) : successMessage ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                    className="flex items-center justify-center text-center gap-3 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700 border border-emerald-100/50"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{successMessage}</span>
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

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting || !allowLocationAccess}
                className="block w-full sm:w-auto min-w-[240px] bg-(--brand-primary) hover:bg-(--brand-primary) active:scale-[0.98] text-white font-medium py-3.5 px-8 rounded-full transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-(--brand-primary) cursor-pointer focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  )
}
