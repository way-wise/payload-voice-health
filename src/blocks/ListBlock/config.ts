import type { Block } from 'payload'

const ListBlock: Block = {
  slug: 'listBlock',
  labels: {
    singular: 'List Block',
    plural: 'List Blocks',
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
      name: 'features',
      type: 'array',
      label: 'Features',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Feature Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Feature Description',
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      defaultValue: 'bg-white',
      options: [
        {
          label: 'White',
          value: 'bg-white',
        },
        {
          label: 'Light Gray',
          value: 'bg-gray-50',
        },
        {
          label: 'Purple',
          value: 'bg-purple-50',
        },
      ],
    },
    {
      name: 'textColor',
      type: 'select',
      label: 'Text Color',
      defaultValue: 'text-purple-900',
      options: [
        {
          label: 'Purple Dark',
          value: 'text-purple-900',
        },
        {
          label: 'Gray Dark',
          value: 'text-gray-900',
        },
        {
          label: 'Black',
          value: 'text-black',
        },
      ],
    },
    {
      name: 'accentColor',
      type: 'select',
      label: 'Accent Color',
      defaultValue: 'text-purple-600',
      options: [
        {
          label: 'Purple',
          value: 'text-purple-600',
        },
        {
          label: 'Blue',
          value: 'text-blue-600',
        },
        {
          label: 'Green',
          value: 'text-green-600',
        },
      ],
    },
  ],
}

export default ListBlock
