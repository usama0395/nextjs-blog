import { Image } from "sanity"

export interface BlogsData {
  title:string  
  smallDescription:string  
  currentSlug:string  
  titleImage:Image
}

export interface SingleBlog extends Omit<BlogsData, "smallDescription"> {
  content: any;
}