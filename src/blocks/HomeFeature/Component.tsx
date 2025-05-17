'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import PlayButton from '@/public/global/play.png'

type Feature = {
  label: string
  description: string
  video: {
    url: string
  }
  thumbnail: {
    url: string
  }
}

type HomeFeatureBlockProps = {
  title: string
  subtitle: string
  features: Feature[]
  className?: string
}

export const HomeFeatureBlock: React.FC<HomeFeatureBlockProps> = ({
  title,
  subtitle,
  features,
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hasPlayedBefore, setHasPlayedBefore] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch((error) => {
        console.error('Error playing video:', error)
      })
      setIsPlaying(true)
      setHasPlayedBefore(true)
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      // Reset video state when changing tabs
      videoRef.current.currentTime = 0

      if (hasPlayedBefore) {
        // Auto play if user has played a video before
        videoRef.current.play().catch((error) => {
          console.error('Error playing video:', error)
        })
        setIsPlaying(true)
      } else {
        // Show play button if user hasn't played any video yet
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }, [activeIndex, hasPlayedBefore])

  if (!features.length) {
    return null
  }

  const activeFeature = features[activeIndex] as Feature

  return (
    <section className={`py-16 lg:py-[96px] ${className || ''}`} id="features">
      <div className="container">
        <div className="max-w-[664px] mx-auto mb-[34px]">
          <h2 className="text-center text-3xl md:text-[40px] text-[#261C53] font-Inter font-semibold md:leading-[48px] tracking-[-1px] mb-4">
            {title}
          </h2>
          <p className="text-center text-base md:text-[20px] text-[#666666] font-Inter md:leading-7">
            {subtitle}
          </p>
        </div>
        <div className="bg-white border rounded-[8px] overflow-hidden lg:flex">
          <div className="border-r w-full lg:max-w-[300px] xl:max-w-[417px]">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-4 md:px-7 py-4 lg:py-10 text-base md:text-[20px] font-Inter md:leading-7 border-b md:border-b-1 transition-colors ${
                  index === activeIndex
                    ? 'bg-[#5F46CF] text-white'
                    : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                }`}
              >
                {feature.label}
              </button>
            ))}
          </div>

          <div className="lg:w-2/3 p-3 md:p-10 space-y-4">
            <div className="relative w-full">
              <video
                ref={videoRef}
                src={activeFeature.video.url}
                poster={activeFeature.thumbnail.url}
                width={799}
                height={448}
                controls={isPlaying}
                className="rounded-md w-full h-auto object-cover"
                onError={(e) => console.error('Video error:', e)}
                onEnded={() => setIsPlaying(false)}
              />
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlay}
                    className="bg-white/60 rounded-full p-2 backdrop-blur-md"
                  >
                    <Image
                      src={PlayButton.src}
                      width={100}
                      height={100}
                      alt={activeFeature.label}
                    />
                  </button>
                </div>
              )}
            </div>
            <p className="text-base text-[#666666] font-Inter leading-6 mt-4">
              {activeFeature.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
