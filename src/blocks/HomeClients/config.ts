import type { Block } from 'payload'

export const HomeClientsBlock: Block = {
  slug: 'homeClients',
  interfaceName: 'HomeClientsBlock',
  labels: {
    singular: 'Home Clients',
    plural: 'Home Clients',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Trusted by innovative clinics',
      label: 'Section Title',
    },
    {
      name: 'clients',
      type: 'array',
      label: 'Client Logos',
      minRows: 6,
      admin: {
        description:
          'Add at least 6-8 logos for the best visual effect. The logos will automatically slide in an infinite loop.',
      },
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Client Logo',
          admin: {
            description: 'Recommended size: 152x27px. Upload a transparent PNG for best results.',
          },
        },
        {
          name: 'alt',
          type: 'text',
          required: true,
          label: 'Alt Text',
          admin: {
            description: 'Add a descriptive name for accessibility (e.g., "Company Name Logo")',
          },
        },
      ],
    },
  ],
}
