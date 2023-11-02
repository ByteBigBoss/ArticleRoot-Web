import Image from 'next/image';
import NavBar from '@/components/NavBar';
import Article from '@/components/Article';

export default function Home() {

  

  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 pb-[100px] overflow-x-hidden">
   

    <div className='pt-6 w-full bg-black flex justify-center pb-[20px]'>
    <div className='frame-container'>
    <NavBar/>
    </div>
    </div>

    <section className='w-full flex flex-col items-center'>
      <div className='frame-container'>

     <div className='mt-[60px]'>
     <Article />
     </div>

      </div>
    </section>

    </main>
  )
}
