import "./Header.css";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { LINKS } from "../../constants/MiscText";
import { FaFileDownload } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-xl">
        <h1
          className="text-5xl"
          style={{ userSelect: "none", fontFamily: "myfont" }}
        >
          bAui.dev
        </h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a href={LINKS.github} target="_blank">
          <FaGithub />
        </a>

        <a
          className="border rounded border-white p-2"
          href="src/assets/Lebenslauf.pdf"
          download="Lebenslauf.pdf"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Header;
