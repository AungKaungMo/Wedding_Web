
import { SelectedPage } from '@/types';
import Link from './Link'

type propsType = {
  selectedPage: SelectedPage;
  isTop: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Navbar = ({
  selectedPage,
  isTop,
  setSelectedPage,
}: propsType) => {

  const navItems: string[] = [
    "Home",
    "Story",
    "Gallery",
    "RSVP",
  ];

  return (
    <nav className={`bg-[#F4F2EE] text-primary p-4 cormorant  ${!isTop && 'fixed w-full z-40 p-8'}`}>
      <div className="sm:container sm:text-left text-center sm:mt-0 mt-3 mx-auto flex flex-col items-center">
        {isTop && <div className="text-5xl font-light tracking-widest mb-2 parisienne transition-all duration-150">
          Aung <span className="font-normal">&</span> Yu Ya
        </div>}
        {isTop && <div className="text-xl tracking-wider mb-4 transition-all duration-150 lucida">11.10.2024</div> }
 
        <div className={` list-none text-lg font-bold flex flex-row sm:space-x-8 space-x-4`}>
          {navItems.map((menu) => (
            <Link
                key={menu}
                page={menu}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
          ))}

        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#63472B] to-transparent opacity-30"></div>
    </nav>
  )
}
