import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function Main(){
    return(
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
              <Image src="./images/album.jpg" width={104} height={104} alt="Capa do album de system of down" />
              <strong>Chop Suey!</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="./images/album2.jpg" width={104} height={104} alt="Capa do album de system of down" />
              <strong>Psychosocial</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="./images/album3.jpg" width={104} height={104} alt="Capa do album de system of down" />
              <strong>A Little Piece of Heaven</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="./images/album4.jpg" width={104} height={104} alt="Capa do album de system of down" />
              <strong>Um Minuto Para o Fim do Mundo</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="./images/album5.jpg" width={104} height={104} alt="Capa do album de system of down" />
              <strong>Pelados em Santos</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="./images/album6.jpg" width={104} height={104} alt="Capa do album de system of down" />
              <strong>Bohemian Rhapsody</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Rodrigo Navarro Medeiros</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href="#" className='bg-white/5 p-3 flex flex-col gap-2 rounded-lg hover:bg-white/10'>
              <Image src="./images/album.jpg" className="w-full" width={120} height={120} alt="Capa do album de system of down" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>System of Down, Metalica, Sepultura</span>
            </a>

            <a href="#" className='bg-white/5 p-3 flex flex-col gap-2 rounded-lg hover:bg-white/10'>
              <Image src="./images/album2.jpg" className="w-full" width={120} height={120} alt="Capa do album de system of down" />
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-400'>Slipknot, iron Maiden, Slayer</span>
            </a>

            <a href="#" className='bg-white/5 p-3 flex flex-col gap-2 rounded-lg hover:bg-white/10'>
              <Image src="./images/album3.jpg" className="w-full" width={120} height={120} alt="Capa do album de system of down" />
              <strong className='font-semibold'>Daily Mix 3</strong>
              <span className='text-sm text-zinc-400'>Avenged Sevenfold, Linkin Park, girl in red and more</span>
            </a>

            <a href="#" className='bg-white/5 p-3 flex flex-col gap-2 rounded-lg hover:bg-white/10'>
              <Image src="./images/album4.jpg" className="w-full" width={120} height={120} alt="Capa do album de system of down" />
              <strong className='font-semibold'>Daily Mix 4</strong>
              <span className='text-sm text-zinc-400'>CPM22, Tihuana, Charlie Brown Jr</span>
            </a>

            <a href="#" className='bg-white/5 p-3 flex flex-col gap-2 rounded-lg hover:bg-white/10'>
              <Image src="./images/album5.jpg" className="w-full" width={120} height={120} alt="Capa do album de system of down" />
              <strong className='font-semibold'>Daily Mix 5</strong>
              <span className='text-sm text-zinc-400'>Mamonas Assassinas, Raimundos, girl in red and more</span>
            </a>
          </div>
        </main>
    )
}
