import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from "react-helmet-async";
import PrimaryHero from "../../Components/Hero/PrimaryHero";
import { getAllFoods } from '../../api/foods';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Loading/Error';
import TopFoodCard from '../../Components/Card/TopFoodCard';

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
    }, 100); // 300ms debounce time

    return () => clearTimeout(delayDebounceFn);
  }, [search, refetch]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <>
      <Helmet>
        <title>Restaurant Management / All Foods</title>
      </Helmet>
      <PrimaryHero text="All Foods" />
      <div className="container mx-auto p-4">
        <form onSubmit={handleSearchSubmit} className="flex justify-center items-start">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for food... by food name"
            className="mb-4 p-3 border-2 rounded-lg w-full md:w-3/4 lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent mt-7 transition-all duration-300 ease-in-out transform focus:scale-105 shadow-lg"
          />
        </form>

        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
              {foods?.map((food) => (
                <TopFoodCard key={food._id} food={food} />
              ))}
            </div>
            {foods?.length === 0 && (
              <p className="text-center text-gray-500 mt-4">No foods found</p>
            )}
          </>
        )}
        {error && <Error message={error.message} />}
      </div>
    </>
  );
};

export default AllFood;
