import React from 'react'
import Image from 'next/image'
import { Media } from '@/components/Media'

type Testimonial = {
  name: string
  title: string
  testimonial: string
  image: {
    url: string
    alt: string
  }
  company: {
    url: string
    alt: string
  }
}

type Props = {
  testimonials: Testimonial[]
  title: string
}

export const HomeTestimonialsBlock: React.FC<Props> = ({ testimonials, title }) => {
  return (
    <section className="md:pt-4 pt-2 pb-20 md:pb-[96px]" id="testimonials">
      <div className="container">
        <h2 className="text-center text-[26px] md:text-[40px] text-[#261C53] font-Inter font-semibold md:leading-[48px] leading-7 tracking-[-1px]">
          {title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 mt-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 md:gap-6 p-6 md:p-10 border border-[#999999] rounded-[8px]"
            >
              <p className="text-[14px] md:text-[20px] text-[#333333] font-Inter font-normal md:leading-7 leading-6">
                {item.testimonial}
              </p>

              {/* Quote SVG */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.3613 11.1314C34.0783 12.9541 35.0003 14.9998 35.0003 18.316C35.0003 24.1483 30.9062 29.377 24.9493 31.9612L23.4615 29.6652C29.0203 26.6575 30.1067 22.7563 30.541 20.2965C29.646 20.7593 28.4743 20.922 27.3258 20.8157C24.3185 20.5368 21.9483 18.068 21.9483 14.9998C21.9483 11.7782 24.56 9.1665 27.7817 9.1665C29.5702 9.1665 31.2803 9.98392 32.3613 11.1314ZM15.6946 11.1314C17.4117 12.9541 18.3337 14.9998 18.3337 18.316C18.3337 24.1483 14.2395 29.377 8.28267 31.9612L6.79485 29.6652C12.3536 26.6575 13.44 22.7563 13.8743 20.2965C12.9793 20.7593 11.8077 20.922 10.6591 20.8157C7.65185 20.5368 5.28174 18.068 5.28174 14.9998C5.28174 11.7782 7.89341 9.1665 11.1151 9.1665C12.9035 9.1665 14.6137 9.98392 15.6946 11.1314Z"
                  fill="#5F46CF"
                />
              </svg>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={item.image.url}
                    alt={item.image.alt}
                    width={56}
                    height={56}
                    className="rounded-full w-[48px] h-[48px] md:w-[56px] md:h-[56px]"
                  />
                  <div>
                    <h4 className="text-[14px] md:text-[20px] text-[#261C53] font-Inter font-semibold leading-7">
                      {item.name}
                    </h4>
                    <p className="text-[12px] md:text-base text-[#666666] font-Inter font-normal leading-6">
                      {item.title}
                    </p>
                  </div>
                </div>
                <Image
                  src={item.company.url}
                  alt={item.company.alt}
                  width={66}
                  height={40}
                  className="w-auto h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
