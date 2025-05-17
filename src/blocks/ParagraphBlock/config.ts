import type { Block } from 'payload'

export const ParagraphBlock: Block = {
  slug: 'paragraphBlock',
  labels: {
    singular: 'Paragraph Block',
    plural: 'Paragraph Blocks',
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
      required: true,
      label: 'Description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image',
    },
    {
      name: 'className',
      type: 'text',
      label: 'Additional CSS Classes',
    },
  ],
}
