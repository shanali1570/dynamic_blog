import {posts} from '@/app/api/blog/data'
import Image from 'next/image';
import Link from 'next/link'

const PostSection = ({startnum=0 ,endnum=posts.length, img="hidden"}:{startnum?:number, endnum?:number, img?:string}) => {

    // Slice the products array to show only the first 5 products
  const displayedPosts = posts.slice(startnum, endnum); // Display only the first 5 products

  return (
    <div className="grid grid-cols-2 gap-8">
            {displayedPosts.map((post) => (
              <div key={post.slug} className="p-4 bg-white shadow rounded hover:shadow-lg transition-shadow duration-300">
                <Link href={`/blog/${post.slug}`}>

                <Image 
                  src={`/${post.imagelink}`}
                  alt='Next'
                  width={500}
                  height={500}
                  className={`h-auto w-full rounded-lg ${img}`}
                />
                <div>
                <i className="text-gray-700 "><strong>{post.date}</strong> </i>
                <h3 className="text-2xl font-semibold mb-2 hover:text-blue-600">{post.title}</h3>
                <p className="text-gray-700">{post.shortdetail}</p>
                
                  <p className="text-blue-600 hover:underline mt-4 block cursor-pointer">Read More</p>
                
                </div>
                </Link>
              </div>
            ))}
          </div>
        
    
  )
}

export default PostSection