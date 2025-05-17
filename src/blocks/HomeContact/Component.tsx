'use client'

import React from 'react'
import Link from 'next/link'

type HomeContactBlockProps = {
  title: string
  email: string
  mapEmbedUrl: string
  className?: string
}

export const HomeContactBlock: React.FC<HomeContactBlockProps> = ({
  title,
  email,
  mapEmbedUrl,
  className,
}) => {
  return (
    <section className={`bg-[#5F46CF] py-10 md:py-16 ${className || ''}`}>
      <div className="container flex flex-col xl:flex-row items-center xl:justify-between gap-10">
        <div className="flex flex-col gap-6 max-w-[546px]">
          <h2 className="text-[26px] md:text-[40px] text-white font-Inter font-semibold leading-[36px] md:leading-[48px] tracking-[-1px]">
            {title}
          </h2>
          <Link
            href={`mailto:${email}`}
            className="flex items-center md:gap-3 gap-1 md:text-[20px] text-base text-white font-Inter font-normal md:leading-7 leading-6"
          >
            <i className="ri-mail-send-line size-6"></i>
            {email}
          </Link>
          <Link
            href="/contact"
            className="text-[14px] font-Inter font-semibold leading-[130%] md:flex hidden items-center gap-2 bg-white text-[#5F46CF] px-7 py-[14px] !rounded-[6px] transition-colors group w-fit"
          >
            Get in touch
            <i className="ri-arrow-right-up-line group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </div>

        <div className="relative w-full xl:w-[600px] h-[300px] md:h-[400px]">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> */}
        </div>
      </div>
    </section>
  )
}
