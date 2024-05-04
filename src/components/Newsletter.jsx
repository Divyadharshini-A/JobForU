import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"
const Newsletter = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaEnvelopeOpenText/>
                Email me for jobs</h3>
                <p className="text-primary/75 text-base mb-4 text-justify" style={{ wordSpacing: "-1px" }}> Stay updated with the latest job opportunities! Drop your email here to receive notifications about new job openings tailored to your interests. Don't miss out on your dream job - sign up now to stay informed!</p>

                <div className='w-full space-y-4'>
                  <input type='email' name='email' id='email' placeholder='name@mail.com' className='w-full block py-2 pl-3 border focus:outline-none'/>
                  <input type='submit' value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
                </div>
        </div>

        <div className='mt-3'>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaRocket/>
                Get Noticed Faster</h3>
                <p className="text-primary/75 text-base mb-4 text-justify" style={{ wordSpacing: "-1px" }}> "Get notified faster! Drop your email to receive instant alerts on new job postings that match your preferences. Don't miss out on the perfect opportunity - stay ahead of the competition!"</p>

                <div className='w-full space-y-4'>
                <input type="file" id="fileUpload" name="fileUpload" multiple className='bg-white'/>

                  <input type='submit' value={"Upload your Resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
                </div>
        </div>
    </div>
  )
}

export default Newsletter