
import type { PortableTextBlock } from "sanity";

export interface BlogsData {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
}

export interface SingleBlog extends Omit<BlogsData, "smallDescription"> {
  content: PortableTextBlock[]; 
}