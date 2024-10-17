import { CONTACT_TEXT } from "../../constants/MiscText";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Kontakt
      </motion.h1>
      <div className="text-center tracking-tighter">
        <a href="mailto:nicolai@bauknecht.email" className="my-4">
          {CONTACT_TEXT.email}
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
