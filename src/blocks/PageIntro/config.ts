import type { Block } from 'payload'

export interface PageIntroBlockProps {
  title: string
  description?: string
  backgroundImage: {
    url: string
  }
}

export const PageIntroBlock: Block = {
  slug: 'pageIntro',
  labels: {
    singular: 'Page Intro',
    plural: 'Page Intros',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Background Image',
    },
  ],
}
