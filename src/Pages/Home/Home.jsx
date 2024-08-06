import { Helmet } from "react-helmet-async"
import Banner from "../../Components/Home/Banner"
import TopSection from "../../Components/Home/TopSection"
import Testimonials from "../../Components/Home/Testimonials"
import AboutSection from "../../Components/Home/AboutSection"


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Restaurant Management</title>
      </Helmet>
      <Banner/>
      <AboutSection/>
      {/* top food section */}
      <TopSection/>
      <Testimonials/>
    </div>
  )
}

export default Home