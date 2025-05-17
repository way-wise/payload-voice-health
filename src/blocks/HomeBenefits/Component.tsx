'use client'

import React from 'react'
import Image from 'next/image'

type BenefitPoint = {
  point: string
}

type Benefit = {
  title: string
  points: BenefitPoint[]
  image: {
    url: string
  }
}

type HomeBenefitsBlockProps = {
  benefits: Benefit[]
  className?: string
}

export const HomeBenefitsBlock: React.FC<HomeBenefitsBlockProps> = ({ benefits, className }) => {
  return (
    <section className={`py-16 lg:py-[96px] ${className || ''}`}>
      <div className="container">
        <div className="grid grid-row-3 gap-10">
          {benefits.map((benefit, index) => (
            <div className="bg-[#F2F2F2] p-6 md:p-10 rounded-[8px] sticky top-20" key={index}>
              <div className="flex lg:items-center flex-col lg:flex-row lg:gap-20 gap-8">
                <Image
                  src={benefit.image.url}
                  alt={benefit.title}
                  width={500}
                  height={420}
                  className="w-full rounded-[8px] md:rounded-[16px] md:w-[500px]"
                />
                <div className="flex flex-col md:gap-[33px] gap-[20px] md:max-w-[461px]">
                  <h2 className="text-[26px] md:text-[40px] text-[#261C53] font-Inter font-semibold md:leading-[48px] leading-7 tracking-[-1px]">
                    {benefit.title}
                  </h2>
                  <div className="flex flex-col md:gap-4 gap-2">
                    {benefit.points.map((point, index) => (
                      <div className="flex items-start gap-[5px]" key={index}>
                        <i className="ri-arrow-right-up-line text-[#5E6672] mr-[5px]"></i>
                        <p className="text-base md:text-[20px] text-[#5E6672] font-Inter font-normal md:leading-7 leading-6">
                          {point.point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
