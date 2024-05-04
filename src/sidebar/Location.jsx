import React from 'react'
import Input from '../components/Input'



const Location = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Location</h4>
        <div>
            <label className='sidebar-label-container'>
              <input type='radio' name='test' id='test' value="" onChange={handleChange}/>
              <span className='checkmark'></span>All
            </label>
            <Input handleChange={handleChange} value='chennai' title='Chennai' name='test'/>
            <Input handleChange={handleChange} value='hyderabad' title='Hyderabad' name='test'/>
            <Input handleChange={handleChange} value='lucknow' title='Lucknow' name='test'/>
            <Input handleChange={handleChange} value='delhi' title='Delhi' name='test'/>
            <Input handleChange={handleChange} value='bangalore' title='Bangalore' name='test'/>
        </div>
    </div>
  )
}

export default Location