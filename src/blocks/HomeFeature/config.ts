import type { Block } from 'payload'

export const HomeFeatureBlock: Block = {
  slug: 'homeFeature',
  interfaceName: 'HomeFeatureBlock',
  labels: {
    singular: 'Home Feature',
    plural: 'Home Features',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Enhance engagement with voice AI',
      label: 'Section Title',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: true,
      defaultValue:
        "Healfy's voice assistants offer patients quick, automated self-service options whenever they contact your healthcare practice.",
      label: 'Section Subtitle',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      minRows: 1,
      fields: [
        {
          name: 'label',
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
        {
          name: 'video',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Feature Video',
          admin: {
            description: 'Upload MP4 video file',
          },
        },
        {
          name: 'thumbnail',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Video Thumbnail',
          admin: {
            description: 'Recommended size: 799x448px',
          },
        },
      ],
    },
  ],
}
