import React from 'react'

const Home = () => {
   return (
      <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
         {/* Overlay */}
         <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
         <div className='p-5 text-white z-[2] mt-[-10rem]'>
            <h2 className='text-5xl font-bold'>Cleaning Service</h2>
            <p className='py-5 text-xl'>Having a simplified, uncluttered home is a form of self-care.</p>
            <button className='px-8 py-2 border' onClick={() => { navigate('/contact') }}>Contact us</button>
         </div>
      </div >
   )
}

export default Home