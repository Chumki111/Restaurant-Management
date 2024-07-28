import { Link } from "react-router-dom"


const TopFoodCard = ({food}) => {
  return (
    <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105">
    <img src={food.image} alt={food.name} className="w-full h-56 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
    
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-75 transition-opacity duration-300"></div>

    <div className="relative p-4 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-b-lg">
      <h3 className="text-xl font-semibold text-gray-900">{food.name}</h3>
      <p className="text-gray-500">{food.category}</p>
      <p className="mt-2 text-lg font-bold text-green-600">${food.price}</p>
      <Link to={`/all-foods/${food._id}`}>
      <button 
       
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300"
      >
        View Details
      </button>
      </Link>
    </div>
    
    <div className="absolute top-4 right-4 px-2 py-1 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-full shadow text-sm font-bold text-green-600">{food.category}</div>
  </div>
  )
}

export default TopFoodCard