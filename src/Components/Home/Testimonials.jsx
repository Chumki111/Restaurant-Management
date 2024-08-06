import { useQuery } from "@tanstack/react-query"
import { getTestimonials } from "../../api/testimonial"


const Testimonials = () => {
    const {data:testimonials} = useQuery({
        queryKey:['testimonials'],
        queryFn:async() => getTestimonials()
    })
  return (
    <div>Testimonials</div>
  )
}

export default Testimonials