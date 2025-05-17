import type { Block } from 'payload'

export const HomeContactBlock: Block = {
  slug: 'homeContact',
  interfaceName: 'HomeContactBlock',
  labels: {
    singular: 'Home Contact',
    plural: 'Home Contacts',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Have questions or need a custom solution? Reach out to us!',
      label: 'Section Title',
    },
    {
      name: 'email',
      type: 'text',
      required: true,
      defaultValue: 'info@voicehealth.ai',
      label: 'Contact Email',
    },
    {
      name: 'mapEmbedUrl',
      type: 'text',
      required: true,
      defaultValue:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90599.50080836462!2d-107.12488582771243!3d44.79640974859989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fa943c6fad65%3A0x293a47fe7b11d57b!2sSheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2sbd!4v1746965927921!5m2!1sen!2sbd',
      label: 'Google Maps Embed URL',
      admin: {
        description: 'Paste the Google Maps embed URL here',
      },
    },
  ],
}
