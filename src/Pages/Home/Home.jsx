import { Helmet } from "react-helmet-async"
import Banner from "../../Components/Home/Banner"
import TopSection from "../../Components/Home/TopSection"
import Testimonials from "../../Components/Home/Testimonials"
import AboutSection from "../../Components/Home/AboutSection"
import Accordion from "../../Components/Shared/Accordion/Accordion"
import BlogsSection from "../../Components/Home/BlogsSection"


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
      <Accordion/>
      <BlogsSection/>
    </div>
  )
}

export default Home