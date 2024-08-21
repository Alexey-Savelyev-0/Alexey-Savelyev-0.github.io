import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styles from "./Navbar.module.css";


const Navbar = () => {
  return (
    <div className="z-0 flex items-center justify-between text-white bg-transparent px-5">
        <h3 className="uppercase font-bold md:text-xl text-rose-800">
            Alexey Savelyev
        </h3>
        <div className="flex flex-row">
        <a
          href="https://uk.linkedin.com/in/alexsavel"
          rel="noopener noreferrer"
        >
          <div className={`${styles.icon}`}>
            <AiFillLinkedin size="40px" />
          </div>
        </a>
        <a href="https://github.com/Alexey-Savelyev-0" rel="noopener noreferrer">
          <div className={`${styles.icon}`}>
            <AiFillGithub size="40px" />
          </div>
        </a>
      </div>

    </div>
  )
}

export default Navbar