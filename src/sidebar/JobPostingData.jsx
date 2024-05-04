import React from 'react'
import Input from '../components/Input'
const JobPostingData = ({handleChange}) => {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
    const SevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const ThirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);
    //console.log(twentyFourHoursAgo)

    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0,10)
    const sevendaysAgoDate = SevenDaysAgo.toISOString().slice(0,10)
    const thirtydaysagoDate = ThirtyDaysAgo.toISOString().slice(0,10)
    //console.log(twentyFourHoursAgoDate)

  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Date of posting</h4>
    <div>
        <label className='sidebar-label-container'>
          <input type='radio' name='test' id='test' value="" onChange={handleChange}/>
          <span className='checkmark'></span>All Time
        </label>
        <Input handleChange={handleChange} value={twentyFourHoursAgoDate} title="Last 24 Hours" name='test3'/>
        <Input handleChange={handleChange} value={sevendaysAgoDate} title="Last 7 Days " name='test3'/>
        <Input handleChange={handleChange} value={thirtydaysagoDate} title='Last 30 Days' name='test3'/>
        
    </div>
</div>
  )
}

export default JobPostingData