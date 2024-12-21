
import Image from 'next/image';
import PostSection from '@/components/PostSection';

export default function Home() {
  // Array of blog posts with slug and title
  

  return (
      <div className=" p-8 flex flex-col md:flex-row md:space-x-8">
        {/* Image Section - Left Side */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/blog.webp" // Make sure this image exists in the public folder
            alt="Blog Preview"
            width={800} // Adjusted width
            height={400} // Adjusted height
            className="rounded shadow w-full h-full"
          />
        </div>

        {/* Posts Section - Right Side */}
        
        <div className="md:w-1/2 flex flex-col p-12 justify-center bg-slate-100 rounded-md">
          {/* Posts Section - Right Side */}
         
        <h2 className="text-4xl font-bold mb-8">The latest Next.js news</h2>
        
        
        <PostSection num={1}/>

        </div>
      </div>

  );
}
