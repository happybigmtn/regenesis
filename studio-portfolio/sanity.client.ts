import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  useCdn: false, // We'll use the live API for studio
  apiVersion: '2023-05-03',
})
