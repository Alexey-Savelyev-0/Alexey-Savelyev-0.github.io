//@ts-ignore
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="drop-shadow-xl uppercase font-bold text-4xl md:text-5xl xl:text-6xl text-white mt-72">
        <p>
            Hi, I'm
        </p>
        <div className='text-rose-400 absolute'>
          <Typewriter
            options={{
              strings: ['ALEXEY SAVELYEV.', 'A CS UNDERGRAD.', 'A SOFTWARE DEVELOPER.'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
    </div>
  )
}

export default Hero