import React from 'react'
import { AiFillFire , AiFillBulb  , AiFillCloud , AiFillTrophy } from 'react-icons/ai'

function USP() {
  return (
    <section className='bg-indigo-700 py-10 md:py-20'>
      <div className="container mx-auto bg-indigo-700 text-white px-4 md:px-10">

        <h2 className='text-3xl text-center font-extrabold '>Get Your Website Check in No Time!!</h2>
        <p className='text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In iusto aliquam numquam dicta vitae quisquam, maxime delectus aliquid inventore eius vero hic dignissimos quos aut libero repudiandae facere odit itaque.</p>

        <div className="flex justify-center items-center py-8 space-x-12">
          <AiFillFire size={'60'}/>
          <AiFillBulb size={'60'} />
          <AiFillCloud size={'60'} />
          <AiFillTrophy size={'60'} />
      
          
        </div>


      </div>
      
      
    </section>
  )
}

export default USP
