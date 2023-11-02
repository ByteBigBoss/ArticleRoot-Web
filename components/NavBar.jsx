'use client'
import React, { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PagesIcon from '@mui/icons-material/Pages';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const NavBar = () => {

  const [page, setPage] = useState('Home');

  const route = useRouter();
  const navigateToHome = ()=>{route.push('/', {scroll:false})};
  const navigateToArticales = ()=>{route.push('/articles', {scroll:false})};
  const navigateToProfile = ()=>{route.push('/profile', {scroll:false})};

  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname == "/") {
      setPage("home");
    } else if (pathname == "/articles") {
      setPage("articles");
    } else if (pathname == "/profile") {
      setPage("profile");
    }

  }, [pathname, searchParams])

  return (
    <div className='font-family-Montserrat flex items-center gap-[30px] px-[60px] py-[20px] bg-slate-100 border-[1px] border-slate-300 rounded-[24px]'>

      <div className='flex items-center gap-[6px] cursor-pointer' onClick={navigateToHome}>
        
      <div className={`${'font-family-Roboto font-medium text-[16px] flex items-center gap-[6px]'} ${page==='home'?'text-blue-600 font-semibold':''}`}><HomeIcon sx={{width:'16px', height:'16px', }}/> Home</div>
      </div>


      <div className='flex items-center gap-[6px] cursor-pointer' onClick={navigateToArticales}>
      <div className={`${'font-family-Roboto font-medium text-[16px] flex items-center gap-[6px]'} ${page==='articles'?'text-blue-600 font-semibold':''}`}><PagesIcon sx={{width:'16px', height:'16px',}}/> Articles</div>
      </div>


      <div className='flex items-center cursor-pointer' onClick={navigateToProfile}>

      <div className={`${'font-family-Roboto font-medium text-[16px] flex items-center gap-[6px]'} ${page==='profile'?'text-blue-600 font-semibold':''}`}> <AccountCircleIcon sx={{width:'16px', height:'16px',}}/> Profile</div>

      </div>

    </div>
  )
}

export default NavBar