'use client'

import React from 'react'
import Image from 'next/image'

type Client = {
  logo: {
    url: string
    alt: string
  }
  alt: string
}

type HomeClientsBlockProps = {
  title: string
  clients: Client[]
  className?: string
}

export const HomeClientsBlock: React.FC<HomeClientsBlockProps> = ({
  title,
  clients,
  className,
}) => {
  return (
    <section
      id="trusted-clients"
      className={`py-[60px] ${className || ''}`}
      aria-labelledby="trusted-clients-title"
    >
      <div className="container">
        <div className="flex flex-col md:gap-10">
          <h5
            id="trusted-clients-title"
            className="text-center text-[20px] text-[#09081F] font-Inter font-semibold leading-7 tracking-[-0.5px]"
          >
            {title}
          </h5>
        </div>
        <div
          className="slider-container mt-[30px] overflow-hidden"
          aria-label="Trusted clients logo slider"
        >
          <div
            className="slide-content-toleft flex items-center gap-8 xl:gap-14 animate-slide"
            aria-roledescription="carousel"
          >
            {[...clients, ...clients].map((client, index) => (
              <Image
                key={index}
                width={152}
                height={27}
                src={client.logo.url}
                alt={client.alt}
                className="aspect-auto min-h-[27px]"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 30s linear infinite;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
