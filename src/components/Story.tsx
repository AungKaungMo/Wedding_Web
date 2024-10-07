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
          On my last shift as a lighthouse keeper, I climbed the seventy-six
          spiral iron stairs and two ladders to the watch room, the number of
          steps the same as my age. The thwomp and snare of each step laid an
          ominous background score. Something wasn’t right. At that very moment,
          Richie Tedesco was pointing a fire extinguisher at the burning
          electrical panel in the engine room of his boat a few miles offshore.
          The placard in the watch room read “Marge Mabrity, Lightkeeper—First
          lighted the depths on March 2nd, 1985, and hasn’t missed a night.”
          Already so close to forty years. I could still read the skies like a
          book. The lighthouse smelled of aging wood, dried-out moss, and the
          bitter acid spritz of corrosion. But out on the gallery deck, leaning
          against the handrails, there was the unmistakable scent of petrichor.
          The clouds in the distance grew taller, black shading growing across
          their swelling bellies, with the storm caps flattening under the
          weight of the system. I tasted the metallic hint of ozone on my
          tongue. I felt the intensity of the pressure in my ears and on my
          forehead. I know what you are thinking. Why had I even done it? For
          all those years. I guess finding lost things was always the one thing
          about me that was uniquely my own. And I didn’t know if I could give
          it up.{" "}
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
                DEC | 25 | 2024
              </p>
            </div>

            <div
              className="mt-14"
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              <p className="text-2xl cormorant">STARTING AT 3:00</p>
              <p className="text-2xl cormorant">IN THE AFTERNOON</p>
            </div>

            <div
              className="mt-14"
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <p className="text-2xl cormorant">SAINT THOMAS CHURCH</p>
              <p className="text-2xl cormorant">SEOUL</p>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </motion.div>
  );
};

export default Story;
