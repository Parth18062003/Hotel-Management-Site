import { createClient } from "next-sanity";

const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_STUDIO_TOKEN as string,
    apiVersion: "2022-02-01",
});

export default sanityClient;