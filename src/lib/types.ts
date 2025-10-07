
export interface BlogsData {
  title:string  
  smallDescription:string  
  currentSlug:string  
  titleImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export interface SingleBlog extends Omit<BlogsData, "smallDescription"> {
  content: any;
}