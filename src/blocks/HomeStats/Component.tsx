'use client'

import React from 'react'
import { cn } from '@/utilities/ui'
import Image from 'next/image'
import CountUp from 'react-countup'
import LottieWave from '@/components/global/LottieWave'

type Stat = {
  title: string
  description: string
}

type HomeStatsBlockProps = {
  image: {
    url: string
    alt: string
  }
  stats: Stat[]
  className?: string
}

export const HomeStatsBlock: React.FC<HomeStatsBlockProps> = ({ image, stats, className }) => {
  return (
    <section className={cn('bg-[#F2F2F2] py-16 lg:py-[96px]', className)}>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center">
            <Image
              src={image.url}
              alt={image.alt}
              width={419}
              height={376}
              className="aspect-[419/376] w-full min-w-[300px] md:min-w-[500px] lg:min-w-[419px] h-auto"
            />
            <div className="relative w-[180px] md:w-[230px] h-12 md:h-16 rounded-[8px] bg-white border border-[#5F46CF] overflow-hidden ml-[-100px]">
              <LottieWave />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 md:gap-7 gap-4">
            {stats.map((stat, index) => {
              const onlyNumbers = stat.title.replace(/[^0-9.]/g, '')
              const hasPercent = stat.title.includes('%')
              const hasNegative = stat.title.includes('-')
              const isCountable = /^\-?\d+%?$/.test(stat.title)

              return (
                <div
                  key={index}
                  className="bg-[#FFFFFF] border border-[#CCCCCC] p-4 md:p-6 rounded-[8px] flex flex-col items-start md:gap-4 gap-2"
                >
                  <h3 className="text-[32px] md:text-[48px] text-[#261C53] font-Inter font-semibold md:leading-[56px] leading-[40px] tracking-[-1px]">
                    {isCountable ? (
                      <CountUp
                        end={parseFloat(onlyNumbers)}
                        duration={2}
                        prefix={hasNegative ? '-' : ''}
                        suffix={hasPercent ? '%' : ''}
                        enableScrollSpy
                        scrollSpyOnce={false}
                        scrollSpyDelay={200}
                      />
                    ) : (
                      stat.title
                    )}
                  </h3>
                  <p className="text-base text-[#666666] font-Inter leading-6 max-w-[172px]">
                    {stat.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
