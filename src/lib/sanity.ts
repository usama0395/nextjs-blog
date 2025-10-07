import  imageUrlBuilder  from '@sanity/image-url'
import {createClient } from 'next-sanity'


export const client = createClient({
    apiVersion:'2025-10-05',
    dataset:'production',
    projectId:'d8tzs29a',
    useCdn:false
})

 const builder = imageUrlBuilder(client)


 export function urlFor (src:any){
   return builder.image(src)
 }