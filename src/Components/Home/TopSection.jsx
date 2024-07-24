import { Link } from "react-router-dom"

const TopSection = () => {
  return (
    <div className="flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading section */}
        <div className="mt-12 text-center">
          <h2 className="text-5xl font-semibold">Top Foods</h2>
          <p className="mt-4 text-lg">Explore our top-selling dishes crafted with passion and excellence.</p>
        </div>
        {/* button section */}
        <div className='pt-10 flex justify-center'>
    <Link to="/all-food">
    <button className=" bg-secondary text-black py-3 px-8 rounded-xl hover:bg-third transition duration-300 ease-in-out">Explore Now</button>
    </Link>
  </div>
      </div>
    </div>
  )
}

export default TopSection