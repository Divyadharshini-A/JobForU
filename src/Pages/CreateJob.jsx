import React, { useState } from 'react'
import { useForm} from "react-hook-form"
import CreatableSelect from "react-select/creatable"
//import './App.css';
const CreateJob = () => {
  const [selectedOption,setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,reset,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) =>{ 
        data.skills = selectedOption;
        //console.log(data);
        fetch("http://localhost:5000/post-job",{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(data)
        })
        .then(res => res.json()).then((result) => {
          console.log(result);
          if(result.acknowledged === true){
            alert("Job Posted Successfully!")
          }
          reset()
        });
      };
      
       const options = [
        {value:"Javascript","lable":"Javascript"},
        {value:"C","lable":"C"},
        {value:"Java","label":"Java"},
        {value:"C#","label":"C#"},
        {value:"Python","label":"Python"},
        {value:"Cloud","label":"Cloud"},
        {value:"React","label":"React"},
        {value:"HTML","label":"HTML"},
        {value:"CSS","label":"CSS"},
        {value:"Angular","label":"Angular"},
       ]
  return (
    <div className='max-w-screen-2x1 container mx-auto xl: px-24'>
     <div className="bg-[#e2d5d586] py-10 px-4 lg:px-16">
     <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
       <div className='lg:w-1/2 w-full'>
        <label className='block mb-2 text-lg'>Job Title</label>
        <input type="text" defaultValue={"Web Developer"}
{...register("jobTitle")} className="create-job-input"/>
       </div>
       <div className='lg:w-1/2 w-full'>
        <label className='block mb-2 text-lg'>Company name</label>
        <input type="text" placeholder='Ex: Microsoft'
{...register("companyName")} className="create-job-input"/>
       </div>
      

      </div>

      <div className='create-job-flex'>
       <div className='lg:w-1/2 w-full'>
        <label className='block mb-2 text-lg'>Minimum Salary</label>
        <input type="text" placeholder='$20k'
{...register("minPrice")} className="create-job-input"/>
       </div>
       <div className='lg:w-1/2 w-full'>
        <label className='block mb-2 text-lg'>Maximum Salary</label>
        <input type="text" placeholder="$120k"
{...register("maxPrice")} className="create-job-input"/>
       </div>
      

      </div>
       
      <div className='create-job-flex'>
       <div className='lg:w-1/2 w-full'>
        <label className='block mb-2 text-lg'>Salary Type</label>
        <select {...register("salaryType")} className='create-job-input'>
        <option value="">Choose your salary</option>
        <option value="Hourly">Hourly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
       </div>
       <div className='lg:w-1/2 w-full'>
        <label className='block mb-2 text-lg'>Job Location</label>
        <input type="text" placeholder="Ex : New Delhi"
{...register("jobLocation")} className="create-job-input"/>
       </div>
      

      </div>

      <div className='create-job-flex'>
      <div className='lg:w-1/2 w-full'>
        <label className='block mb-2 text-lg'>Job Posting Date</label>
        <input type="date" placeholder="Ex : 2024-03-24" {...register("postingDate")} className="create-job-input"/>
       </div>
       <div className='lg:w-1/2 w-full'>
        <label className='block mb-2 text-lg'>Experience Level</label>
        <select {...register("experienceLevel")} className='create-job-input'>
        <option value="">Choose your Experience</option>
        <option value="hourly">Hourly</option>
        <option value="internship">Internship</option>
        <option value="workremotely">Work remotely</option>
      </select>
       </div>
       
      

      </div>

      <div>
        <label className='block mb-2 text-lg'>Required skill Sets</label>
         <CreatableSelect className='create-job-input py-4' defaultValue={selectedOption}
         onChange={setSelectedOption} options={options} isMulti />
      </div>
      
      <div className='create-job-flex'>
       <div className='lg:w-1/2 w-full'>
        <label className='block mb-2 text-lg'>Company Logo</label>
        <input type="url" placeholder="Paste your company URL: Ex: https://www.google.com/" {...register("companyLogo")} className="create-job-input"/>
       </div>


       <div className='lg:w-1/2 w-full'>
        <label className='block mb-2 text-lg'>Employment Type</label>
        <select {...register("employmentType")} className='create-job-input'>
        <option value="">Choose your Experience</option>
        <option value="full-time">Full-time</option>
        <option value="Temperory">Temporary</option>
        <option value="part-time">Part-time</option>
        </select>

       </div>
       </div>
      
      <div className='w-full'>
         <label className='block mb-2 text-lg'>Job Description</label>
         <textarea className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-400'
         rows={6}
         placeholder='job Description....'
          {...register("description")}/>
      </div>
      <div className='w-full'>
        <label className='block mb-2 text-lg'>Job Posted By</label>
        <input type='email' placeholder='your email' {...register("postedBy")} className='create-job-input'/>
      </div>
     <input type='submit' className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer'/>
     </form>
</div>
   </div>
    
  )
}

export default CreateJob