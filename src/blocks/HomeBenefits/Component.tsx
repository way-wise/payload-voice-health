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
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <Image
                  src={benefit.image.url}
                  alt={benefit.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#261C53] mb-4">{benefit.title}</h3>
              <ul className="space-y-3">
                {benefit.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2 text-[#666666]">
                    <i className="ri-check-line text-[#5F46CF] mt-1"></i>
                    <span>{point.point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
