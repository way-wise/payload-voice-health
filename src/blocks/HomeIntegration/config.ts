import type { Block } from 'payload'

export const HomeIntegrationBlock: Block = {
  slug: 'homeIntegration',
  interfaceName: 'HomeIntegrationBlock',
  labels: {
    singular: 'Home Integration',
    plural: 'Home Integrations',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Always connected to your EHR, every step of the way.',
      label: 'Section Title',
    },
    {
      name: 'centerImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Center Image',
      admin: {
        description: 'Recommended size: 158x158px',
      },
    },
    {
      name: 'integrations',
      type: 'array',
      label: 'Integration Logos',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Integration Logo',
          admin: {
            description: 'Recommended size: 120x80px',
          },
        },
        {
          name: 'position',
          type: 'select',
          required: true,
          label: 'Logo Position',
          options: [
            {
              label: 'Left 1',
              value: 'left-1',
            },
            {
              label: 'Left 2',
              value: 'left-2',
            },
            {
              label: 'Left 3',
              value: 'left-3',
            },
            {
              label: 'Right 1',
              value: 'right-1',
            },
            {
              label: 'Right 2',
              value: 'right-2',
            },
            {
              label: 'Right 3',
              value: 'right-3',
            },
          ],
          defaultValue: 'left-1',
        },
      ],
    },
  ],
}
