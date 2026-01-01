import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import Link from 'next/link';


const Projects = () => {
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.7}}
    id='projects' className= 'w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4
        initial={{y:-20, opacity: 0}}
        whileInView={{y:0,opacity: 1}}
        transition={{delay:0.3 ,duration: 0.3}}
        className='text-center mb-2 text-lg '>Projects I've Worked On</motion.h4>
        <motion.h2 
        initial={{y:-20, opacity: 0}}
        whileInView={{y:0,opacity: 1}}
        transition={{delay:0.1 ,duration: 0.6}}
        className='text-center text-5xl '>My Projects</motion.h2>

        <motion.p
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay:0.5 ,duration: 0.3}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12'>
            Over the years, i have completed multiple school projects, personal projects for hackathons and also projects for workplaces I have interned with. 
        </motion.p>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay:0.6 ,duration: 0.4}}
        className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10   '>
            {serviceData.map(({icon,title,description,link}, index)=>(

                <motion.div
                whileHover={{scale:1.05}}
                key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:-translate-y-1 duration-500 cursor-pointer hover:shadow-md hover:shadow-black hover:bg-lightHover dark:hover:bg-gray-800 dark:hover:shadow-white'>
                    <Image src ={icon} alt='' className='w-30 rounded-lg' />
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                        {description}
                    </p>
                    <Link href={link} className='flex items-center text-green-800 gap-2 text-sm mt-5'>
                        Read more <Image src={assets.right_arrow} alt='' className='w-4' />
                    </Link>


                    </motion.div>
            ))}

        </motion.div>
      
    </motion.div>
  )
}

export default Projects
