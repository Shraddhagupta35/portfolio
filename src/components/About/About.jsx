import ReactTypingEffect from "react-typing-effect"
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/shru.png'


const About = () => {
  return (

    <section
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* Left Side  */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Greeting  */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi!, I am
          </h1>
          {/* Name  */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>Shraddha Gupta</h2>
          {/* Skills heading with typing effect  */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white'>
              I am a </span>
            <ReactTypingEffect
              text={[
                'Frontend Developer',
                'Java Developer',
                'Node.js Developer',
                'Coder'
              ]}

              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            ></ReactTypingEffect>
          </h3>

          {/* About me Pragraph  */}

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am Flexible developer with experience in Frontend and Java
            programming, skilled in creating scalable, user-focused application
            with strong problem-solving abilities and clean code practice.
            Adaptable team player with a continuous learning mindset,
            thriving in fast-paced and collaborative environment.
          </p>

          {/* Resume Button  */}
          <a
            href='https://drive.google.com/file/d/1dfV8FtvvpH7opC5X7dadLsM8ODhd6jyy/view?usp=drivesdk'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side  */}

        <div className="md:w-1/2 flex justify-center md:justify-end">
        <Tilt 
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1.051}
        transitionSpeed={1000}
        gyroscope={true}
        >
          <img 
         src={profileImage}
         alt="shraddha"
         className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130, 69, 236, 0.5)]"
        />
        </Tilt>
        </div>
      </div>

    </section>
  )
}

export default About
