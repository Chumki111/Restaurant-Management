import image from '../../assets/grilled-lamb.png';
import SecondaryButton from '../Button/SecondaryButton';

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className='flex flex-col lg:flex-row min-h-[600px] justify-center items-center space-x-4'>
        
        {/* Text Section */}
        <div>
          <h1 className='text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text'>
            Elevate Your Dining Experience
          </h1>
          <p className='text-lg mb-8 max-w-md'>
            Indulge in the finest culinary delights and impeccable service that will make your dining unforgettable.
          </p>
          <div>
            <SecondaryButton text={'Explore Now'} to="/all-foods" />
          </div>
        </div>
        
        {/* Image Section */}
        <div className='w-[90%] h-full lg:w-[80%]'>
          <img 
            src={image} 
            alt="Banner" 
            className='w-full h-full object-cover transform animate-slide-in'
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
