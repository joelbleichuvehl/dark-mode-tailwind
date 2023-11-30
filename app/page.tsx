'use client'
import ThemedPage from './components/ThemedPage'

export default function Home() {
  return (
    <ThemedPage>
      <div className={` h-screen  w-screen bg`}>
        <main className=' dark:bg-zinc-700 h-full'>
          <div className='flex w-[95%] md:w-[80%] mx-auto h-full items-center justify-center'>
            <div className='flex gap-2 flex-col md:flex-row'>
              <h1 className='text-6xl'>Exemple</h1> <h1 className='text-6xl font-bold text-purple-600'>Dark Mode</h1>
            </div>
          </div>
        </main>
      </div>
    </ThemedPage>
  )
}
