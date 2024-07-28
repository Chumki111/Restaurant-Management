import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from "react-helmet-async";
import PrimaryHero from "../../Components/Hero/PrimaryHero";
import { getAllFoods } from '../../api/foods';

const AllFood = () => {
  const [search, setSearch] = useState('');

  const { data: foods, isLoading, error, refetch } = useQuery({
    queryKey: ['allFoods', search],
    queryFn: async () => getAllFoods(search),
    enabled: false, // Disable automatic query on mount
  });

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      refetch();
    }, 300); // 300ms debounce time

    return () => clearTimeout(delayDebounceFn);
  }, [search, refetch]);

  return (
    <>
      <Helmet>
        <title>Restaurant Management / All Foods</title>
      </Helmet>
      <PrimaryHero text="All Foods" />
      <div className="container mx-auto p-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for food..."
          className="mb-4 p-2 border rounded w-full"
        />
        {isLoading && <div>Loading...</div>}
        {error && <div>Error loading foods</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {foods?.map((food) => (
            <div key={food._id} className="border p-4 rounded shadow">
              <img src={food.image} alt={food.foodName} className="w-full h-48 object-cover rounded" />
              <h2 className="text-xl font-bold mt-2">{food.foodName}</h2>
              <p>Category: {food.category}</p>
              <p>Price: ${food.price}</p>
              <p>Quantity: {food.quantity}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllFood;
