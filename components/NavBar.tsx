'use client'
import React, { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PagesIcon from '@mui/icons-material/Pages';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

const NavBar = () => {

  const [page, setPage] = useState('Home');

  const route = useRouter();
  const navigateToHome = () => { route.push('/', { scroll: false }) };
  const navigateToArticales = () => { route.push('/articles', { scroll: false }) };
  const navigateToProfile = () => { route.push('/profile', { scroll: false }) };

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
    <div className='font-family-Montserrat flex items-center justify-between'>

      <div className=''>
        <div className='text-[36px] font-bold text-white'>ARTICALE<span className='text-blue-500'>ROOT</span></div>
      </div>

      <div className='flex gap-[30px]'>
      <div className='flex items-center gap-[30px] px-[60px] py-[20px] w-fit bg-slate-900 border-[1px] border-slate-800 rounded-[24px]'>
        <div className='flex items-center gap-[6px] cursor-pointer' onClick={navigateToHome}>

          <div className={`${'font-family-Roboto font-medium text-[16px] flex items-center gap-[6px] '} ${page === 'home' ? 'text-blue-500 font-semibold' : 'text-white'}`}><AutoStoriesOutlinedIcon sx={{ width: '16px', height: '16px', }} /> Read</div>
        </div>


        <div className='flex items-center gap-[6px] cursor-pointer' onClick={navigateToArticales}>
          <div className={`${'font-family-Roboto font-medium text-[16px] flex items-center gap-[6px] '} ${page === 'articles' ? 'text-blue-500 font-semibold' : 'text-white'}`}><PagesIcon sx={{ width: '16px', height: '16px', }} /> Articles</div>
        </div>


        <div className='flex items-center cursor-pointer' onClick={navigateToProfile}>

          <div className={`${'font-family-Roboto font-medium text-[16px] flex items-center gap-[6px] '} ${page === 'profile' ? 'text-blue-500 font-semibold' : 'text-white'}`}> <AccountCircleIcon sx={{ width: '16px', height: '16px', }} /> Profile</div>

        </div>
      </div>
      <div className='flex items-center gap-[30px] '>
          <button className='text-[18px] font-medium text-white'>Join</button>
          <button className='text-[18px] font-medium bg-blue-500 px-[24px] py-[8px] rounded-md text-white'>Log in</button>
      </div>
      </div>

      

    </div>
  )
}

export default NavBar