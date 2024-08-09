import { FaCarrot, FaAppleAlt, FaPepperHot, FaLemon } from 'react-icons/fa';
import image from '../../assets/top.png';
import SecondaryButton from '../Button/SecondaryButton';

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className='flex flex-col lg:flex-row justify-center items-center space-x-4 relative mt-12'>
        
        {/* Text Section */}
        <div className='relative lg:w-1/2' data-aos="fade-up">
          <h1 className='text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text'>
            Elevate Your Dining Experience
          </h1>
          <p className='text-lg mb-8 max-w-md'>
            Indulge in the finest culinary delights and impeccable service that will make your dining unforgettable.
          </p>
          <div>
            <SecondaryButton text={'Explore Now'} to="/all-foods" />
          </div>

          {/* Vegetable Icon Below Button */}
          <div className='mt-6 flex justify-center'>
            <FaCarrot className='text-secondary text-4xl transform hover:scale-110 transition-transform duration-500 ease-in-out' />
          </div>

          {/* Vegetable Icons */}
          <div className='absolute   flex space-x-4'>
            <FaAppleAlt className='text-secondary text-3xl transform hover:scale-110 transition-transform duration-500 ease-in-out' />
          </div>
          <div className='absolute top-4 right-4 flex space-x-4'>
            <FaPepperHot className='text-secondary text-3xl transform hover:scale-110 transition-transform duration-500 ease-in-out' />
          </div>
        </div>
        
        {/* Image Section */}
        <div className='w-full lg:w-1/2 h-full relative'>
          <img 
            src={image} 
            alt="Banner" 
            className='w-full h-full object-cover transform animate-slide-in'
          />
           
          {/* Icons in Image Section */}
          <div className='absolute bottom-4 right-4 flex space-x-4' data-aos="fade-up">
            <FaLemon className='text-secondary text-3xl transform hover:scale-110 transition-transform duration-500 ease-in-out' />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Banner;
