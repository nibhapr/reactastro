
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { fadeIn } from '../Functions/GlobalAnimations' 
import Buttons from '../components/Button/Buttons'
const MarketingComponents = () => {
    return (
<motion.section className="overflow-visible p-0 relative" {...fadeIn}>
<Container fluid>
    <Row>
        <div className="left-0 top-0 absolute z-[1] p-0 w-[auto] -translate-y-1/2 lg:w-[250px] -translate-x-1/2 sm:hidden">
            <img width={400} height={400} alt="top" src="/assets/img/home1.webp" />
        </div>
        <Col xl={7} lg={6} className="cover-background" style={{ backgroundImage: `url('/assets/img/home.webp')` }}></Col>
        <Col  className="bg-darkgray py-40 px-[9%] xl:p-[6%] lg:p-[6%] md:p-[10%] sm:py-[15%] sm:px-[10%]">
            <motion.span {...fadeIn} className="font-serif font-medium text-[#e6994e] tracking-[2px] uppercase block mb-[35px]">Let's work together</motion.span>
            <motion.h2 {...{ ...fadeIn, transition: { delay: 0.4 } }} className="heading-4 font-serif font-semibold text-white -tracking-[.5px] mb-12 w-[90%] sm:w-full">Digital technology and marketing for leading brands</motion.h2>
            <motion.p {...{ ...fadeIn, transition: { delay: 0.6 } }} className="text-lg leading-[38px] mb-[42px] w-[90%] lg:w-full md:w-[80%] sm:w-full md:text-xmd">Lorem ipsum dolor amet consectetur nostrud eiusmod tempor incididunt et dolore enim minim veniam nostrud exercitation laboris nisi ut aliquip ex ea commodo incididunt.</motion.p>
            <motion.div {...{ ...fadeIn, transition: { delay: 0.8 } }}><Buttons ariaLabel="link for conatct modern page" to="/page/contact-modern" className="font-medium font-serif uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-white hover:text-white tracking-[1px]" size="xl" color="#fff" title="Start new projects" /></motion.div>
        </Col>
    </Row>
</Container>
</motion.section>
 )}

 export default MarketingComponents 