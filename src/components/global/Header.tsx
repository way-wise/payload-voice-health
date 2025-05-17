'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi'
import 'remixicon/fonts/remixicon.css'
import type { Header as HeaderType } from '@/payload-types'
import ContactForm from './ContactForm'

interface HeaderProps {
  data: HeaderType
}

export default function Header({ data }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (menuName: string) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName)
  }

  const toggleMobileSubmenu = (menuName: string) => {
    setMobileSubmenu(mobileSubmenu === menuName ? null : menuName)
  }

  const getLinkHref = (link: any) => {
    if (link.type === 'reference' && link.reference) {
      return `/${link.reference.relationTo}/${link.reference.value.slug}`
    }
    return link.url || '#'
  }

  return (
    <>
      <header className="w-full border-b border-gray-100">
        <div className="container py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {data.logo && typeof data.logo !== 'string' && data.logo.url && (
              <Image src={data.logo.url} alt={data.logo.alt || 'Logo'} width={154} height={30} />
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9 text-base text-[#261C53] font-Inter leading-7">
            {data.navItems?.map((item, index) => (
              <div key={index} className="relative group">
                {item.type === 'simple' ? (
                  <Link
                    href={getLinkHref(item.link)}
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                    target={item.link.newTab ? '_blank' : undefined}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1"
                      onClick={() => toggleSubmenu(item.label)}
                    >
                      {item.label}
                      <i className="ri-arrow-down-s-line"></i>
                    </button>
                    <div
                      className={`absolute z-50 top-full left-0 mt-2 w-64 bg-white border border-gray-100 shadow-lg rounded-lg p-4 ${
                        activeSubmenu === item.label ? 'block' : 'hidden group-hover:block'
                      } pt-2`}
                    >
                      <div className="absolute -top-2 left-0 right-0 h-2"></div>
                      <div className="grid grid-cols-1 gap-0">
                        {item.subItems?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={getLinkHref(subItem.link)}
                            className="text-gray-600 hover:text-indigo-600 transition-colors text-sm py-2"
                            target={subItem.link.newTab ? '_blank' : undefined}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          {data.ctaButton && (
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="hidden text-[14px] font-Inter lg:flex items-center gap-2 bg-[#5F46CF] text-white px-7 py-[14px] rounded-md transition-colors group"
            >
              {data.ctaButton.label}
              <i className="ri-arrow-right-up-line group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"></i>
            </button>
          )}

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'visible' : 'invisible'
            }`}
          >
            {/* Backdrop */}
            <div
              className={`fixed inset-0 bg-black/50 transition-all duration-300 ease-in-out ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <div
              className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-lg transition-all duration-300 ease-in-out transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {data.logo && typeof data.logo !== 'string' && data.logo.url && (
                      <Image
                        src={data.logo.url}
                        alt={data.logo.alt || 'Logo'}
                        width={154}
                        height={30}
                      />
                    )}
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-4">
                    {data.navItems?.map((item, index) => (
                      <div key={index} className="mb-4">
                        {item.type === 'simple' ? (
                          <Link
                            href={getLinkHref(item.link)}
                            className="block py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                            target={item.link.newTab ? '_blank' : undefined}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <>
                            <button
                              onClick={() => toggleMobileSubmenu(item.label)}
                              className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                            >
                              <h3 className="font-semibold text-gray-900">{item.label}</h3>
                              <i
                                className={`ri-arrow-${
                                  mobileSubmenu === item.label ? 'up' : 'down'
                                }-s-line transition-transform duration-300`}
                              ></i>
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                mobileSubmenu === item.label
                                  ? 'max-h-96 opacity-100'
                                  : 'max-h-0 opacity-0'
                              }`}
                            >
                              <div className="pl-4 mt-2">
                                {item.subItems?.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={getLinkHref(subItem.link)}
                                    className="block py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                    target={subItem.link.newTab ? '_blank' : undefined}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                {data.ctaButton && (
                  <div className="p-4 border-t">
                    <button
                      onClick={() => {
                        setIsOpen(false)
                        setIsContactFormOpen(true)
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
                    >
                      {data.ctaButton.label}
                      <FiArrowRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </>
  )
}
