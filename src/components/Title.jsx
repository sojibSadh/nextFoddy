import React from 'react'

function Title({children}) {
  return (
    <div className='bg-linear-60 from-sky-50 to-sky-200 py-4'>
        <h2 className='py-3 text-center text-5xl font-bold'> {children} </h2>
    </div>
  )
}


export default Title
