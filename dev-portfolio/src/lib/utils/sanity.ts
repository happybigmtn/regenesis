import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "wjnnpcpn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-11-21",
  token: process.env.SANITY_TOKEN,
};

const sanityClient = createClient(config);

export default sanityClient;
