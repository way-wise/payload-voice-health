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
      required: false,
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
      label: 'Description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Image',
    },
    {
      name: 'imagePosition',
      type: 'select',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      required: false,
      label: 'Image Position',
    },
    {
      name: 'backgroundColor',
      type: 'select',
      options: [
        { label: 'Gray', value: 'gray-background' },
        { label: 'White', value: 'white-background' },
      ],
      required: false,
      label: 'Background Color',
    },
  ],
}
