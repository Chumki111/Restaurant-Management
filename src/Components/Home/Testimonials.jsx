import { useQuery } from "@tanstack/react-query"
import { getTestimonials } from "../../api/testimonial"
import Heading from "../Header/Heading"


const Testimonials = () => {
    const {data:testimonials} = useQuery({
        queryKey:['testimonials'],
        queryFn:async() => getTestimonials()
    })
  return (
    <div className="">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
     <div className="">
       {/* heading section */}
      <Heading heading="What Our Customers Say" subHeading="Read the experiences of our satisfied guests and see why they love dining with us."/>
      {/* top six foods map */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
       
      </div>
      {/* button section */}
     
     </div>
    </div>
  </div>
  )
}

export default Testimonials