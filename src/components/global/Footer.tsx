import Link from 'next/link'
import React from 'react'
import type { Footer } from '@/payload-types'

type FooterProps = {
  data: Footer
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-[#392A7C] py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center">
          <div className="flex gap-1.5 sm:gap-2 mt-4 md:mt-0 text-white/80 font-Inter text-sm sm:text-base sm:leading-6">
            {data.navItems?.map((item: NonNullable<Footer['navItems']>[number], i: number) => (
              <React.Fragment key={item.id || i}>
                <Link
                  href={item.link.url || '#'}
                  target={item.link.newTab ? '_blank' : undefined}
                  rel={item.link.newTab ? 'noopener noreferrer' : undefined}
                >
                  {item.link.label}
                </Link>
                {i < (data.navItems?.length || 0) - 1 && (
                  <div className="border-r border-white"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="text-white font-Inter text-base leading-6">
            © {new Date().getFullYear()} Voice Health AI
          </div>
        </div>
      </div>
    </footer>
  )
}
