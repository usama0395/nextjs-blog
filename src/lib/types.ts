
export interface BlogsData {
  title:string  
  smallDescription:string  
  currentSlug:string  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  titleImage:any
}

export interface SingleBlog extends Omit<BlogsData, "smallDescription"> {
  content: any;
}