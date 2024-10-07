import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SelectedPage } from "@/types";
import HomeSlide from "@/components/HomeSlide";
import Story from "@/components/Story";
import Countdown from "@/components/Countdown";
import Info from "@/components/Info";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Gift from "@/components/Gift";
import Footer from "@/components/Footer";

const Landing = () => {

    const [isTop, setIsTop] = useState<boolean>(false);
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
      SelectedPage.Home
    );
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY == 0) {
          setIsTop(true);
          setSelectedPage(SelectedPage.Home);
        }
  
        if (window.scrollY != 0) setIsTop(false);
      };
  
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }); 

  return (
    <>
        <Navbar isTop={isTop} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <HomeSlide setSelectedPage={setSelectedPage}/>
        <Story setSelectedPage={setSelectedPage}/>
        <Countdown />
        <Info />
        <Gallery setSelectedPage={setSelectedPage}/>
        <RSVP setSelectedPage={setSelectedPage}/>
        <Gift />
        <Footer />
    </>
  )
}

export default Landing