import Heading from "../Header/Heading"
import AccordionItem from "./AccordionItem";


const Accordion = () => {
  const accordionItems = [
    {
      title: "What is Restaurant Management?",
      content: "Restaurant management involves overseeing all aspects of a restaurant's operations, including staff management, customer service, inventory control, and financial management.",
    },
    {
      title: "How does the system help with reservations?",
      content: "Our system provides an easy-to-use interface for managing reservations, allowing you to track and confirm bookings, manage table assignments, and handle cancellations efficiently.",
    },
    {
      title: "Can the system handle multiple locations?",
      content: "Yes, our system is designed to manage multiple locations, providing centralized control and reporting for all your restaurants.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
   
    {/* heading section */}
   <Heading heading="Frequently Asked Questions"
        subHeading="Find answers to the most common questions about our restaurant management system"/>
        <div className="">
        {accordionItems?.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          // isActive={activeIndex === index}
          // onClick={() => handleClick(index)}
        />
      ))}
        </div>
   </div>
  )
}

export default Accordion