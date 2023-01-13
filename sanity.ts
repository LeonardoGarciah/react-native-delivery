import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: "4fagkaap",
    dataset: "production",
    useCdn: true,
})

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;