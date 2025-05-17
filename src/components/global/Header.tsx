'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi'
import 'remixicon/fonts/remixicon.css'
import Logo from '@/public/global/logo.png'
import ContactForm from './ContactForm'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  return (
    <>
      <header className="w-full border-b border-gray-100">
        <div className="container py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo.src} alt="Logo" width={154} height={30} />
          </Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9 text-base text-[#261C53] font-Inter leading-7">
            <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link
              href="#features"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Testimonials
            </Link>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => setIsContactFormOpen(true)}
            className="hidden text-[14px] font-Inter lg:flex items-center gap-2 bg-[#5F46CF] text-white px-7 py-[14px] rounded-md transition-colors group"
          >
            Get in touch
            <i className="ri-arrow-right-up-line group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"></i>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-20 md:hidden">
              <div className="flex flex-col p-4">
                <Link
                  href="/"
                  className="py-2 text-gray-600 hover:text-indigo-600"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#features"
                  className="py-2 text-gray-600 hover:text-indigo-600"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#testimonials"
                  className="py-2 text-gray-600 hover:text-indigo-600"
                  onClick={() => setIsOpen(false)}
                >
                  Testimonials
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setIsContactFormOpen(true)
                  }}
                  className="mt-4 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
                >
                  Get in touch
                  <FiArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </>
  )
}
