import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";

import mamgo from "../assets/images/mamgo.jpg";
import clocker from "../assets/images/clocker.png";
import cubegame from "../assets/images/cubegame.png";
import docker from "../assets/images/docker.png";
import orangefox from "../assets/images/orangefox.png";
import f21 from "../assets/images/f21.png";
import evolutionx from "../assets/images/evolutionx.png";
import ubports from "../assets/images/ubports.jpg";
import growpony from "../assets/images/growpony.jpg";
import portfolio from "../assets/images/portfolio.png";
import parachute from "../assets/images/parachute.png";

export const PROJECTS = [
  {
    title: "Job Landing Page",
    company: " - Mamgo",
    image: mamgo,
    description:
      "Die veraltete Angular Landing Page wurde mit einem neuen Design und API-Requests realisiert. Verwendete Technologien: Vue.js, Angular, TypeScript, TailwindCSS und Rest API.",
    technologies: ["Vue.js", "Rest API", "BootstrapCSS"],
  },
  {
    title: "Time / Mood Tracker",
    company: " - Growpony",
    image: growpony,
    description:
      "Eine Applikation, um Tasks, Arbeitszeit und die Stimmung dabei zu tracken und auszuwerten. Entwickelt mit Nuxt.js, GraphQL und TailwindCSS.",
    technologies: ["Nuxt.js", "GraphQL", "TailwindCSS"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "Diese Webseite. Ein Ort, um meine Projekte zu präsentieren und über mich zu informieren. Entwickelt mit React, TypeScript, TailwindCSS und Framer Motion.",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Docker",
    ],
  },
  {
    title: "Cube Platformer",
    image: cubegame,
    description:
      "Ein simples 2.5D Platformer Spiel. Ziel ist es, den Würfel durch die Level zu steuern und dabei Punkte zu sammeln. Das Spiel wurde mit Unity und C# entwickelt.",
    technologies: ["Unity", "C#"],
  },
  {
    title: "Dockerized Server",
    image: docker,
    description:
      "Der VPS auf dem unter anderem diese Webseite gehostet ist. Weitere Container sind beispielsweise Nextcloud, NGINX, SwingMusic, PiHole, Whoogle etc.",
    technologies: ["Docker", "Nginx", "mySQL", "Debian", "SSH"],
  },
  {
    title: "Parachute Arch Linux Port",
    image: parachute,
    description:
      "Das Kwin Plugin Parachute wurde zu Arch Linux portiert und mit der aktuellen KDE Plasma Version kompatibel gemacht.",
    technologies: ["Arch Linux", "KDE Plasma", "Kwin"],
  },
  {
    title: "TT9 Keyboard Qin F21Pro",
    image: f21,
    description:
      "Ein bestehendes T9 Keyboard Projekt wurde für das Qin F21Pro Dumbphone angepasst und mit einem Englischen, sowie Deutschen Wörterbuch erweitert. Das veraltete Design, sowie die Eingabe über die Hardwaretasten wurde überarbeitet.",
    technologies: ["Android Studio", "Kotlin", "Java", "ADB", "Fastboot"],
    url: "https://git.baui.dev/tt9",
  },
  {
    title: "UBTouch Port",
    image: ubports,
    description:
      "Port von Ubuntu Touch für das Xiaomi Mi Mix3. Für das Projekt wurde ein Build Enviroment mit Docker erstellt.",
    technologies: ["Docker", "Git", "ADB", "Fastboot"],
  },
  {
    title: "OrangeFox Recovery Port",
    image: orangefox,
    description:
      "Port von der OrangeFox Recovery für das Xiaomi Mi Mix3. Für das Projekt wurde ein Build Enviroment mit Docker erstellt.",
    technologies: ["Docker", "Git", "ADB", "Fastboot"],
  },
  {
    title: "Evolutions X Port",
    image: evolutionx,
    description:
      "Port der Evolution X Custom Rom für das Xiaomi Mi Mix3. Für das Projekt wurde ein Build Enviroment mit Docker erstellt.",
    technologies: ["Docker", "Git", "ADB", "Fastboot"],
  },
];
