import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';
import {API_TOKEN} from '@env';

const client = sanityClient({
	projectId: '4fagkaap',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2021-10-21',
	token: API_TOKEN
});

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;