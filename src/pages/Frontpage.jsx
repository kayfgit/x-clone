import '../index.css'
import xlogo from '../assets/xlogo.png'
import googlelogo from '../assets/googlelogo.png'
import applelogo from '../assets/applelogo.png'
import { useEffect, useState as usesState } from 'react'
import { Link } from 'react-router-dom'

function Frontpage() {
  const [loading, setLoading] = usesState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a loading delay of 1 second

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (loading) {
    return <div className='overflow-hidden flex items-center justify-center h-screen bg-black'>
      <img className='h-32 w-32' src={xlogo} alt="" />
    </div>
  }

  return (
    <>

      <main className='bg-black h-screen w-screen flex items-center justify-center overflow-hidden'>
        <img className='xl:flex w-100 h-100 mr-70 hidden' src={xlogo} alt="desc" />
        <form className='flex flex-col items-start justify-center gap-4 p-5 w-80 sm:mb-20'>
          <img className='w-15 h-15 mb-10 xl:hidden sm:flex' src={xlogo} alt="desc" />
          <h1 className='text-white text-6xl font-black mb-6 text-wrap'>Happening now</h1>
          <p className='text-white text-3xl font-bold self-start mb-5'>Join today.</p>

          <button className='cursor-pointer text-center text-slate-900 border bg-white rounded-4xl w-70 h-10' type=""><img className='w-8 mb-0.5 inline-block align-middle' src={googlelogo} alt="" />Sign up with Google</button>
          <button className='cursor-pointer text-center text-slate-900 border bg-white rounded-4xl w-70 h-10' type=""><img className='w-6 mr-1 mb-1 inline-block align-middle' src={applelogo} alt="" />Sign up with Apple</button>

          <div className='w-70 flex items-center gap-4 my-2'>
            <hr className='flex-grow border border-gray-600' />
            <p className='text-slate-300 self-center'>OR</p>
            <hr className='flex-grow border border-gray-600' />
          </div>

          <button className='hover:bg-blue-500 ease-in duration-150 cursor-pointer text-center font-bold text-white bg-blue-400 rounded-4xl w-70 h-10' type="">Create account</button>

          <p className='text-gray-500 text-xs'>By signing up, you agree to the <a className='text-blue-400 hover:underline' href="#">Terms of Service</a> and <a className='text-blue-400 hover:underline' href="#">Privacy Policy</a>, including <a className='text-blue-400 hover:underline' href="#">Cookie Use.</a></p>

          <p className='text-white font-bold self-start mt-10'>Already have an account?</p>

          <Link to="/home">
            <button className='hover:bg-[#1d9bf01a] ease-in duration-150 cursor-pointer font-semibold text-center text-blue-400 border border-gray-500 rounded-4xl w-70 h-10' type="">Sign in</button>
          </Link>
        </form>
        <footer className='absolute text-white bottom-5 max-xl:hidden'>
          <ul className='text-slate-400 flex flex-wrap text-[12px] gap-2 justify-center'>
            <li className='hover:underline cursor-pointer'>About</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>Download the X app</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>Grok</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>Help Center</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>Terms of Service</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>Privacy Policy</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>Cookie Policy</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>Accessibility</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>Ads info</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>Blog</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>Careers</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>Brand Resources</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>Advertising</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>Marketing</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>X for Business</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>Developers</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>Directory</li>
            <li>|</li>
            <li className='hover:underline cursor-pointer'>Settings</li>
            <li>|</li>
            <li>© 2025 X Corp.</li>
          </ul>
        </footer>
      </main>
    </>
  )
}

export default Frontpage
