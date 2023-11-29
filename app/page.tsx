'use client'
import { useEffect, useState } from 'react'
import { Lightbulb, LightbulbOff, Moon, SunMoon } from 'lucide-react'

export default function Home() {
  const [darkMode, setDarkMode] = useState('light')

  const onToggle = () => {
    if (darkMode === 'dark' || !darkMode) {
      localStorage.removeItem('theme')
      setDarkMode('light')
    } else {
      localStorage.theme = 'dark'
      setDarkMode('dark')
    }
  }

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode('dark')
    } else {
      setDarkMode('light')
      localStorage.removeItem('theme')
    }
  }, [])

  return (
    <div className={` h-screen  w-screen bg ${darkMode}`}>
      <header className='flex bg-purple-500 w-full h-20 items-center dark:bg-zinc-900'>
        <div className='flex w-[95%] md:w-[80%] mx-auto h-full items-center justify-between text-white'>
          <div className=' text-2xl font-bold'>LOGO</div>
          <div>
            <button type='button' onClick={onToggle} className='border w-16 rounded-full '>
              {darkMode === 'dark' && (
                <div className='justify-end transition-transform flex'>
                  <SunMoon className='bg-white rounded-full p-1 text-yellow-500 ' />
                </div>
              )}

              {darkMode === 'light' && (
                <div>
                  <Moon className='bg-white rounded-full p-1  fill-yellow-500' />
                </div>
              )}
            </button>
          </div>

          <div>
            <button type='button' onClick={onToggle} className=' '>
              {darkMode === 'dark' && (
                <div className='justify-end transition-transform flex'>
                  <SunMoon className='bg-white rounded-full p-1 text-yellow-500' size={30} />
                </div>
              )}

              {darkMode === 'light' && (
                <div>
                  <Moon className='bg-gray-700 rounded-full p-1  fill-yellow-400 text-transparent' size={30} />
                </div>
              )}
            </button>
          </div>

          <div>
            <button type='button' onClick={onToggle} className=' '>
              {darkMode === 'dark' && (
                <div className='justify-end transition-transform flex'>
                  <Lightbulb className='bg-white rounded-full p-1 text-yellow-500' size={30} />
                </div>
              )}

              {darkMode === 'light' && (
                <div>
                  <LightbulbOff className='bg-gray-700 rounded-full p-1  text-yellow-300 ' size={30} />
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className=' dark:bg-zinc-700 h-full'>
        <div className='flex w-[95%] md:w-[80%] mx-auto h-full items-center justify-center'>
          <div className='flex gap-2 flex-col md:flex-row'>
            <h1 className='text-6xl'>Exemple</h1> <h1 className='text-6xl font-bold text-purple-600'>Dark Mode</h1>
          </div>
        </div>
      </main>
    </div>
  )
}
