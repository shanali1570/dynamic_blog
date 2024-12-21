'use client'
import { use } from 'react';
import { useRouter } from 'next/navigation';
import CommentsSection from '../../../components/CommentsSection';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = use(params);
  const router = useRouter();

  if (!slug) {
    return <div>Loading...</div>;
  }

  return (
    <div className='pt-8'>
      <h2 className="text-3xl font-bold mb-4">Post: {slug}</h2>
      <p className="text-gray-700">This is a sample content for the post: {slug}.</p>
      
      {/* Comments Section */}
      <CommentsSection />
    </div>
  );
}

