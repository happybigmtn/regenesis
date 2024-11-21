import sanityClient from "$lib/utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const [focusAreas, projects] = await Promise.all([
    sanityClient.fetch(
      '*[_type == "focusArea"] | order(category asc)'
    ),
    sanityClient.fetch(`
      *[_type == "project"] {
        ...,
        "imageUrl": image.asset->url
      } | order(dateStarted desc)
    `),
  ]);

  return {
    focusAreas,
    projects,
  };
};
