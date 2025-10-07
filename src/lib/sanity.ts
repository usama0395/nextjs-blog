import  imageUrlBuilder  from '@sanity/image-url'
import {createClient ,type SanityClient  } from 'next-sanity'
import { Image  as SanityImageSource} from 'sanity'


export const client:SanityClient = createClient({
    apiVersion:'2025-10-05',
    dataset:'production',
    projectId:'d8tzs29a',
    useCdn:false
})

 const builder = imageUrlBuilder(client)


 export function urlFor (src:SanityImageSource){
   return builder.image(src)
 }