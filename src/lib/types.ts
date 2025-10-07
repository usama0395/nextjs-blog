export interface BlogsData {
  title:string  
  smallDescription:string  
  currentSlug:string  
  titleImage:any
}

export interface SingleBlog extends Omit<BlogsData, "smallDescription"> {
  content: any;
}