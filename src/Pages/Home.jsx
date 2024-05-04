import React, { useEffect } from 'react'
import { useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';
import Newsletter from '../components/Newsletter';


const Home = () => {
  const [selectedCategory,setSelectedCategory] = useState(null);
  const [jobs,setJobs]=useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [currentPage,setcurrentpage] = useState(1);
  const itemsperpage = 6;


  useEffect(() => {
    setIsLoading(true);
      fetch("http://localhost:5000/all-jobs").then(res => res.json()).then(data =>{
        //console.log(data)
         setJobs(data);
         setIsLoading(false)
      })
  },[])
  //console.log(jobs)
  const [query,setQuery] = useState("");
    const handleInputChange = (event) => {
        setQuery(event.target.value)
      
    }
    const filteredItems = jobs.filter((job)=> job.jobTitle.toLowerCase().indexOf(query.toLowerCase())!== -1);
    
    const handleChange = (event) =>{
      setSelectedCategory(event.target.value)
    }

    const handleClick = (event) =>{
      setSelectedCategory(event.target.value)
    }
    
    const calculatePageRange = () =>{
      const startindex = (currentPage-1) * itemsperpage;
      const endindex = startindex + itemsperpage;
      return {startindex,endindex};
    }

    const nextPage = () =>{
      if(currentPage < Math.ceil(filteredItems.length/itemsperpage)){
        setcurrentpage(currentPage+1);
      }
    }
    
     const prevpage = () =>{
      if(currentPage>1){
        setcurrentpage(currentPage-1);
      }

     }

    const filteredData = (jobs,selected,query) =>{
      let filteredJobs = jobs;
      if(query){
        filteredJobs = filteredItems
      }

      if(selected){
        filteredJobs = filteredJobs.filter(({jobLocation,maxPrice,experienceLevel,salaryType,employmentType,postingDate})=>(
          jobLocation.toLowerCase() === selected||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          experienceLevel.toLowerCase() === selected||
          salaryType.toLowerCase() === selected||
          employmentType.toLowerCase() === selected.toLowerCase()
        ));
        //console.log(filteredJobs)
      }
      const {startindex,endindex} = calculatePageRange();

      filteredJobs = filteredJobs.slice(startindex,endindex)

      return filteredJobs.map((data,i) => <Card key={i} data={data}/>)
    }

    const result = filteredData(jobs,selectedCategory,query);
   
  return (
    <div>
      <Banner query={query} handleInputChange = {handleInputChange}/>
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick}/>
        </div>
        <div className='col-span-2 bg-white p-4 rounded-sm'>
          {
            isLoading ? (<p className='font-medium'>Loading...</p>) : result.length > 0 ? (<Jobs result = {result}/>) :<>
            <h3 className='text-lg font-bold mb-2'>Jobs available : {result.length} </h3>
            <p><i>No data Found!..</i></p>
            </>
          }
          {
             result.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>
                  <button onClick={prevpage} disabled = {currentPage == 1}>Previous</button>
                  <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length/itemsperpage)} </span>
                  <button onClick={nextPage} disabled = {currentPage === Math.ceil(filteredItems.length/itemsperpage)} className='hover:no-underline'>Next</button>
              </div>
             ) : ""
          }
          </div>
        <div className='bg-white p-4 rounded'><Newsletter/></div>
        
      </div>
    </div>
  )
}

export default Home;