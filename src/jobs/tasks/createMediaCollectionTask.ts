import { getPayload, type TaskConfig } from 'payload'
import config from '@payload-config'

const CreateMediaCollectionTask = {
  slug: 'createMediaCollectionTask',
  inputSchema: [
    {
      name: 'filename',
      type: 'text',
      required: true,
    },
    {
      name: 'buffer',
      type: 'json',
      required: true,
    },
  ],
  outputSchema: [
    {
      name: 'media',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
  ],
  handler: async ({ input, req }) => {
    const { filename, buffer } = input
    console.error(filename, buffer)

    const convertedBuffer = Buffer.from(String(buffer), 'base64')

    // TODO: I wish to use the getPayload function from the util folder, but its causing webpack to error.
    const payload = await getPayload({
      config,
    })

    try {
      const media = await payload.create({
        req,
        collection: 'media',
        file: {
          name: `screenshot/${String(filename)}.png`,
          data: convertedBuffer,
          size: convertedBuffer.byteLength,
          mimetype: 'image/png',
        },
        data: {
          filename,
          alt: 'Hello World...',
        },
      })

      console.error(media)

      return {
        output: {
          media,
        },
      }
    } catch (e) {
      throw new Error('Failed to create media collection item')
    }
  },
} as TaskConfig<'createMediaCollectionTask'>

export { CreateMediaCollectionTask }
