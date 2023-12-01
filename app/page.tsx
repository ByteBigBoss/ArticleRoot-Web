import NavBar from '@/components/NavBar'
import React from 'react';
import articlePreview from '@/data/Article.json';
import ArticlePreview from '@/components/ArticlePreview';


const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 overflow-x-hidden pb-[60px]">
     
     <div className='pt-6 w-full bg-black flex justify-center pb-[20px]'>
    <div className='frame-container'>
    <NavBar/>
    </div>
    </div>
     
    <section className='w-full flex flex-col items-center'>
      <div className='frame-container'>

     <div className='mt-[60px] w-full flex flex-col gap-[24px]'>

      {articlePreview.map((data, index)=>(
        <ArticlePreview key={index} id={index.toString()} userPic={data.user.pic} name={data.user.name} category={data.article.category} date={data.user.date} title={data.article.title} subTitle={data.article.subtitle}/>
      ))}


     </div>

      </div>
    </section>


    </main>
  )
}

export default page