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
  if (!integrations?.length) return null

  return (
    <section className="pt-[56px] pb-10 md:pb-[92px] bg-[#F2F2F2]">
      <div className="container lg:bg-[url(/global/integration/bg_image.png)] bg-cover bg-center bg-no-repeat lg:h-[536px] relative">
        <h2 className="text-center max-w-[502px] mx-auto md:text-[40px] text-[26px] text-[#261C53] font-Inter font-semibold md:leading-[48px] leading-7 tracking-[-1px]">
          Always connected to your EHR, every step of the way.
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

        <div className="hidden lg:block">
          {/* logo 1 */}
          <div className="group">
            <div className="bg-white rounded-[13px] w-[160px] h-[100px] border border-[#CCCCCC] px-[28px] py-[16px] absolute top-[64%] left-[26%] group-hover:scale-110 transition-transform">
              <Image
                src={integrations[0]?.logo?.url || ''}
                alt="modmed"
                width={103}
                height={66}
                className="w-full h-full"
              />
            </div>
          </div>
          {/* logo 2 */}
          <div className="group">
            <div className="bg-white rounded-[13px] w-[160px] h-[100px] border border-[#CCCCCC] px-[34px] py-[32px] absolute top-[60%] left-[10%] group-hover:scale-110 transition-transform">
              <Image
                src={integrations[1]?.logo?.url || ''}
                alt="modmed"
                width={92}
                height={35}
                className="w-full h-full"
              />
            </div>
          </div>
          {/* logo 3 */}
          <div className="group">
            <div className="bg-white rounded-[13px] w-[160px] h-[100px] border border-[#CCCCCC] px-[18px] py-[31px] absolute top-[34%] left-[18%] group-hover:scale-110 transition-transform">
              <Image
                src={integrations[2]?.logo?.url || ''}
                alt="modmed"
                width={124}
                height={38}
                className="w-full h-full"
              />
            </div>
          </div>
          {/* logo 4 */}
          <div className="group">
            <div className="bg-white rounded-[13px] w-[160px] h-[100px] border border-[#CCCCCC] px-[24px] py-[33px] absolute top-[44%] right-[25%] group-hover:scale-110 transition-transform">
              <Image
                src={integrations[3]?.logo?.url || ''}
                alt="modmed"
                width={112}
                height={35}
                className="w-full h-full"
              />
            </div>
          </div>
          {/* logo 5 */}
          <div className="group">
            <div className="bg-white rounded-[13px] w-[160px] h-[100px] border border-[#CCCCCC] px-[19px] py-[31px] absolute bottom-[13%] right-[16%] group-hover:scale-110 transition-transform">
              <Image
                src={integrations[4]?.logo?.url || ''}
                alt="modmed"
                width={122}
                height={37}
                className="w-full h-full"
              />
            </div>
          </div>
          {/* logo 6 */}
          <div className="group">
            <div className="bg-white rounded-[13px] w-[160px] h-[100px] border border-[#CCCCCC] px-[23px] py-[27px] absolute top-[36%] right-[8%] group-hover:scale-110 transition-transform">
              <Image
                src={integrations[5]?.logo?.url || ''}
                alt="modmed"
                width={114}
                height={46}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden mt-10 px-4 grid grid-cols-2 gap-4 justify-items-center">
          {integrations.map((logo, i) => (
            <div
              key={i}
              className="bg-white !rounded-[6px] md:rounded-[13px] w-full lg:w-[120px] h-24 lg:h-[80px] border border-[#CCCCCC] p-4 flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Image
                src={logo.logo.url}
                alt={`Integration ${i}`}
                width={103}
                height={66}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
