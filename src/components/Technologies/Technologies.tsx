import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion, Variants } from "framer-motion";

import { SiVuedotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiBootstrapLine } from "react-icons/ri";
import { RiFlutterFill } from "react-icons/ri";
import { RiJavaFill } from "react-icons/ri";
import { SiCsharp } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { BiLogoAws } from "react-icons/bi";
import { SiMicrosoftazure } from "react-icons/si";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { SiPython } from "react-icons/si";

import { SiProxmox } from "react-icons/si";
import { SiUnity } from "react-icons/si";
import { SiNuxtdotjs } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { TfiWordpress } from "react-icons/tfi";

import { FcDebian } from "react-icons/fc";
import { FcLinux } from "react-icons/fc";
import { SiArchlinux } from "react-icons/si";
import { BsWindows } from "react-icons/bs";
import { SiMacos } from "react-icons/si";

import "./Technologies.css";

const getRandomDuration = () => Math.random() * 3 + 2; // between 2 and 5 seconds

const iconVariants: (duration: number) => Variants = (duration) => ({
  initial: { y: -10, rotation: 0.06 },
  animate: {
    y: [10, -10],
    rotation: -0.06,
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologien
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* ReactJS */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <RiReactjsLine className="text-7xl text-cyan-400 group-hover:text-cyan-300" />
          <span className="tooltip">ReactJS</span>
        </motion.div>

        {/* VueJS */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <SiVuedotjs className="text-7xl text-green-500 group-hover:text-green-400" />
          <span className="tooltip">VueJS</span>
        </motion.div>

        {/* TypeScript */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <SiTypescript className="text-7xl text-[#3178C6] group-hover:text-[#559ddf]" />
          <span className="tooltip">VueJS</span>
        </motion.div>

        {/* Tailwind */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <RiTailwindCssFill className="text-7xl text-teal-400 group-hover:text-teal-300" />
          <span className="tooltip">Tailwind</span>
        </motion.div>

        {/* Bootstrap */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <RiBootstrapLine className="text-7xl text-purple-600 group-hover:text-purple-500" />
          <span className="tooltip">Bootstrap</span>
        </motion.div>

        {/* Flutter */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <RiFlutterFill className="text-7xl text-sky-400 group-hover:text-sky-300" />
          <span className="tooltip">Flutter</span>
        </motion.div>

        {/* WordPress */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <TfiWordpress className="text-7xl text-blue-600 group-hover:text-blue-500" />
          <span className="tooltip">WordPress</span>
        </motion.div>

        <div className="my-12 h-1 w-3/4 border-b border-neutral-800"></div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Node.js */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <FaNodeJs className="text-7xl text-green-400 group-hover:text-green-300" />
          <span className="tooltip">Node.js</span>
        </motion.div>

        {/* Nuxt.js */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <SiNuxtdotjs className="text-7xl text-green-600 group-hover:text-green-500" />
          <span className="tooltip">Nuxt.js</span>
        </motion.div>

        {/* PostgreSQL */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <BiLogoPostgresql className="text-7xl text-blue-500 group-hover:text-blue-400" />
          <span className="tooltip">PostgreSQL</span>
        </motion.div>

        {/* GraphQL */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <SiGraphql className="text-7xl text-pink-500 group-hover:text-pink-400" />
          <span className="tooltip">GraphQL</span>
        </motion.div>

        {/* C# */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <SiCsharp className="text-7xl text-purple-700 group-hover:text-purple-600" />
          <span className="tooltip">C#</span>
        </motion.div>

        {/* Unity */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <SiUnity className="text-7xl text-gray-600 group-hover:text-gray-500" />
          <span className="tooltip">Unity</span>
        </motion.div>

        {/* Java */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <RiJavaFill className="text-7xl text-red-600 group-hover:text-red-500" />
          <span className="tooltip">Java</span>
        </motion.div>

        {/* Python */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <SiPython className="text-7xl text-yellow-400 group-hover:text-yellow-300" />
          <span className="tooltip">Python</span>
        </motion.div>

        <div className="my-12 h-1 w-3/4 border-b border-neutral-800"></div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <FcLinux className="text-7xl" />
          <span className="tooltip">Linux</span>
        </motion.div>

        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <FcDebian className="text-7xl" />
          <span className="tooltip">Debian</span>
        </motion.div>

        {/* Docker */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <SiDocker className="text-7xl text-sky-500 group-hover:text-sky-400" />
          <span className="tooltip">Docker</span>
        </motion.div>

        {/* Proxmox */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <SiProxmox className="text-7xl text-orange-500 group-hover:text-orange-400" />
          <span className="tooltip">Proxmox</span>
        </motion.div>

        {/* Google Cloud Platform*/}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <DiGoogleCloudPlatform className="text-7xl text-[#fbbf11] group-hover:text-[#fbbf11]" />
          <span className="tooltip">Google Cloud Platform</span>
        </motion.div>

        {/* AWS */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <BiLogoAws className="text-7xl text-orange-600 group-hover:text-orange-500" />
          <span className="tooltip">AWS</span>
        </motion.div>

        {/* Azure */}
        <motion.div
          variants={iconVariants(getRandomDuration())}
          initial="initial"
          animate="animate"
          className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-neutral-700"
        >
          <SiMicrosoftazure className="text-7xl text-blue-600 group-hover:text-blue-500" />
          <span className="tooltip">Azure</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
