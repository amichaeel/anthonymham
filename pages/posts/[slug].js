import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MdxLayout from '@/components/MdxLayout';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';


const Post = ({ mdxSource, frontMatter }) => {
  return (
    <MdxLayout>
      <div className='flex flex-row items-center justify-between'>
        <div className='text-4xl font-semibold'>{frontMatter.title}</div>
        <p className=''>{frontMatter.date}</p>
      </div>
      <MDXRemote {...mdxSource} />
    </MdxLayout>
  );
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'));
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
