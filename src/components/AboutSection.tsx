import Image from 'next/image';
import PostSection from './PostSection';


const AboutSection = () => {
  return (
    <div className=" p-8 flex flex-col md:flex-row md:space-x-8">
        

        {/* Posts Section - Right Side */}
        
        <div className=" flex flex-col  px-2 justify-center bg-slate-100 rounded-md">
          {/* Posts Section - Right Side */}
         
        
        <PostSection startnum={1} endnum={3} img=''/>

        </div>

      </div>
  )
}

export default AboutSection