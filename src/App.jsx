import { useState } from 'react'

function App() {
  const [selectedItem, setSelectedItem] = useState(0)

  const handleSlider = () => {
    setSelectedItem(selectedItem === 0 ? 1 : 0)
  }

  const TESTIMONIALS = [
    {
      id: 1,
      name: 'Tanya Sinclair',
      role: 'UX Engineer',
      testimony: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
      imageUrl : '/image-tanya.jpg'
    },
    {
      id: 2,
      name: 'John Tarkpor',
      role: 'Junior Front-end Developer',
      testimony: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
      imageUrl : '/image-john.jpg'
    },
  ]

  return (
    <div className='main w-[100lvw] min-h-[100lvh] lg:h-[100vh] overflow-hidden font-main bg-mainPattern bg-mobile lg:bg-desktop bg-top-2 lg:bg-right-2 bg-no-repeat'>
      <div className='w-full h-full py-6 flex flex-col items-center justify-center bg-curve bg-left-bottom-2 bg-curveSize bg-no-repeat'>
        <div className='card w-[350px] md:w-[800px] xl:w-[1200px] py-8 flex flex-col lg:flex-row-reverse items-center'>
          <section className='flex items-center justify-center relative lg:z-0'>
            <div className='w-[240px] lg:w-[350px] xl:w-[450px] xl:-ml-[5.25rem] shadow-xl rounded-md overflow-hidden'>
              <img className='w-full h-full' src={TESTIMONIALS[selectedItem].imageUrl} alt={`${TESTIMONIALS[selectedItem].name} picture`} />
            </div>
            <div className='flex flex-row items-center justify-center overflow-hidden w-[4.5rem] h-8 lg:w-24 lg:h-12 rounded-full bg-white shadow-xl absolute bottom-0 translate-y-5 lg:left-0 lg:-translate-x-1/3 '>
              <button className='w-full h-full flex items-center justify-center active:bg-[#aaa] transition-colors ease-in duration-150' onClick={handleSlider}>
                <img className='w-[10px] h-[12px]' src='/icon-prev.svg' alt="" />
              </button>
              <button className='w-full h-full flex items-center justify-center active:bg-[#aaa] transition-colors ease-in duration-150' onClick={handleSlider}>
                <img className='w-[10px] h-[12px]' src='/icon-next.svg' alt="" />
              </button>
            </div>
          </section>
          <section className='md:w-[300px] lg:w-[680px] lg:z-10 my-10 px-8 lg:pl-10 lg:pr-6 lg:tracking-wide text-center lg:text-left  bg-quotations bg-no-repeat bg-top xl:bg-top-left-2 bg-smallQuotes xl:bg-largeQuotes'>
            <p className='text-[#202046] md:text-xl xl:text-3xl xl:leading-10 mt-8 mb-4'>{TESTIMONIALS[selectedItem].testimony}</p>
            <div className='flex flex-col lg:flex-row lg:gap-2 lg:my-4'>
              <h1 className='text-[#202046] lg:text-base xl:text-lg font-semibold'>{TESTIMONIALS[selectedItem].name}</h1>
              <p className='font-medium lg:text-base xl:text-lg text-[#babacf]'>{TESTIMONIALS[selectedItem].role}</p>
            </div>
          </section>
        </div>
        <div className="text-center text-xs lg:text-sm">
        Challenge by{" "}
        <a className="text-[#3e52a3]" href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a className="text-[#3e52a3]" href="#">Juan Miranda</a>.
      </div>
      </div>
    </div>
  )
}

export default App
