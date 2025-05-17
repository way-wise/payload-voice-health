import type { Block } from 'payload'

export const HomeBenefitsBlock: Block = {
  slug: 'homeBenefits',
  interfaceName: 'HomeBenefitsBlock',
  labels: {
    singular: 'Home Benefits',
    plural: 'Home Benefits',
  },
  fields: [
    {
      name: 'benefits',
      type: 'array',
      label: 'Benefits',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Benefit Title',
        },
        {
          name: 'points',
          type: 'array',
          label: 'Benefit Points',
          minRows: 1,
          fields: [
            {
              name: 'point',
              type: 'text',
              required: true,
              label: 'Point',
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Benefit Image',
          admin: {
            description: 'Recommended size: 400x300px',
          },
        },
      ],
    },
  ],
}
