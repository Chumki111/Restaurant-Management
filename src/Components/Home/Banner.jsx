
import { Link } from 'react-router-dom'
import image from '../../assets/banner.jpg'

const Banner = () => {
  return (
<>
<div className='flex flex-col'>
<div className="bg-cover bg-center relative" style={{ backgroundImage: `url(${image})`, minHeight: '550px' }}>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className='relative flex items-center justify-center h-full text-center text-neutral-content'>
  <div className='text-white mt-36'>
  <h1 className='text-5xl font-semibold'>Welcome to Restaurant Management</h1>
  <p className='pt-4'>Discover a world of culinary excellence and hospitality.</p>
  {/* Button */}
  <div className='pt-10'>
    <Link to="/all-food">
    <button className="text-xl bg-secondary text-white py-3 px-10 rounded-full hover:bg-third transition duration-300 ease-in-out">Explore Now</button>
    </Link>
  </div>
</div>
  </div>
</div>
</div>

</>
  )
}

export default Banner