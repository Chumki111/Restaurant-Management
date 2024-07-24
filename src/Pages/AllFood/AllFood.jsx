import { Helmet } from "react-helmet-async"
import PrimaryHero from "../../Components/Hero/PrimaryHero"


const AllFood = () => {
  return (
    <>
    <Helmet>
      <title>Restaurant Management / All Foods</title>
    </Helmet>
    <PrimaryHero text="All Foods"/>
    </>
  )
}

export default AllFood