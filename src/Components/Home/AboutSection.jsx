import Heading from "../Shared/Header/Heading"


const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
     <Heading 
  heading="About Us" 
  subHeading="Discover who we are, what we stand for, and our commitment to excellence in everything we do." 
/>
<div className="flex flex-col md:flex-row items-center">
   
   <div className="md:w-[40%] mb-6 md:mb-0">
     <div className="relative h-80">
       <img
         src="https://i.postimg.cc/8CqBFznK/people-enjoying-mexican-barbecue-23-2151000332.jpg"
         alt="Company Values"
         className="absolute inset-0 w-full h-full object-cover rounded-md"
       />
     </div>
   </div>

  
   <div className="md:w-[60%] px-4">
     <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
     <p className="mt-2 text-lg text-gray-600">We are committed to delivering excellence through our core values:</p>
     <ul className="mt-4 list-disc list-inside text-lg text-gray-600">
       <li>Integrity: Upholding the highest ethical standards in everything we do.</li>
       <li>Customer Focus: Putting our customers at the center of our decisions.</li>
       <li>Innovation: Continuously seeking new ways to improve and lead.</li>
       <li>Excellence: Striving for excellence in every aspect of our work.</li>
     </ul>
   </div>
 </div>
    </div>
  )
}

export default AboutSection