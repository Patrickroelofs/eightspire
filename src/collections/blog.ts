import { type CollectionConfig, type CollectionSlug, type Field } from 'payload'
import { revalidatePath } from 'next/cache'
import { draftMode } from 'next/headers'
import { slugField } from '@/fields/slug'
import { Authors } from '@/collections/authors'
import { RichTextBlock } from '@/blocks/RichText/richTextBlock'
import { CodeBlock } from '@/blocks/Code/codeBlock'
import { isAdmin } from '@/util/permissionsHandler'

const Sidebar: Field[] = [
  {
    name: 'featured',
    type: 'checkbox',
    defaultValue: false,
    admin: {
      position: 'sidebar',
      description: 'This will be featured on the homepage',
    },
  },
  slugField({
    trackingField: 'name',
  }),
  {
    name: 'authors',
    type: 'relationship',
    relationTo: Authors.slug as CollectionSlug,
    required: true,
    hasMany: true,
  },
  {
    name: 'date',
    label: 'Date',
    type: 'date',
    required: true,
  },
]

const Blog: CollectionConfig = {
  slug: 'blog',
  access: {
    create: isAdmin,
    delete: isAdmin,
    update: isAdmin,
    read: () => true,
  },
  admin: {
    group: 'Content',
    description: 'Blog posts',
    useAsTitle: 'name',
    livePreview: {
      url: async ({ data }) => {
        const draft = await draftMode()
        draft.enable()

        return `${process.env.NEXT_PUBLIC_SERVER_URL ?? ''}/blog/${data.slug}`
      },
    },
  },
  fields: [
    ...Sidebar,
    {
      name: 'name',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'excerpt',
      label: 'Excerpt',
      type: 'textarea',
      required: true,
    },
    {
      name: 'coverImage',
      label: 'Cover Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'blocks',
      label: 'Blocks',
      type: 'blocks',
      blocks: [RichTextBlock, CodeBlock],
    },
  ],
  versions: {
    drafts: {
      autosave: true,
    },
  },
  hooks: {
    afterChange: [
      ({
        doc,
      }: {
        doc: {
          slug: string
        }
      }) => {
        if (doc.slug) {
          console.warn(`Page revalidating at: /blog/${doc.slug}`)
          revalidatePath(`/blog/${doc.slug}`)
        }
      },
    ],
  },
}

export { Blog }
