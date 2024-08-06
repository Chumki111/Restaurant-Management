import { Helmet } from "react-helmet-async"
import Banner from "../../Components/Home/Banner"
import TopSection from "../../Components/Home/TopSection"


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Restaurant Management</title>
      </Helmet>
      <Banner/>
      {/* top food section */}
      <TopSection/>
    </div>
  )
}

export default Home