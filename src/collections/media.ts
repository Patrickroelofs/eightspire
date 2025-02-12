import type { CollectionConfig } from 'payload'
import { generateBlurData } from '@/util/generateBlurData'

export const MediaCollection: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Media',
    description: 'Media files',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'blurData',
      type: 'text',
      admin: {
        hidden: true,
        disableListColumn: true,
        disableListFilter: true,
      },
    },
  ],
  upload: true,
  hooks: {
    beforeValidate: [generateBlurData],
  },
}
