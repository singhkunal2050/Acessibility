import React from 'react'

function Tester() {
  return (
    <div className='tester-page min-h-screen'>

      <div className="top-section py-5">
      <div className="container">
          <h1 className='text-4xl font-extrabold text-center'>Tester Page</h1>
      </div>
      </div>     

      <form action="" className='p-6 shadow-lg flex justify-center bg-indigo-100 mx-[10%] py-10'>
        <input type="text" className=' min-w-[60vw] shadow-sm border-2 border-gray-300 px-4 py-2' />
        <button type='submit' className='bg-indigo-800 border-2 border-indigo-700 px-4 py-2 text-white font-bold' >Check Website</button>
      </form>
        
        

    </div>
  )
}

export default Tester


