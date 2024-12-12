import React from 'react'
import {Container,Row } from 'react-bootstrap'
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from 'framer-motion'
import { fadeIn, fadeInRight} from '../Functions/GlobalAnimations';

const HeroComponents = () => {
  return (

 <section className="py-[80px] overflow-visible bg-[#969896] pb-0 relative md:py-[40px]">
 <Container>
   <Row className="items-center justify-center">
     <div className="relative bottom-[-50px] z-[1] col-lg-6 col-md-10">
      <ParallaxProvider>
       <Parallax className="lg-no-parallax flex justify-center h-full items-center w-full bg-no-repeat absolute bottom-0 right-[-20px] xs:right-0 lg:!top-[30px]" speed={20}>
         <motion.div className="marketing-agency-parallx" {...{ ...fadeInRight, transition: { duration: 0.8 } }}>
           <span className="text-overlap-style-04 font-serif font-semibold -tracking-[3px] xs:text-[55px]">BOND SIGN</span>
         </motion.div>
       </Parallax>
       </ParallaxProvider>
       <ParallaxProvider>
       <Parallax speed={0}>
         <motion.img className="lg:w-[80%]" width={444} height={642} src="/assets/bond5.webp" alt="" {...{ ...fadeInRight, transition: { ease: [0.25, 1, 0.5, 1], duration: 1 } }} />
       </Parallax>
       </ParallaxProvider>
     </div>
     <motion.div className="mb-[80px] xs:mb-20 md:mt-[100px] col-xl-4 col-lg-5 col-md-10 offset-xl-1" {...fadeIn}>
       <h2 className="heading-5 font-medium font-serif text-white">Bond Sign provide <span className="font-semibold">Custom Signage</span> for business</h2>
       <p className="text-[#fff] text-xmd leading-[32px] w-[95%] mb-[25px] opacity-60">Enhance your business visibility with Bond Signage services in Abudhabi. We specialize in indoor and outdoor signage, ensuring your message reaches your audience in style.</p>
       <a to="/page/about-us" className="mt-[15px] text-[#fff] text-xmd font-serif hover:text-[#fff]">More about us
         <i className="line-icon-Arrow-OutRight text-[40px] inline-block ml-[15px] align-middle"></i>
       </a>
     </motion.div>
   </Row>
 </Container>
</section>

)}

export default HeroComponents