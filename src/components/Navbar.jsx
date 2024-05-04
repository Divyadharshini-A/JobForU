import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import {FaBarsStaggered, FaXmark} from "react-icons/fa6"

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const handleMenuToggler = () =>{
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        {path:"/",title:"Start a Search"},
        {path:"/my-jobs",title:"My jobs"},
        {path:"/salary",title:"Salary Estimate"},
        {path:"/post-job",title:"Post a job"},
    

    ]
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between items-center py-6'>
        <a href='/' className='flex items-center gap-2 text-2xl text-black'>
  <svg xmlns='http://www.w3.org/2000/svg' width="29" height="30" viewBox='0 0 28 30' fill='none' style={{ filter: 'drop-shadow(3px 3px 3px rgba(0,0,0,0.3))' }}>
    <defs>
      <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FF0000', stopOpacity: 1 }} />
        <stop offset="20%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
        <stop offset="40%" style={{ stopColor: '#FFFF00', stopOpacity: 1 }} />
        <stop offset="60%" style={{ stopColor: '#008000', stopOpacity: 1 }} />
        <stop offset="80%" style={{ stopColor: '#0000FF', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#800080', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <polygon points="14.5,0 17.09,9.4 27,9.4 18.45,15.2 21.09,24.6 14.5,19.8 7.91,24.6 10.55,15.2 2,9.4 11.91,9.4" fill="url(#rainbowGradient)" />
  </svg><span style={{ fontSize: '1.5rem', color: '#3575E2', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>JobForU</span>

</a>
            <ul className='hidden md:flex gap-12'>
                {
                    navItems.map(({path,title})=> (
                        <li key={path} className='text-base text-primary '>
                            <NavLink to={path}
                    className={({ isActive}) =>
                      isActive
                        ? "active": ""
                    }
                  >
                    {title}
                  </NavLink>
                        </li>
                    ))
                    
                }
            </ul>
            <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
                <Link to ="/login" className='py-2 px-5 border rounded'>Login</Link>
                <Link to ="/sign-up" className='py-2 px-5 border rounded bg-blue text-white'>Sign up</Link>

            </div>
            <div className='md:hidden block'>
                <button onClick={handleMenuToggler}>
                    {
                        isMenuOpen ? <FaXmark className='w-5 h-5 text-primary'/> : <FaBarsStaggered className='w-5 h-5 text-primary '/>
                    }
                    
                </button>
            </div>
        </nav>

        <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "":"hidden"}`}> 
            <ul>
                {
                    navItems.map(({path,title})=> (
                        <li key={path} className='text-base text-white first:text-white py-1'>
                            <NavLink to={path}
                    className={({ isActive}) =>
                      isActive
                        ? "active": ""
                    }
                  >
                    {title}
                  </NavLink>
                        </li>
                    ))
                    
                }
                 <li className='text-white py-1'><Link to ="/login" >Login</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar