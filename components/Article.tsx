import Image from 'next/image'
import React from 'react'
import ContentBlock from './ContentBlock';
import articleData from '@/data/Article.json';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface ArticleProps{
  articleID:string;
}

const Article:React.FC<ArticleProps> = ({articleID}) => {

  const data = articleData[parseInt(articleID)];
  
  return (
    <div className='bg-white shadow-md rounded-[24px] border-[1px] border-slate-200 w-full h-auto box-border p-[40px]'>
      {/* user */}
      <div className='pb-[24px] border-b-[1px] border-b-slate-200 flex justify-between nsTsm:flex-col'>
       <div className='flex gap-[30px] nsTsm:flex-col'>
       <div className='w-[60px] h-[60px] flex-shrink-0 bg-red-400 rounded-full relative'><Image src={data.user.pic} fill alt='Article Author' /></div>
        <div className='flex flex-col'>
          <div><div className='font-family-Roboto text-[18px] font-medium'>{data.user.name}</div></div>
          <div><div className='font-family-Roboto text-[15px] font-normal'>{data.user.date}</div></div>
        </div>
      
       </div>
       <div><div className='font-family-Roboto text-[16px] font-normal pt-[14px]'>{data.article.category}</div></div>
      </div>


      {/* title */}
      <div className='pt-[24px]'>

        <div className='text-[48px] font-bold font-family-Roboto nsTsm:text-[36px]'>{data.article.title}</div>
      </div>

  {/* sub-title */}
  <div className='pt-[16px]'>

<div className='text-[24px] font-normal font-family-Roboto'>{data.article.subtitle}</div>
</div>

      {/* content */}
      <div className='flex flex-col gap-[30px] mt-[40px]'>
        {data.article.content.map((content, index)=>(
          <ContentBlock key={index} sub_unit_name={content.subUnitName} blocks_array={content.blocks} subUnitStyles='text-[24px] font-medium font-family-Roboto' contentBlockStyles='flex flex-col gap-[4px]'/>
        ))}
      </div>

    </div>
  )
}

export default Article