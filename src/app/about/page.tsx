import Image from "next/image"


const Page = () => {
  return (
    
      <div className="p-8 flex flex-col md:flex-row md:space-x-8 rounded-md">
        {/* Image Section - Left Side */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/desk.webp" // Make sure this image exists in the public folder
            alt="Blog Preview"
            width={800} // Adjusted width
            height={400} // Adjusted height
            className="rounded shadow w-full h-full"
          />
        </div>

        {/* Posts Section - Right Side */}
        
        <div className="md:w-1/2 flex flex-col whitespace-pre-wrap bg-slate-100 rounded-md p-12">
          {/* Posts Section - Right Side */}
         
        <h2 className="text-4xl font-bold mb-8">About Us</h2>

        <h2 className=" text-xl font-bold text-justify mb-8">
          {`Hey, I'm a Senior Student at GIAIC.
      I'm learning and enjoy working with Next.js-15, 
      TypeScript or Tailwind 
      and crafting beautiful front-end experiences.`}
      
      </h2>

      <h2 className=" text-2xl font-bold text-justify mb-8">
        Our Mission
        </h2>
      <p className=' text-xl mb-8 text-justify '>This Dynamic Blog is built with Dive deeper into React and Next.js 
        components, focusing on state management, props, and routing.</p>   


        <li className="">Advanced conponent concepts {`(state, props, lifecycle)`}</li>
        <li>Conditional rendering</li>
        <li>Working with lists and keys</li>
        <li>Dynamic routing in Next.js</li>
        <li>Static vs. dynamic pages</li>
        <li>API routes in Next.js</li>
        </div>
      </div>


  )
}

export default Page