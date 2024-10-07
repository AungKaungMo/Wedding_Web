import Gallery1 from "@/assets/images/gallery1.jpg";
import Gallery4 from "@/assets/images/gallery4.jpg";
import Gallery5 from "@/assets/images/gallery5.jpg";
import Gallery6 from "@/assets/images/gallery6.jpg";
import Gallery2 from "@/assets/images/gallery2.jpg";
import Gallery7 from "@/assets/images/gallery7.jpg";
import Gallery12 from "@/assets/images/gallery12.jpg";
import Gallery8 from "@/assets/images/gallery8.jpg";
import Gallery3 from "@/assets/images/gallery3.jpg";
import Gallery14 from "@/assets/images/wedding-2.jpg";
import Gallery9 from "@/assets/images/gallery9.jpg";
import Gallery10 from "@/assets/images/gallery10.jpg";
import Gallery11 from "@/assets/images/gallery11.jpg";
import Gallery13 from "@/assets/images/gallery13.jpg";
import { motion } from 'framer-motion';
import { SelectedPage } from "@/types";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";

const images = [
  Gallery1,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery2,
  Gallery7,
  Gallery12,
  Gallery8,
  Gallery3,
  Gallery14,
  Gallery9,
  Gallery10,
  Gallery11,
  Gallery13,
];

function useKeyPress(targetKey: string, handler: () => void) {
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        handler();
      }
    };
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, [targetKey, handler]);
}

type propsType = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Gallery = ({ setSelectedPage }: propsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openDialog = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeDialog = () => setIsOpen(false);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  }, []);

  useKeyPress("ArrowLeft", goToPrevious);
  useKeyPress("ArrowRight", goToNext);

  return (
    <motion.div className="py-16 px-4 sm:px-6 lg:px-8"      
      onViewportEnter={() => setSelectedPage(SelectedPage.Gallery)}
      id='gallery'
    >
      <div className="xl:w-9/12 w-11/12 mx-auto">
        <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-center text-4xl sm:text-5xl font-light tracking-widest mb-2 parisienne">
          Our Gallery
        </h1>

        <div className="md:w-3/12 w-6/12 mx-auto mt-8 flex justify-center items-center gap-8">
          <div className="p-[1px] w-full bg-black opacity-40" />
          <div className="text-xl">&#128420;</div>
          <div className="p-[1px] w-full bg-black opacity-40" />
        </div>

        <div className="columns-1 mt-12 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-8">
          {images.map((image, index) => (
            <div data-aos="fade-down" data-aos-duration={index *500} key={index} className="relative group overflow-hidden">
              <img
                src={image}
                alt={`Wedding photo ${index + 1}`}
                className="hover:bg-gray-950 cursor-pointer transition-transform duration-300 group-hover:scale-110 "
                onClick={() => openDialog(index)}
              />
              <div
                className="absolute inset-0 cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={() => openDialog(index)}
              />{" "}
            </div>
          ))}

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTitle className="hidden"></DialogTitle>
            <DialogContent
              className=" [&>button]:hidden "
              aria-describedby="image"
            >
              <div className="relative ">
                <img
                  src={images[currentIndex]}
                  alt={`Image ${currentIndex + 1}`}
                  className=" "
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-2 right-2 border-none"
                  onClick={closeDialog}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 left-2 transform -translate-y-1/2"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next image</span>
                </Button>
              </div>
              <DialogDescription className="hidden"></DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </motion.div>
  );
}

export default Gallery;