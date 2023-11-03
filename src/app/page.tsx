import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,

} from 'lucide-react';

import Image from 'next/image';
import imgAkari from '../../public/akari-img.jpg';
import imgPolyphia from '../../public/foto-album-polyphia.jpg';
import imgJapa from '../../public/foto-album-japa.jpg';
import imgNonly from '../../public/nonly-stay-with-me.jpg';
import imgTwentyOnePilots from '../../public/ride-twenty-one-pilots.jpg';
import imgLilPeep from '../../public/foto-album-lil-peep.jpg';
import { SideBar } from './components/SideBar';
import { Footer } from './components/Footer';

const Home = () => {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <SideBar />

        <main className='flex-1 p-6'>
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a className='bg-white/5 group rounded flex items-center gap-4  overflow-hidden hover:bg-white/10 transition-colors '>
              <Image src={imgAkari} width={104} height={104} alt='Capa da musica Akari' />
              <strong>Akari</strong>

              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a className='bg-white/5 group rounded flex items-center gap-4  overflow-hidden hover:bg-white/10 transition-colors '>
              <Image src={imgAkari} width={104} height={104} alt='Capa da musica Akari' />
              <strong>Akari</strong>

              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a className='bg-white/5 group rounded flex items-center gap-4  overflow-hidden hover:bg-white/10 transition-colors '>
              <Image src={imgAkari} width={104} height={104} alt='Capa da musica Akari' />
              <strong>Akari</strong>

              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a className='bg-white/5 group rounded flex items-center gap-4  overflow-hidden hover:bg-white/10 transition-colors '>
              <Image src={imgAkari} width={104} height={104} alt='Capa da musica Akari' />
              <strong>Akari</strong>

              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a className='bg-white/5 group rounded flex items-center gap-4  overflow-hidden hover:bg-white/10 transition-colors '>
              <Image src={imgAkari} width={104} height={104} alt='Capa da musica Akari' />
              <strong>Akari</strong>

              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a className='bg-white/5 group rounded flex items-center gap-4  overflow-hidden hover:bg-white/10 transition-colors '>
              <Image src={imgAkari} width={104} height={104} alt='Capa da musica Akari' />
              <strong>Akari</strong>

              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Murilo Silva</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a className='bg-white/5 p-3 rounded-md flex flex-col gap-2  hover:bg-white/10'>
              <Image
                src={imgPolyphia}
                className='w-full'
                width={120}
                height={120}
                alt='Capa da musica Akari'
              />
              <strong className='font-semibold'>Title</strong>
              <span className='text-sm text-zinc-400'>Name Artist</span>
            </a>

            <a className='bg-white/5 p-3 rounded-md flex flex-col gap-2  hover:bg-white/10'>
              <Image
                src={imgPolyphia}
                className='w-full'
                width={120}
                height={120}
                alt='Capa da musica Akari'
              />{' '}
              <strong className='font-semibold'>Title</strong>
              <span className='text-sm text-zinc-400'>Name Artist</span>
            </a>

            <a className='bg-white/5 p-3 rounded-md flex flex-col gap-2  hover:bg-white/10'>
              <Image
                src={imgPolyphia}
                className='w-full'
                width={120}
                height={120}
                alt='Capa da musica Akari'
              />{' '}
              <strong className='font-semibold'>Title</strong>
              <span className='text-sm text-zinc-400'>Name Artist</span>
            </a>

            <a className='bg-white/5 p-3 rounded-md flex flex-col gap-2  hover:bg-white/10'>
              <Image
                src={imgPolyphia}
                className='w-full'
                width={120}
                height={120}
                alt='Capa da musica Akari'
              />{' '}
              <strong className='font-semibold'>Title</strong>
              <span className='text-sm text-zinc-400'>Name Artist</span>
            </a>

            <a className='bg-white/5 p-3 rounded-md flex flex-col gap-2  hover:bg-white/10'>
              <Image
                src={imgPolyphia}
                className='w-full'
                width={120}
                height={120}
                alt='Capa da musica Akari'
              />{' '}
              <strong className='font-semibold'>Title</strong>
              <span className='text-sm text-zinc-400'>Name Artist</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
