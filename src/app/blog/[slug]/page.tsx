'use client'
import { use } from 'react';
import { useRouter } from 'next/navigation';
import CommentsSection from '../../../components/CommentsSection';
import {posts} from '@/app/api/blog/data'
import Image from 'next/image';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = use(params);

  // Find the product that matches the 'id'
  const post = posts.find((p) => p.slug === slug);

  if (!slug) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-8'>
                    <div className=' flex flex-col md:flex-row gap-8'>
                    <Image 
                        src={`/${post?.imagelink}`}
                        alt='Next'
                        width={500}
                        height={500}
                        className={`h-auto w-full rounded-lg`}
                      />
                      <div className=''>
                        <i><strong>{post?.date}</strong></i>
                      <h2 className="text-3xl font-bold mb-4">{post?.title}</h2>
                     <p className="text-gray-700">{post?.shortdetail}.</p>
            
                      </div>
                    </div>
                     
      
      {/* Comments Section */}
      <CommentsSection />
    </div>
  );
}

