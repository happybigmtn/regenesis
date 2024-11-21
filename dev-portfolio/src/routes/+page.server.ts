import sanityClient from "$lib/utils/sanity";
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const config = {
  runtime: 'edge'
};

class SanityFetchError extends Error {
  code: string;
  
  constructor(message: string) {
    super(message);
    this.name = 'SanityFetchError';
    this.code = 'SANITY_FETCH_ERROR';
  }
}

export const load: PageServerLoad = async ({ fetch }) => {
  try {
    console.log('Starting data fetch from Sanity...');
    
    const [focusAreas, projects] = await Promise.all([
      sanityClient.fetch(
        '*[_type == "focusArea"] | order(category asc)'
      ).then(result => {
        console.log('Focus areas fetched:', result?.length);
        return result;
      }),
      sanityClient.fetch(`
        *[_type == "project"] {
          ...,
          "imageUrl": image.asset->url
        } | order(dateStarted desc)
      `).then(result => {
        console.log('Projects fetched:', result?.length);
        return result;
      }),
    ]);

    if (!focusAreas || !projects) {
      throw new SanityFetchError('Failed to fetch data from Sanity');
    }

    return {
      focusAreas,
      projects
    };
  } catch (err) {
    console.error('Error loading data:', err);
    if (err instanceof SanityFetchError) {
      throw error(500, err);
    }
    throw error(500, new SanityFetchError('Error loading data from Sanity'));
  }
};
