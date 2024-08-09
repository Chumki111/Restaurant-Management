import { Link } from "react-router-dom"
import PrimaryButton from "../Button/PrimaryButton"


const BlogCard = ({blog}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 space-y-3">
    <img className="w-full h-60 object-cover rounded transition ease-in-out transform duration-300 hover:scale-105" src={blog.image} alt={blog.title} />
    <div className="">
      <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
      <p className="text-gray-600 pt-3">
        {blog?.content?.length > 100 ? blog?.content?.substring(0,100) + "....." : blog?.content}
        </p>
    </div>
    <div className="">
 
   <PrimaryButton text={'Read More'}/>
   
    </div>
  </div>
  )
}

export default BlogCard