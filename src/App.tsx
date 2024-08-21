//@ts-ignore
import {Navbar, Geometry, Hero, About, Projects} from "./components";

const App = () => {

  return (
    <div>
      <Navbar />
      <Geometry />
      <div className="px-10 md:px-20 xl:px-40">
        <Hero />
        <About />
      </div>
      <Projects />
    </div>
  )
}

export default App
