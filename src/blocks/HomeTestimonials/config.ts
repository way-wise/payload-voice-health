import type { Block } from 'payload'

export const HomeTestimonialsBlock: Block = {
  slug: 'homeTestimonials',
  interfaceName: 'HomeTestimonialsBlock',
  labels: {
    singular: 'Home Testimonials',
    plural: 'Home Testimonials',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Name',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Title',
        },
        {
          name: 'testimonial',
          type: 'textarea',
          required: true,
          label: 'Testimonial',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Profile Image',
        },
        {
          name: 'company',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Company Logo',
        },
      ],
    },
  ],
}
