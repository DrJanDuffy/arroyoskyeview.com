'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function RequestInfo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    rentOrOwn: '',
    isRealtor: false,
    scheduleTour: false,
    tourPreferences: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Request Information</h2>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Do You Currently Rent or Own *
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="rentOrOwn"
                  value="rent"
                  checked={formData.rentOrOwn === 'rent'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Rent
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="rentOrOwn"
                  value="own"
                  checked={formData.rentOrOwn === 'own'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Own
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isRealtor"
                checked={formData.isRealtor}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">I'm a realtor (required)</span>
            </label>
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="scheduleTour"
                checked={formData.scheduleTour}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">Schedule a Tour</span>
            </label>
          </div>

          {formData.scheduleTour && (
            <div className="mb-6">
              <label htmlFor="tourPreferences" className="block text-sm font-medium text-gray-700 mb-2">
                Tour Preferences
              </label>
              <textarea
                id="tourPreferences"
                name="tourPreferences"
                value={formData.tourPreferences}
                onChange={handleChange}
                rows={3}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Let us know your preferred dates and times..."
              />
            </div>
          )}

          <div className="text-xs text-gray-500 mb-6">
            <p>
              Century Communities' privacy policy can be found at{' '}
              <a href="#" className="text-blue-600 hover:underline">www.centurycommunities.com/privacy-policy</a>.
              You understand that by providing your information to us, we will reach out to you via the information you provide us.
              Standard text message rates apply. Users can opt out of text messages at any time by texting STOP.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Submit
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => window.location.href = 'tel:702-730-4329'}
            >
              Call Now: 702-730-4329
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

