import { Helmet } from "react-helmet-async"
import PrimaryHero from "../../Components/Hero/PrimaryHero"
import { useLoaderData } from "react-router-dom"


const SingleFood = () => {
    const food = useLoaderData();
  return (
    <>
     {/* helmet */}
     <Helmet>
                <title>Restaurant Management / {food.name}</title>
            </Helmet>
            {/* page title */}
            <PrimaryHero text="Food Details" linkHref="/all-foods" linkText="All Foods"/>
    </>
  )
}

export default SingleFood