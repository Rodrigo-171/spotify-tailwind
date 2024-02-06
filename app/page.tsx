import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>
          <nav className='space-y-5 mt-10'>
            <a href='' className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href='' className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href='' className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-2'>
            <a href='#'className='text-sm text-zinc-400 hover:text-zinc-100'>Hot hits Brasil</a>
            <a href='#'className='text-sm text-zinc-400 hover:text-zinc-100'>Aniver Funk</a>
            <a href='#'className='text-sm text-zinc-400 hover:text-zinc-100'>Jesus is King</a>
            <a href='#'className='text-sm text-zinc-400 hover:text-zinc-100'>Rock</a>
            <a href='#'className='text-sm text-zinc-400 hover:text-zinc-100'>As Mais Tocadas</a>
          </nav>
        </aside>
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight/>
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-6 mt-4'>
            <a href="#" className='bg-white/5 group flex items-center gap-4  rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/images/album.jpg" width={104} height={104} alt="Capa do album de system of down" />
              <strong>Chop Suey!</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/images/album.jpg" width={104} height={104} alt="Capa do album de system of down" />
              <strong>Chop Suey!</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/images/album.jpg" width={104} height={104} alt="Capa do album de system of down" />
              <strong>Chop Suey!</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/images/album.jpg" width={104} height={104} alt="Capa do album de system of down" />
              <strong>Chop Suey!</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/images/album.jpg" width={104} height={104} alt="Capa do album de system of down" />
              <strong>Chop Suey!</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/images/album.jpg" width={104} height={104} alt="Capa do album de system of down" />
              <strong>Chop Suey!</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Rodrigo Navarro Medeiros</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href="#" className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/images/album.jpg" className="w-full" width={120} height={120} alt="Capa do album de system of down" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>

            <a href="#" className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/images/album.jpg" className="w-full" width={120} height={120} alt="Capa do album de system of down" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>

            <a href="#" className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/images/album.jpg" className="w-full" width={120} height={120} alt="Capa do album de system of down" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>

            <a href="#" className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/images/album.jpg" className="w-full" width={120} height={120} alt="Capa do album de system of down" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>

            <a href="#" className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/images/album.jpg" className="w-full" width={120} height={120} alt="Capa do album de system of down" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 p-6'>
        footer
      </footer>
    </div>
  )
}
