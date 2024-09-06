import { motion } from "framer-motion";
import Card from "./Card";
import { FaJava, FaPython } from "react-icons/fa6";

const data: Array<Project> = [
    { title: "Propaganda Detection Tool", link: null, description: "Test", icons: [FaPython] },
    { title: "Outlier Detection Tool", link: null, description: "Test", icons: [FaJava] },
    { title: "Adveserial Connect 4 AI", link: null, description: "Test", icons: [FaJava] },
    { title: "Emulator", link: null, description: "Test", icons: [FaJava] },
    { title: "Project", link: null, description: "Test", icons: [FaJava] },
    { title: "Project", link: null, description: "Test", icons: [FaJava] },
    { title: "Project", link: null, description: "Test", icons: [FaJava] },
    { title: "Project", link: null, description: "Test", icons: [FaJava] },
];
  

const Projects = () => {
  return (
    <div id="about">
      <div className="lg:rounded-lg bg-stone-700 py-16 p-5 sm:p-10 md:p-20 max-w-[80rem] mx-auto mb-0 lg:mb-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }} 
          transition={{ duration: 0.5, easeOut: true }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true, amount: "all" }} 
        >
          <h6 className="uppercase text-white text-right font-bold text-xl md:text-2xl my-4">
            Projects
          </h6>
        </motion.div>
        <div className="mt-10 grid lg:grid-cols-3 gap-3">
        {data.map((project, index) => {
            const rowIndex = Math.floor(index / 2);
            const colIndex = index % 2; 

            let colSpan = 'col-span-1'; 
            if (rowIndex % 2 === 0 && colIndex === 0) {
              colSpan = 'lg:col-span-2'; 
            } else if (rowIndex % 2 !== 0 && colIndex === 1)  {
              colSpan = 'lg:col-span-2'; 
            }

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.75, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, easeOut: true }}
                viewport={{ once: true, amount: "some" }}
                className={colSpan}
              >
                <Card
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  icons={project.icons}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
