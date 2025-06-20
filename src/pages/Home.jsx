import '../index.css'
import xlogo from '../assets/xlogo.png'
import { useEffect, useState as usesState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
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
      <main className='overflow-hidden bg-black h-screen w-screen flex items-center justify-center'>

        {/* leftcol */}
        <div className='flex justify-center items-center overflow-hidden h-screen w-70'>
          <div className='w-60 h-screen'>

            {/* navbar */}
            <div className='h-200'>
              <div className='mb-2 mt-1 cursor-pointer hover:rounded-full hover:bg-zinc-800 p-2 w-12 h-12 duration-150' href="">
                <Link to='/'>
                  <img src={xlogo} alt="" />
                </Link>
              </div>

              <div className='flex justify-start items-center cursor-pointer w-60 h-13 '>
                <div className='flex justify-start items-center h-6 w-30 ml-2'>
                  <div className='flex justify-center items-center h-6 w-6'>
                    <img className='w-6 h-6' src={xlogo} alt="" />
                  </div>
                  <div className='flex justify-center items-center h-6 w-19'>
                    <span className='font-bold text-xl text-white'>
                      Home
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex justify-start items-center cursor-pointer  w-60 h-13 '>
                <div className='flex justify-start items-center  h-6 w-30 ml-2'>
                  <div className='flex justify-center items-center  h-6 w-6'>
                    <img className='w-6 h-6' src={xlogo} alt="" />
                  </div>
                  <div className='flex justify-center items-center  h-6 w-27'>
                    <span className='text-xl text-white'>
                      Explore
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex justify-start items-center cursor-pointer  w-60 h-13 '>
                <div className='flex justify-start items-center  h-6 w-45 ml-2'>
                  <div className='flex justify-center items-center  h-6 w-6'>
                    <img className='w-6 h-6' src={xlogo} alt="" />
                  </div>
                  <div className='flex justify-center items-center  h-6 w-36'>
                    <span className='text-xl text-white'>
                      Notifications
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex justify-start items-center cursor-pointer  w-60 h-13 '>
                <div className='flex justify-start items-center  h-6 w-40 ml-2'>
                  <div className='flex justify-center items-center  h-6 w-6'>
                    <img className='w-6 h-6' src={xlogo} alt="" />
                  </div>
                  <div className='flex justify-center items-center  h-6 w-32'>
                    <span className='text-xl text-white'>
                      Messages
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex justify-start items-center cursor-pointer  w-60 h-13 '>
                <div className='flex justify-start items-center  h-6 w-30 ml-2'>
                  <div className='flex justify-center items-center  h-6 w-6'>
                    <img className='w-6 h-6' src={xlogo} alt="" />
                  </div>
                  <div className='flex justify-center items-center  h-6 w-20'>
                    <span className='text-xl text-white'>
                      Grok
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex justify-start items-center cursor-pointer  w-60 h-13 '>
                <div className='flex justify-start items-center  h-6 w-35 ml-2'>
                  <div className='flex justify-center items-center  h-6 w-6'>
                    <img className='w-6 h-6' src={xlogo} alt="" />
                  </div>
                  <div className='flex justify-center items-center  h-6 w-20'>
                    <span className='text-xl text-white'>
                      Lists
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex justify-start items-center cursor-pointer  w-60 h-13 '>
                <div className='flex justify-start items-center  h-6 w-40 ml-2'>
                  <div className='flex justify-center items-center  h-6 w-6'>
                    <img className='w-6 h-6' src={xlogo} alt="" />
                  </div>
                  <div className='flex justify-center items-center  h-6 w-35'>
                    <span className='text-xl text-white'>
                      Bookmarks
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex justify-start items-center cursor-pointer  w-60 h-13 '>
                <div className='flex justify-start items-center  h-6 w-35 ml-2'>
                  <div className='flex justify-center items-center  h-6 w-6'>
                    <img className='w-6 h-6' src={xlogo} alt="" />
                  </div>
                  <div className='flex justify-center items-center  h-6 w-20'>
                    <span className='text-xl text-white'>
                      Jobs
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex justify-start items-center cursor-pointer  w-60 h-13 '>
                <div className='flex justify-start items-center  h-6 w-50 ml-2'>
                  <div className='flex justify-center items-center  h-6 w-6'>
                    <img className='w-6 h-6' src={xlogo} alt="" />
                  </div>
                  <div className='flex justify-center items-center  h-6 w-40'>
                    <span className='text-xl text-white'>
                      Communities
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex justify-start items-center cursor-pointer  w-60 h-13 '>
                <div className='flex justify-start items-center  h-6 w-35 ml-2'>
                  <div className='flex justify-center items-center  h-6 w-6'>
                    <img className='w-6 h-6' src={xlogo} alt="" />
                  </div>
                  <div className='flex justify-center items-center  h-6 w-30'>
                    <span className='text-xl text-white'>
                      Premium
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex justify-start items-center cursor-pointer  w-60 h-13 '>
                <div className='flex justify-start items-center  h-6 w-45 ml-2'>
                  <div className='flex justify-center items-center  h-6 w-6'>
                    <img className='w-6 h-6' src={xlogo} alt="" />
                  </div>
                  <div className='flex justify-center items-center  h-6 w-40'>
                    <span className='text-xl text-white'>
                      Verified Orgs
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex justify-start items-center cursor-pointer w-60 h-13'>
                <div className='flex justify-start items-center  h-6 w-35 ml-2'>
                  <div className='flex justify-center items-center  h-6 w-6'>
                    <img className='w-6 h-6' src={xlogo} alt="" />
                  </div>
                  <div className='flex justify-center items-center  h-6 w-25'>
                    <span className='text-xl text-white'>
                      Profile
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex justify-start items-center cursor-pointer  w-60 h-13'>
                <div className='flex justify-start items-center  h-6 w-30 ml-2'>
                  <div className='flex justify-center items-center  h-6 w-6'>
                    <img className='w-6 h-6' src={xlogo} alt="" />
                  </div>
                  <div className='flex justify-center items-center  h-6 w-20'>
                    <span className='text-xl text-white'>
                      More
                    </span>
                  </div>
                </div>
              </div>


              <div className='flex justify-center items-center bg-white h-12 w-55 rounded-full mt-5'>
                <span className='text-black font-semibold text-md'>
                  Post
                </span>
              </div>

            </div>
            {/* navbar */}

            {/* profile */}
            <div className='cursor-pointer flex justify-center h-20 w-60 mt-11 ml-2 items-center'>
              <div className='px-3 hover:rounded-full hover:bg-zinc-900 rounded-full flex justify-start h-15 w-60 bg-black m-1 items-center flex-row'>
                <img className='w-8 h-8 mr-2' src={xlogo} alt="" />
                <div className='flex flex-col w-15 h-10'>
                  <span className='text-white text-sm font-bold'>
                    kayf
                  </span>
                  <span className='text-gray-300 text-xs font-semibold'>
                    @kayfyak
                  </span>
                </div>
                <div className='flex items-center justify-end w-screen h-4 '>
                  <span className='mb-1 text-white font-bold'>
                    ...
                  </span>
                </div>
              </div>
            </div>
            {/* profile */}
          </div>
        </div>
        {/* leftcol */}



        {/* feed */}
        <section className='flex flex-col h-screen w-140 border border-zinc-900'>
          <div className='flex justify-center items-center h-13 w-140'>
            <div className='flex justify-center items-center cursor-pointer border border-b-zinc-900 hover:bg-zinc-900 h-13 w-70 duration-200'>
              <span className='text-white font-bold text-sm'>
                For you
              </span>
            </div>
            <div className='flex justify-center items-center cursor-pointer border border-b-zinc-900 hover:bg-zinc-900 h-13 w-70 duration-200'>
              <span className='text-zinc-500 font-bold text-sm'>
                Following
              </span>
            </div>
          </div>
        </section>
        {/* feed */}

        {/* rightcol */}
        <section className=' h-250 w-80 flex justify-center items-center self-start'>
          <div className=' h-230 w-70 flex flex-col items-center self-start'>

            {/* searchbar */}
            <div className='mt-1 flex border border-zinc-800 w-70 h-10 rounded-full'>
              <div className='rounded-full w-8 h-10'>
              </div>
              <input className='text-white text-sm w-70 justify-center items-center' type="text" name="" placeholder="Search" />
            </div>
            {/* searchbar */}

            {/* premium */}
            <div className='flex border border-zinc-800 justify-center items-center mt-5 rounded-xl  h-35 w-70'>
              <div className='h-30 w-65  flex flex-col'>
                <span className='text-white font-bold text-xl mb-2'>
                  Subscribe to Premium
                </span>
                <span className='text-white text-sm text-wrap font-extralight'>
                  Subscribe to unlock new features and if eligible, receive a share of revenue.
                </span>
                <div className='cursor-pointer hover:bg-blue-400 flex bg-blue-500 h-9 w-25 mt-2 rounded-full justify-center items-center'>
                  <span className='font-bold text-white text-xs'>
                    Subscribe
                  </span>
                </div>
              </div>
            </div>
            {/* premium */}

            {/* happening */}
            <div className='flex border border-zinc-800 flex-col justify-start items-center m-5 rounded-xl  h-75 w-70'>
              <div className='h-8 w-65  flex flex-col mt-3'>
                <span className='text-white font-bold text-xl mb-1'>
                  What's happening
                </span>

              </div>
              <div className='hover:bg-zinc-900 flex flex-col w-70 h-65 duration-250'>
              </div>
            </div>
            {/* happening */}

            {/* follow */}
            <div className='flex border border-zinc-800 justify-center items-center rounded-xl h-60 w-70'>
              <div className='h-55 w-65  flex flex-col'>
                <span className='text-white font-bold text-xl mb-1'>
                  Who to follow
                </span>
                <span className='text-blue-500 text-sm cursor-pointer'>
                  Show more
                </span>
              </div>
            </div>
            {/* follow */}

            <footer>
              <div className=' h-30 w-70 mt-4 text-[12px] font-thin text-center text-zinc-100'>
                <ul className='flex gap-2 flex-wrap justify-center items-center'>
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
                  <li className='hover:underline cursor-pointer'>More ...</li>
                  <li>© 2025 X Corp.</li>
                </ul>
              </div>
            </footer>

          </div>

        </section>
        {/* rightcol */}
      </main>
    </>
  )
}

export default Home
