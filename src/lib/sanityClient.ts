import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  token: process.env.SANITY_API_TOKEN,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: 'production',     
  apiVersion: '2023-01-01',      
  useCdn: false,                  
});

export default client;

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}