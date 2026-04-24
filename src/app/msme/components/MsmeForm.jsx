'use client'
import { motion } from 'framer-motion'
import { Upload } from 'lucide-react'

export default function MsmeForm() {
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
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-4">
            Be <span className="text-(--brand-primary)">Our Merchant</span>
          </h2>
          <p className="text-base text-slate-600 max-w-lg mx-auto md:mx-0">
            Partner with us to boost visibility, increase sales, and scale smarter.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <form className="space-y-6">
            
            {/* 2-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-(--brand-primary)">Full name*</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-(--brand-primary) transition-colors placeholder-gray-400 text-sm"
                  required
                />
              </div>

              {/* Mobile Number */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-(--brand-primary)">Mobile number*</label>
                <input 
                  type="tel" 
                  placeholder="Enter your mobile number" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-(--brand-primary) transition-colors placeholder-gray-400 text-sm"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-(--brand-primary)">E-mail id*</label>
                <input 
                  type="email" 
                  placeholder="Enter your e-mail id" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-(--brand-primary) transition-colors placeholder-gray-400 text-sm"
                  required
                />
              </div>

              {/* District */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-(--brand-primary)">District*</label>
                <div className="relative">
                  <select 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-(--brand-primary) transition-colors appearance-none text-sm text-gray-500 bg-white"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select district</option>
                    <option value="kochi">Ernakulam</option>
                    <option value="trivandrum">Trivandrum</option>
                    {/* Add more as needed */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              {/* Shop Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-(--brand-primary)">Shop name*</label>
                <input 
                  type="text" 
                  placeholder="Enter your shop name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-(--brand-primary) transition-colors placeholder-gray-400 text-sm"
                  required
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-(--brand-primary)">Category*</label>
                <div className="relative">
                  <select 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-(--brand-primary) transition-colors appearance-none text-sm text-gray-500 bg-white"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select category</option>
                    <option value="retail">Retail</option>
                    <option value="food">Food & Beverage</option>
                    <option value="services">Services</option>
                    {/* Add more as needed */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              {/* Shop Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-(--brand-primary)">Shop Location*</label>
                <input 
                  type="text" 
                  placeholder="Enter your shop location" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-(--brand-primary) transition-colors placeholder-gray-400 text-sm"
                  required
                />
              </div>

              {/* Location PIN */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-(--brand-primary)">Location PIN*</label>
                <input 
                  type="text" 
                  placeholder="Enter your location PIN" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-(--brand-primary) transition-colors placeholder-gray-400 text-sm"
                  required
                />
              </div>

            </div>

            {/* Thumbnail Upload */}
            <div className="space-y-2 mt-6">
              <label className="text-sm font-medium text-(--brand-primary)">Thumbnail Upload*</label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mb-3" />
                <p className="text-sm text-gray-600 mb-1">
                  <span className="text-(--brand-primary) font-semibold">Upload an image</span>, Drag 'n' drop an image here or click to select image
                </p>
                <p className="text-xs text-gray-400">
                  jpg, png, upto 5MB
                </p>
                {/* Hidden file input would go here */}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2 mt-6">
              <label className="text-sm font-medium text-(--brand-primary)">Message</label>
              <textarea 
                placeholder="Enter your message" 
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-(--brand-primary) transition-colors placeholder-gray-400 text-sm resize-none"
              ></textarea>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              By clicking submit below, you consent to allow paynback to store and process the personal information submitted above to provide you the content requested.
            </p>

            {/* Captcha Placeholder */}
            <div className="mt-4 flex items-center gap-3 p-3 border border-gray-200 rounded-lg w-fit bg-gray-50">
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
              <span className="text-sm text-gray-700">I am human</span>
              <div className="ml-8 flex flex-col items-center">
                {/* Simulated reCAPTCHA logo */}
                <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center bg-white shadow-sm">
                  <span className="text-(--brand-primary) font-bold text-xs">↻</span>
                </div>
                <span className="text-[10px] text-gray-400 mt-1">reCAPTCHA</span>
                <span className="text-[8px] text-gray-400">Privacy - Terms</span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button 
                type="submit"
                className="bg-(--brand-primary) hover:bg-(--brand-primary) active:scale-[0.98] text-white font-medium py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:ring-offset-2"
              >
                Submit
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  )
}
