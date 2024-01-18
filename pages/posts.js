import React, { useState, useEffect } from 'react';
import Construction from "@/components/Construction";
import PostCard from "@/components/PostCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NextLink from "next/link";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/getPosts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className='max-w-3xl mx-auto min-h-screen'>
      <div className='px-4'>
        <header className="flex flex-col text-slate-200 pt-16 mb-16">
          <div>
            <NextLink href="/" className="text-md sm:text-lg group text-teal-300 cursor-pointer"><FontAwesomeIcon className="mr-2 group-hover:-translate-x-3 transition-all duration-300" icon={faArrowLeft} /> Anthony Ham</NextLink>
          </div>
          <h3 className="text-5xl font-semibold mt-2 lg:text-4xl">Latest Posts</h3>
        </header>

        <section id="posts">
          <div className='flex flex-col group/posts'>
            {posts.length > 0 ? (
              posts.toReversed().map((post) => (
                <div key={post.id} className='border-b last:border-none border-slate-200/40'>
                  <PostCard
                    key={post.slug}
                    title={post.data.title}
                    date={post.data.date}
                    description={post.data.description}
                    slug={post.slug}
                  />
                </div>
              ))
            ) : (
              <p>No posts available.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
