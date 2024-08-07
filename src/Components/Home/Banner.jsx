import { Link } from 'react-router-dom';
import image from '../../assets/banner.jpg';

const Banner = () => {
  return (
    <div className='relative flex flex-col items-center justify-center min-h-[600px] bg-cover bg-center' style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
      <div className='relative flex flex-col items-center justify-center text-center text-white p-8'>
        <h1 className='text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text'>Welcome to Restaurant Management</h1>
        <p className='text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s'>Discover a world of culinary excellence and hospitality.</p>
        <div>
          <Link to="/all-food">
            <button className="text-xl bg-secondary hover:bg-tertiary text-zinc-800 py-3 px-10 rounded-xl shadow-md hover:bg-third hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105">Explore Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
