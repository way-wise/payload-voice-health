import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import type { Media } from '@/payload-types'

interface Feature {
  title: string
  description: string
}

interface ListBlockProps {
  title: string
  description: string
  image: Media
  features: Feature[]
  backgroundColor?: string
  textColor?: string
  accentColor?: string
}

export default function ListBlock({
  title,
  description,
  image,
  features,
  backgroundColor = 'bg-white',
  textColor = 'text-purple-900',
  accentColor = 'text-purple-600',
}: ListBlockProps) {
  return (
    <div className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="md:sticky md:top-8">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-6`}>{title}</h2>
            )}
            {description && <p className="text-gray-600 mb-6">{description}</p>}
            <div className="relative">
              <Image
                src={image.url || ''}
                alt={image.alt || 'AI assistant for healthcare'}
                width={500}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-transparent rounded-lg p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <ArrowRight className={`h-5 w-5 ${accentColor}`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${textColor} mb-2`}>{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
