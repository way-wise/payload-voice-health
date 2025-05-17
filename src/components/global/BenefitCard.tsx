import React from 'react'
import Image from 'next/image'

type BenefitCardProps = {
  title: string
  points: string[]
  image: string
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, points, image }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-6">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <h3 className="text-2xl font-semibold text-[#261C53] mb-4">{title}</h3>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2 text-[#666666]">
            <i className="ri-check-line text-[#5F46CF] mt-1"></i>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BenefitCard
