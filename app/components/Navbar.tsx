'use client'
import { Lightbulb, LightbulbOff, Moon, SunMoon } from 'lucide-react'
import Link from 'next/link'
import { useThemeContext } from '../providers/theme-provider'
import ThemedPage from './ThemedPage'

export default function Navbar() {
  const { theme, handleTheme } = useThemeContext()

  const onToggle = () => {
    if (theme === 'dark') {
      handleTheme('light')
    } else {
      handleTheme('dark')
    }
  }

  return (
    <ThemedPage>
      <header className={`flex bg-purple-500 w-full h-20 items-center dark:bg-zinc-900`}>
        <div className='flex w-[95%] md:w-[80%] mx-auto h-full items-center justify-between text-white'>
          <div className=' text-2xl font-bold'>
            <Link href='/'>LOGO</Link>
          </div>

          <div className='flex w-full justify-end mr-16 items-center h-full'>
            <Link
              href='/contato'
              className='flex h-full items-center  hover:border-purple-900 hover:border-b-4 hover:mt-1'
            >
              Contato
            </Link>
          </div>

          <div className=' gap-8 flex items-center'>
            <button type='button' onClick={onToggle} className='border w-16 rounded-full '>
              {theme === 'dark' && (
                <div className='justify-end transition-transform flex'>
                  <SunMoon className='bg-white rounded-full p-1 text-yellow-500 ' />
                </div>
              )}

              {theme === 'light' && (
                <div>
                  <Moon className='bg-white rounded-full p-1  fill-yellow-500' />
                </div>
              )}
            </button>

            <button type='button' onClick={onToggle} className=' '>
              {theme === 'dark' && (
                <div className='justify-end transition-transform flex'>
                  <SunMoon className='bg-white rounded-full p-1 text-yellow-500' size={30} />
                </div>
              )}

              {theme === 'light' && (
                <div>
                  <Moon className='bg-gray-700 rounded-full p-1  fill-yellow-400 text-transparent' size={30} />
                </div>
              )}
            </button>

            <button type='button' onClick={onToggle} className=' '>
              {theme === 'dark' && (
                <div className='justify-end transition-transform flex'>
                  <Lightbulb className='bg-white rounded-full p-1 text-yellow-500' size={30} />
                </div>
              )}

              {theme === 'light' && (
                <div>
                  <LightbulbOff className='bg-gray-700 rounded-full p-1  text-yellow-300 ' size={30} />
                </div>
              )}
            </button>
          </div>
        </div>
      </header>
    </ThemedPage>
  )
}
