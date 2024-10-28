import StoryImage from "@/assets/images/story.jpg";
import { motion } from "framer-motion";
import { SelectedPage } from "@/types";

type propsType = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Story = ({ setSelectedPage }: propsType) => {
  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Story)}
      id="story"
    >
      <div className="mt-8 xl:w-9/12 sm:w-11/12 sm:px-0 px-3 mx-auto">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-center text-5xl font-light tracking-widest mb-2 parisienne"
        >
          Our Story
        </h1>
        <div className="md:w-3/12 w-6/12 mx-auto mt-8 flex justify-center items-center gap-8">
          <div className="p-[1px] w-full bg-black opacity-40" />
          <div className="text-xl">&#128420;</div>
          <div className="p-[1px] w-full bg-black opacity-40" />
        </div>

        <p
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          className="mt-10 text-center cormorant text-lg font-semibold"
        >
          We first met on a TU Hmawbi ferry in December 2011. I was immediately
          drawn to her and eagerly looked forward to seeing her whenever we
          waited at the ferry. I didn't take too long to confess my feelings to
          her, but she asked for nearly a month to think it over. On January
          11th, 2012, we officially became a couple. After over 12 years of
          building a relationship based on mutual understanding, I proposed to
          her on June 16th 2024 in the presence of family and friends. We
          decided to marry on November 10th 2024, and we’ve worked hard together
          to reach this special moment.
        </p>

        <div className=" w-full mt-12 flex md:flex-row flex-col gap-9 items-center">
          <div className="lg:w-5/12 h-[80vh] border border-gray-400 p-5 ">
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src={StoryImage}
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" text-center mx-auto h-full">
            <h4
              data-aos="fade-down"
              data-aos-duration="500"
              className="text-3xl cormorant "
            >
              JOIN US TO CELEBRATE
            </h4>
            <h4
              data-aos="fade-down"
              data-aos-duration="1000"
              className="text-3xl cormorant "
            >
              THE WEDDING DAY OF
            </h4>

            <div className="mt-8">
              <p
                data-aos="fade-down"
                data-aos-duration="1500"
                className="text-6xl parisienne"
              >
                Aung & Yu Ya
              </p>
            </div>

            <div
              className="mt-14"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <p className="text-2xl cormorant">WHICH IS CELEBRATION ON</p>
              <p className="text-4xl cormorant font-semibold">
                NOV | 10 | 2024
              </p>
            </div>

            <div
              className="mt-14"
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              <p className="text-2xl cormorant">STARTING AT 9:00</p>
              <p className="text-2xl cormorant">IN THE MORNING</p>
            </div>

            <div
              className="mt-14"
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <p className="text-2xl cormorant">Nyaung Kan Aye TharThaNa YeikThar</p>
              <p className="text-2xl cormorant">Yangon</p>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </motion.div>
  );
};

export default Story;
