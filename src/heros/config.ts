import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  admin: {
    condition: () => true,
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'With Hero',
          value: 'withHero',
        },
        {
          label: 'Without Hero',
          value: 'withoutHero',
        },
      ],
      defaultValue: 'withHero',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        condition: (_, { type } = {}) => type === 'withHero',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Description',
      admin: {
        condition: (_, { type } = {}) => type === 'withHero',
      },
    },
    {
      name: 'rating',
      type: 'number',
      label: 'Rating',
      admin: {
        condition: (_, { type } = {}) => type === 'withHero',
      },
    },
    // linkGroup({
    //   overrides: {
    //     maxRows: 2,
    //   },
    // }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) =>
          type === 'withHero' && ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
