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
              label: 'Top Left',
              value: 'top-left',
            },
            {
              label: 'Top Right',
              value: 'top-right',
            },
            {
              label: 'Bottom Left',
              value: 'bottom-left',
            },
            {
              label: 'Bottom Right',
              value: 'bottom-right',
            },
          ],
          defaultValue: 'top-left',
        },
      ],
    },
  ],
}
