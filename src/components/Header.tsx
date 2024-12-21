import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-black p-3 shadow  fixed w-screen opacity-80"> 
    
    <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
    <div className=" relative w-0 h-0 border-l-[20px] border-r-[20px] border-t-[26px] 
    border-l-transparent border-r-transparent border-t-red-600 rounded-full hover:opacity-50 cursor-pointer"/>
    
      <h1 className="pl-2 text-xl font-bold text-white hover:opacity-50 cursor-pointer">My Dynamic Blog</h1>
    
    </div>
      <nav>
        <Link href="/" className="font-semibold text-white px-4 hover:opacity-50 hover:underline">
          Home
        </Link>
        <Link href="/blog" className="text-white px-4 font-semibold hover:opacity-50 hover:underline">
          Blogs
        </Link>
        <Link href="/about" className="text-white px-4 font-semibold hover:opacity-50 hover:underline">
          About
        </Link>
        
      </nav>
    </div>
  </header>
  )
}

export default Header