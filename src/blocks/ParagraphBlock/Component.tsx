import Image from 'next/image'
import type { Media } from '@/payload-types'
import { cn } from '@/utilities/ui'

export type ParagraphBlockType = {
  title: string
  description: string
  image: Media
  className?: string
  imagePosition: 'left' | 'right'
  blockType: 'paragraphBlock'
  backgroundColor: 'gray-background' | 'white-background'
}

export default function ParagraphBlock({
  title,
  description,
  image,
  imagePosition,
  backgroundColor = 'white-background',
}: ParagraphBlockType) {
  return (
    <div className={cn('py-16', backgroundColor)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            {title && (
              <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">{title}</h1>
            )}
            {description && <p className="text-gray-600 text-lg">{description}</p>}
          </div>
          <div className={cn('relative', imagePosition === 'right' ? 'order-last' : '')}>
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
