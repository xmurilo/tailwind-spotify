import React from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { infoArtists } from './infoArtists';
import Image from 'next/image';
import { SideBar } from './components/SideBar';
import { Footer } from './components/Footer';
import { collectionMix } from './collectionMix';
const musics = infoArtists.map(artist => (
  <a
    key={artist.id}
    className='bg-white/5 group rounded flex items-center gap-4  overflow-hidden hover:bg-white/10 transition-colors '
  >
    <Image src={artist.img} width={104} height={104} alt={`Capa do artista do ${artist.artist}`} />
    <strong>{artist.nameMusic}</strong>

    <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
      <Play />
    </button>
  </a>
));

const mix = collectionMix.map(mix => (
  <a key={mix.id} className='bg-white/5 p-3 rounded-md flex flex-col gap-2  hover:bg-white/10'>
    <Image src={mix.img} className='w-full' width={600} height={600} alt='Capa da musica Akari' />
    <strong className='font-semibold'>{mix.title}</strong>
    <span className='text-sm text-zinc-400'>{mix.subTitle}</span>
  </a>
));

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
          <h1 className='font-semibold text-3xl mt-10'>Bom Dia</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>{musics}</div>

          <h2 className='font-semibold text-2xl mt-10'>Feito para  Murilo</h2>

          <div className='grid grid-cols-6 gap-4 mt-4'>{mix}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
