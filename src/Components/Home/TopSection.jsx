import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { getTopFoods } from "../../api/foods"
import TopFoodCard from "../Card/TopFoodCard"
import Heading from "../Shared/Header/Heading"

const TopSection = () => {
  const { data: foods } = useQuery({
    queryKey: ['services'],
    queryFn: async () => getTopFoods()
  })
return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="">
         {/* heading section */}
         <Heading heading="Top Foods" subHeading="Explore our top-selling dishes crafted with passion and excellence."/>
        {/* top six foods map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {foods?.map(food => <TopFoodCard key={food._id} food={food}/>)}
        </div>
        {/* button section */}
        <div className='pt-10 flex justify-center'>
    <Link to="/all-foods">
    <button className="bg-secondary text-black py-3 px-8 rounded-2xl shadow-md hover:bg-tertiary hover:shadow-lg transition ease-in-out transform duration-300 hover:scale-105">
  See All Foods
</button>
    </Link>
  </div>
       </div>
      </div>
    </div>
  )
}

export default TopSection