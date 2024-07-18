
import image from '../../assets/banner.jpg'

const Banner = () => {
  return (
<>


<div className='flex flex-col'>
<div className="bg-cover bg-center" style={{ backgroundImage: `url(${image})`, minHeight: '550px' }}>
  <div className='flex items-center justify-center h-full'>
    <div className='text-center text-white'>
      <h1 className='text-4xl md:text-6xl lg:text-7xl font-semibold'>Plowing the earth, harvesting hope</h1>
      <p className='max-w-md pt-4 text-xl'>Education is the key to student Unlock your potential through learning. Expand your horizons with the most.</p>
      {/* Button */}
      <div className='pt-6'>
        <button className="text-xl bg-secondary text-white py-3 px-10 rounded-full hover:bg-third transition duration-300 ease-in-out">View More</button>
      </div>
    </div>
  </div>
</div>
</div>

</>
  )
}

export default Banner