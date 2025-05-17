import Image from 'next/image'
import Link from 'next/link'
import LottieWave from './LottieWave'
import type { Page } from '@/payload-types'

export default function HeroSection({ data }: { data: Page['hero'] }) {
  return (
    <section className="py-[60px] lg:py-[130px]">
      <div className="container mx-auto flex flex-col xl:flex-row gap-8 items-center justify-between">
        <div className="space-y-7 max-w-[542px]">
          <h1 className="text-3xl lg:text-[64px] text-[#261C53] font-Inter font-semibold lg:leading-[72px] traking-[-1px]">
            {data?.title || 'Automate patient engagement with AI voice agents'}
          </h1>
          <p className="text-base md:text-[20px] text-[#666666] font-Inter md:leading-8">
            {(data?.richText?.root?.children?.[0]?.text as string) ||
              "Our AI contact center agent answers your phones, makes calls, and replies to text messages so you don't have to. Fully automate repetitive admin tasks like appointment scheduling, referral management, and general inquiries through calls and text."}
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden text-[14px] font-Inter md:flex items-center gap-2 bg-[#5F46CF] text-white px-7 py-[14px] rounded-md transition-colors group"
            >
              Get in touch
              <i className="ri-arrow-right-up-line group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"></i>
            </Link>

            {data?.rating && (
              <>
                <h3 className="text-[40px] text-[#261C53] font-Inter font-semibold leading-[48px] traking-[-1px] border-r border-[#CFCFD6] pr-4">
                  {data.rating}
                </h3>
                <div>
                  <p className="text-base text-[#242E45] font-Inter leading-[160%]">
                    Top-rated business
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0003 15.2167L4.12246 18.5068L5.43524 11.8999L0.489746 7.32649L7.17895 6.53337L10.0003 0.416656L12.8217 6.53337L19.5108 7.32649L14.5654 11.8999L15.8782 18.5068L10.0003 15.2167Z"
                          fill="#5F46CF"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* 2nd Section */}
        <div className="relative w-[290px] h-[223px] sm:w-[400px] sm:h-[300px] lg:w-[663px] lg:h-[505px]">
          <Image
            src="/hero/hero_image-1.png"
            alt="Hero"
            fill
            className="size-full object-cover aspect-[663/505]"
          />
          <div className="absolute top-[92%] left-[35%] bg-white border border-[#5F46CF] rounded-md h-16">
            <LottieWave />
          </div>
        </div>
      </div>
    </section>
  )
}
