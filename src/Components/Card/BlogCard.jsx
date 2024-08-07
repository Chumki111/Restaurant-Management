

const BlogCard = ({blog}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img className="w-full h-48 object-cover" src={blog.image} alt={blog.title} />
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
      <p className="text-gray-600">{blog.description}</p>
    </div>
    <div className="p-4 ">
    <button
            className="mt-4 bg-tertiary text-black py-2 px-4 rounded-full shadow-md hover:bg-secondary hover:shadow-lg transition ease-in-out transform duration-300 hover:scale-105"
          >
            Read More
          </button>
    </div>
  </div>
  )
}

export default BlogCard