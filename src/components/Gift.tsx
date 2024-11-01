
const Gift = () => {
  return (
    <div className="xl:w-9/12 w-11/12 mx-auto mt-16 ">
        <h3 data-aos="zoom-in" data-aos-duration="2000" className="text-center text-4xl font-semibold cormorant">A LITTLE NOTE ON GIFT</h3>
        <p data-aos="fade-right" data-aos-duration="2500" className="mt-6 text-lg text-center md:w-6/12 mx-auto cormorant">
        We are incredibly grateful to have you as part of our lives and to share in the joy of our wedding day. Your presence means the world to us and is the greatest gift of all. However, if you wish to honor us with a gift, a monetary gift would help make our special day.
        </p>

        <div className="flex md:flex-row flex-col  justify-center items-center xl:gap-10 gap-4">

        <div data-aos="fade-up" data-aos-duration="2500" className='flex flex-col flex-wrap gap-5 transition-all duration-250 hover:bg-black cursor-pointer hover:text-white border md:mt-14 mt-4 items-center shadow-xl p-7 px-8 rounded-md'>
               <p className='font-semibold'>YOMA BANK </p>
               {/* <p className=" hidden lg:block"> - </p> */}
               <p className='text-center'>001711170036449</p>
            </div>

        <div data-aos="fade-up" data-aos-duration="2000" className='flex flex-col flex-wrap gap-5 transition-all duration-250 hover:bg-black cursor-pointer hover:text-white border md:mt-7 mt-4 items-center shadow-xl p-7 px-8 rounded-md'>
               <p className='font-semibold'>KBZ PAY </p>
                {/* <p className=" hidden lg:block"> - </p> */}
                  <p className='text-center'>09-968617753, 09-799599207</p>

            </div>


            <div  data-aos="fade-up" data-aos-duration="3000" className='flex flex-col flex-wrap gap-5 transition-all duration-250 hover:bg-black cursor-pointer hover:text-white border md:mt-14 mt-4 items-center shadow-xl p-7 px-8 rounded-md'>
               <p className='font-semibold'>KBZ BANK </p>
               {/* <p className=" hidden lg:block"> - </p> */}
               <p className='text-center'>30130199922528501</p>
            </div>


        </div>
    </div>
  )
}

export default Gift