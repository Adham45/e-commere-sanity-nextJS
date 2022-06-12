import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:'xrnt2n6y',
    useCdn: true,
    apiVersion:'2022-06-11',
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
    dataset:'production',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);