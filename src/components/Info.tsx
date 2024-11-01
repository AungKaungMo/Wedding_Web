import Groom from '@/assets/images/groom.jpg';
import Bride from '@/assets/images/bride.jpg';
import MiddleImg from '@/assets/images/groomandbride.jpg'

const Info = () => {
  return (
    <div className="mt-14 xl:w-9/12 w-11/12 mx-auto ">
    <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-center text-5xl font-light tracking-widest mb-2 parisienne">
        Groom & Bride
    </h1>
    <div className="md:w-3/12 w-6/12 mx-auto mt-8 flex justify-center items-center gap-8">
        <div className="p-[1px] w-full bg-black opacity-40" />
        <div className="text-xl">&#128420;</div>
        <div className="p-[1px] w-full bg-black opacity-40" />
    </div>

    <div className="mt-16 flex lg:flex-row flex-col  items-center gap-8">
        <div className="p-6 w-full flex-col flex items-center rounded-md shadow-lg bg-gray-100">
            <div className='w-36 h-36 border-4 border-white rounded-full overflow-hidden'>
                <img data-aos="zoom-in" data-aos-duration="1000" src={Groom} className='' />
            </div>

            <p className='text-3xl mt-2 parisienne text-center' data-aos="fade-down" data-aos-duration="800">Aung Myint Kyaw</p>
            <p className='cormorant text-xl' data-aos="fade-down" data-aos-duration="1000">Groom</p>
            <p className='cormorant text-lg mt-3 font-semibold text-center' data-aos="fade-down" data-aos-duration="1300">
            Man of my life, Spirit & All of Yuya
            </p>
        </div>

        <div className='border lg:h-[65vh] lg:block hidden w-full border-gray-400 p-5'>
            <img data-aos="flip-left" data-aos-duration="1000" src={MiddleImg} className='w-full h-full object-cover' />
        </div>

        <div className="p-6 w-full flex-col flex items-center rounded-md shadow-lg bg-gray-100">
            <div className='w-36 h-36 border-4 border-white rounded-full overflow-hidden'>
                <img data-aos="zoom-in" data-aos-duration="1000" src={Bride} className='w-full h-full object-cover' />
            </div>

            <p className='text-3xl mt-2 parisienne' data-aos="fade-down" data-aos-duration="800">Yu Ya Htwe</p>
            <p className='cormorant text-xl' data-aos="fade-down" data-aos-duration="1000">Bride</p>

            <p data-aos="fade-down" data-aos-duration="1300" className='cormorant text-lg mt-3 font-semibold text-center'>
            Heart, Breath & Last moments of Aung
            </p>
        </div>
    </div>
    </div>
  )
}

export default Info