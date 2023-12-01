'use client'
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import Article from '@/components/Article';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ArticlePreview from '@/components/ArticlePreview';
import articlePreview from '@/data/Article.json';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


export default function Read({params}:{params:{slug:string}}) {

  const id = params;
  const route = useRouter();
  const back = ()=>{route.back();}

  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 pb-[100px] overflow-x-hidden">
   

    <div className='pt-6 w-full bg-black flex justify-center pb-[20px]'>
    <div className='frame-container'>
    <NavBar/>
    </div>
    </div>

    <section className='w-full flex flex-col items-center'>
      <div className='frame-container'>

      <div className='font-family-Roboto text-blue-500 mt-[60px] flex items-center gap-[8px] cursor-pointer' onClick={back}><KeyboardBackspaceIcon/>Back</div>
    
     <div className='mt-[30px]'>
     <Article articleID={id.slug}/>
     </div>

     <div className='mt-[60px] w-full flex overflow-scroll gap-[24px]'>

      {articlePreview.map((data, index)=>(
        <ArticlePreview key={index} id={index.toString()} userPic={data.user.pic} name={data.user.name} category={data.article.category} date={data.user.date} title={data.article.title} subTitle={data.article.subtitle}/>
      ))}


     </div>
      </div>
    </section>

    </main>
  )
}
