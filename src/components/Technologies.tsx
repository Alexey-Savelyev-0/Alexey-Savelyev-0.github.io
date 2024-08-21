import { motion } from "framer-motion";
import {
  JavaLogo,
  PythonLogo,
  HaskellLogo,
  JavaScriptLogo,
  HTMLLogo,
  CSSLogo,
  PostgresLogo,
  CLogo
  // @ts-ignore
} from "../assets";

declare type TechData = {
  title: string,
  image: string,
  text: string
};

const images = [JavaLogo, PythonLogo, HaskellLogo, CLogo,
  JavaScriptLogo, HTMLLogo, CSSLogo, PostgresLogo];

const Technologies = () => {
  return (
    <div className="mt-[25rem] md:mt-[35rem]">
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.5, easeOut: true }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: "all" }}
      >
        <h6 className="uppercase text-right font-bold text-xl md:text-2xl my-4 text-stone-200">
          Languages & Technologies
        </h6>
      </motion.div>
      <hr className="border-2 border-stone-700"></hr>
      <div className="grid grid-cols-4 xl:grid-cols-8 mt-10 text-sm">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-2"
            initial={{ opacity: 0, scale: 0.75, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, easeOut: true }}
            viewport={{ once: true, amount: "some" }}
          >
            <img src={image} alt="" className="h-16 w-16 md:h-24 md:w-24" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Technologies