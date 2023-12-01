'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ArticlePreviewProps{
  title:string,
  subTitle:string,
  userPic:string,
  date:string,
  name:string,
  category:string,
  id:string,
}

const ArticlePreview:React.FC<ArticlePreviewProps> = ({title, subTitle, userPic, date, name, category, id}) => {

  const route = useRouter();

  const navigateToReadArticale = () => {
    route.push(`/read/${id}`, {scroll:true});
  };
  
  return (
    <div className='w-full box-border px-[40px] py-[40px] border-[1px] border-color hover:bg-black hover:text-white cursor-pointer' onClick={navigateToReadArticale}>
      
      <div>
        <div className='flex gap-[24px]'>
        <div className='w-[60px] h-[60px] flex-shrink-0 bg-red-400 rounded-full relative'><Image src={userPic} fill alt='Article Author' /></div>
          <div>
            <div className='font-family-Roboto font-bold text-[18px] '>{name}</div>
            <div className='font-family-Roboto font-normal text-[16px] '>{date}</div>
          </div>
        </div>
      </div>

      <div className='pt-[20px]'><div className='font-family-Roboto text-[16px] font-normal text-blue-600'>{category}</div></div>
      
      <div><div className='font-family-Roboto-Slab text-[36px] font-semibold '>{title}</div></div>
      <div><div className='font-family-Roboto-Slab text-[26px] '>{subTitle}</div></div>
    </div>
  )
}

export default ArticlePreview