import { client, urlFor } from "@/lib/sanity";
import { SingleBlog } from "@/lib/types";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

async function getData(slug: string) {
  const query = `*[_type == 'blog' && slug.current== '${slug}']{
  'currentSlug':slug.current,
    title,
    titleImage,
    content
}[0]`;

  const data = await client.fetch(query, { slug });
  return data;
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const post: SingleBlog = await getData(params.slug);
  console.log(post);

  return (
    <div className="md:w-[70%] lg:w-[60%] mx-auto p-10 flex flex-col items-center">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          jan marshal - blog
        </span>
        <span className="block mt-2 text-3xl text-center leading-8 font-bold tracking-tight">
          {post.title}
        </span>
      </h1>
      <Image
        src={urlFor(post.titleImage).url()}
        width={600}
        height={200}
        alt="title Image"
        priority
        className=" rounded-lg mt-8 border"
      />

      <div className="mt-15 prose text-primary prose-xl  dark:prose-invert 
      prose-li:marker:text-primary dark:text-yellow-400">
        
        <PortableText value={post.content} />
      </div>
    </div>
  );
}
