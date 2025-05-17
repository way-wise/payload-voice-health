'use client'

import React from 'react'
import Image from 'next/image'

type Integration = {
  logo: {
    url: string
  }
  position: 'left-1' | 'left-2' | 'left-3' | 'right-1' | 'right-2' | 'right-3'
}

type HomeIntegrationBlockProps = {
  title: string
  centerImage: {
    url: string
  }
  integrations: Integration[]
  className?: string
}

const getPositionClasses = (position: Integration['position']) => {
  const positions = {
    'left-1': 'top-[34%] left-[18%]',
    'left-2': 'top-[60%] left-[10%]',
    'left-3': 'bottom-[34%] left-[18%]',
    'right-1': 'top-[34%] right-[18%]',
    'right-2': 'top-[44%] right-[25%]',
    'right-3': 'bottom-[13%] right-[16%]',
  }
  return positions[position] || ''
}

export const HomeIntegrationBlock: React.FC<HomeIntegrationBlockProps> = ({
  title,
  centerImage,
  integrations,
  className,
}) => {
  return (
    <section className={`pt-[56px] pb-10 md:pb-[92px] bg-[#F2F2F2] ${className || ''}`}>
      <div className="container lg:bg-[url(/integration/bg_image.png)] bg-cover bg-center bg-no-repeat lg:h-[536px] relative">
        <h2 className="text-center max-w-[502px] mx-auto md:text-[40px] text-[26px] text-[#261C53] font-Inter font-semibold md:leading-[48px] leading-7 tracking-[-1px]">
          {title}
        </h2>
        <div className="flex items-center justify-center group mt-[30px] lg:mt-0">
          <Image
            src={centerImage.url}
            alt=""
            width={158}
            height={158}
            className="lg:absolute lg:top-[65%] lg:left-[51%] lg:-translate-x-1/2 lg:-translate-y-1/2 w-[120px] md:w-[158px] group-hover:scale-110 transition-transform"
          />
        </div>

        {/* Desktop Integration Logos */}
        <div className="hidden lg:block">
          {integrations.map((integration, index) => (
            <div key={index} className="group">
              <div
                className={`bg-white rounded-[13px] w-[160px] h-[100px] border border-[#CCCCCC] p-4 absolute ${getPositionClasses(
                  integration.position,
                )} group-hover:scale-110 transition-transform`}
              >
                <Image
                  src={integration.logo.url}
                  alt={`Integration ${index + 1}`}
                  width={120}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Integration Logos */}
        <div className="lg:hidden mt-10 px-4 grid grid-cols-2 gap-4 justify-items-center">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-md md:rounded-[13px] w-full lg:w-[120px] h-24 lg:h-[80px] border border-[#CCCCCC] p-4 flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Image
                src={integration.logo.url}
                alt={`Integration ${index + 1}`}
                width={120}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
