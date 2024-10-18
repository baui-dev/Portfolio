import { HERO_TEXT } from "../../constants/MiscText";
import profilePic from "../../assets/images/about4.jpg";
import { motion } from "framer-motion";
import ThreeScene from "../3DObject/3DObject";

const container = (delay: any) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-15">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className=" font-thin tracking-tight  text-[5rem]"
            >
              Nico
            </motion.h1>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-neutral-500 font-thin tracking-tight text-[5rem]"
            >
              Bauknecht
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6"
            >
              {HERO_TEXT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-end ">
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="rounded-lg "
              style={{ height: "500px", zIndex: -10 }}
            >
              <ThreeScene />
            </motion.div>
          </div>
          <div className="h-40"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
