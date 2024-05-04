import React from 'react'
import Input from '../components/Input'
const TypeofEmployment = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Type of Employment</h4>
    <div>
        <label className='sidebar-label-container'>
          <input type='radio' name='test' id='test' value="" onChange={handleChange}/>
          <span className='checkmark'></span>Any Experience
        </label>
        <Input handleChange={handleChange} value="Full-time" title="Full-time" name='test'/>
        <Input handleChange={handleChange} value="Temporary" title="Temporary" name='test'/>
        <Input handleChange={handleChange} value="Part-time" title="Part-time" name='test'/>
    </div>
</div>
  )
}

export default TypeofEmployment