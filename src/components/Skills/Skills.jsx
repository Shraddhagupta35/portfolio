import React from 'react'
import { SkillsInfo } from "../../constants"
import Tilt from 'react-parallax-tilt';

const Skills = () => {
    return (
        <section
            id='skills'
            className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom'
        >

            {/* Section Title  */}

            <div className='text-center mb-8'>
                <h2 className='text-3xl sm:text-4xl font-bold text-white'>SKILLS</h2>
                <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'>
                </div>
                <p className='text-gray-400 mt-4 text-lg font-semibold'>A collection of my technical skills ans experties honed through various and experiences</p>
            </div>

            {/* Skill Category  */}

            <div className='flex flex-wrap gap-1 lg:gap-5 py-10 justify-between'>
                {SkillsInfo.map((category) => (
                    <div
                        key={category.title}
                        className='bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-full lg:w-[48%] rounded-2xl border-white
  shadow-[0_0_20px_1px_rgba(130, 69, 236, 0.3)]'
                    >

                        <h3 className='text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center'>
                            {category.title}
                        </h3>

                        {/* Skills items  - 3 per on larger screen*/}

                        <Tilt
                            key={category.title}
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={1000}
                            scale={1.051}
                            transitionSpeed={1000}
                            gyroscope={true}
                        >
                            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 w-full'>
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 text-center'
                                    >
                                        <img
                                            src={skill.logo}
                                            alt={`${skill.name} logo`}
                                            className='w-8 h-8'
                                        />
                                        <span className='text-xs sm:text-sm text-gray-300'>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </Tilt>

                    </div>
                ))}
            </div>

        </section>
    )
}

export default Skills