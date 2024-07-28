import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { getTopFoods } from "../../api/foods"
import TopFoodCard from "../Card/TopFoodCard"

const TopSection = () => {
  const { data: foods } = useQuery({
    queryKey: ['services'],
    queryFn: async () => getTopFoods()
  })
return (
    <div className="flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="">
         {/* heading section */}
         <div className="mt-12 text-center">
          <h2 className="text-5xl font-semibold">Top Foods</h2>
          <p className="mt-4 text-lg">Explore our top-selling dishes crafted with passion and excellence.</p>
        </div>
        {/* top six foods map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {foods?.map(food => <TopFoodCard key={food._id} food={food}/>)}
        </div>
        {/* button section */}
        <div className='pt-10 flex justify-center'>
    <Link to="/all-food">
    <button className=" bg-secondary text-black py-3 px-8 rounded-xl hover:bg-third transition duration-300 ease-in-out">See All Foods</button>
    </Link>
  </div>
       </div>
      </div>
    </div>
  )
}

export default TopSection