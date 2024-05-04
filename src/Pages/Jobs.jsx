import React from 'react'

const Jobs = ({result}) => {
  return (
   <>
    <div>
      <h3 className='text-lg font-bold mb-2'>Jobs available : {result.length}</h3>
    </div>
    <section >{result}</section>
     </>
  )
}

export default Jobs