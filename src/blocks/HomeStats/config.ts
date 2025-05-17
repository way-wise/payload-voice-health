import type { Block } from 'payload'

export const HomeStatsBlock: Block = {
  slug: 'homeStats',
  interfaceName: 'HomeStatsBlock',
  labels: {
    singular: 'Home Stats',
    plural: 'Home Stats',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Section Image',
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Statistics',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Value (e.g. "85%", "24/7")',
        },
        {
          name: 'description',
          type: 'text',
          required: true,
          label: 'Description',
        },
      ],
    },
  ],
}
