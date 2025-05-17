import Image from 'next/image'
import type { Media } from '@/payload-types'

export type ParagraphBlockType = {
  title: string
  description: string
  image: Media
  className?: string
  blockType: 'paragraphBlock'
}

export default function ParagraphBlock({
  title,
  description,
  image,
  className = '',
}: ParagraphBlockType) {
  return (
    <div className={`py-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            {title && (
              <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">{title}</h1>
            )}
            {description && <p className="text-gray-600 text-lg">{description}</p>}
          </div>
          <div className="relative">
            <Image
              src={image.url || ''}
              alt={
                image.alt || 'Healthcare professional using digital interface with medical icons'
              }
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
