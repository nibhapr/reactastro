import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { fadeIn } from '../Functions/GlobalAnimations';
import { motion } from 'framer-motion'
import Atropos from "atropos/react";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import ProcessStep from '../components/ProcessStep/ProcessStep';
import Services from '../components/Services/Services'
import Buttons from '../components/Button/Buttons'




const serviceData = [
  {
    img: "/assets/img/Image_4.png",
    icon: "ti-arrow-right",
    title: "LED & Digital Signs",
    content: "Modern, energy-efficient, and eye-catching, our LED and digital signage solutions are perfect for businesses that want to stay ahead of the curve..",
    linkTitle: "More info",
    link: "/page/what-we-offer"
  },
  {
    img: "/assets/img/Image_5.png",
    icon: "ti-arrow-right",
    title: "Wayfinding and Directional Signs",
    content: " Clear and effective wayfinding signage ensures your visitors can easily navigate your premises, making a positive impression",
    linkTitle: "More info",
    link: "/page/what-we-offer"
  },
  {
    img: "/assets/img/Image_6.png",
    icon: "ti-arrow-right",
    title: "Architectural Signage",
    content: "Enhance the aesthetic of your building with elegant, functional signage that complements your space and enhances its appearance.",
    linkTitle: "More info",
    link: "/page/what-we-offer"
  }
]

const ProcessStepData = [
  {
    title: "Initial Consultation",
    content: "",
  },
  {
    title: "Site Survey & Assessment",
    content: "",
  },
  {
    title: "Design & Concept Development",
    content: "",
  },
 
]

const OurStoryPage = (props) => {
  return (
    <div className="our-story-page" style={props.style}>
      <div className="pt-[130px]  lg:pt-[95px] lg:pb-[600px] md:pt-[70px] md:pb-[400px] sm:pt-[50px] sm:py-[70px] overflow-hidden relative">
     
          <section className=" bg-gradient-to-tr from-[#556fff] via-[#e05fc4] to-[#f767a6]">
        <Container className="md:mb-[150px] sm:mb-[200] ">
          <Row className="justify-center">
          
              <Col className="col-12 col-md-12 z-0 p-[0px] lg:p-[15px] md:p-[0px] text-center">
                <span className="mb-[-60px] relative uppercase text-[11rem] leading-[11rem] md:text-[9rem] sm:hidden font-serif text-center none md:block font-bold opacity-70 -z-[1]">our story</span>
                <Atropos
                  highlight={false}
                  stretchX={0}
                  stretchY={0}
                  rotateTouch={false}
                  className={`my-atropos -top-[0%]  w-full`}
                >
                  <img loading="lazy" src="/assets/bond.jpg" className="relative z-10 rounded-[6px]" alt="" data-no-retina="" />
                </Atropos>
              </Col>
            
          </Row>
        </Container>
        <Container>
          <Row className="justify-center">
        
             <row md={12}  sm={12}> 
              <ProcessStep theme="process-step-style-05 md:px-0 sm:mb-8" className="our-story-process-step-style overflow-hidden sm:inline-block text-center text-[#fff]" data={ProcessStepData} animation={fadeIn} />
            </row> 
           
          </Row>
        </Container>
      </section>
      </div>
     
      <section className="py-[130px] lg:py-[95px] md:py-[70px] sm:py-[50px] relative overflow-visible">
        <Container>
          <Row className="items-center">
            <motion.div className="col-lg-6 relative mt-[70px] lg:mt-[30px] md:mb-[50px]" {...fadeIn}>
              <div className="relative">
                <ParallaxProvider>
                  <Parallax className="lg-no-parallax w-[70%] rounded-[6px] lg:relative lg:!top-[-20px]" speed={0}>
                    <div className="absolute top-0 left-0 w-full h-full rounded-[6px] opacity-50 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    <img loading="lazy" src="/assets/img/bond1.png" className="rounded-[6px] w-full" width="394.8" height="466.34" alt="our-process" />
                  </Parallax>
                </ParallaxProvider>
                <ParallaxProvider>
                  <Parallax className="lg-no-parallax flex rounded-[6px] justify-center items-center w-[70%] bg-no-repeat absolute bottom-0 right-[15px] lg:!top-[20px] lg:ml-auto" speed={20}>
                    <img loading="lazy" src="/assets/img/bond2.png" className="rounded-[6px]" width="394.8" height="466.34" alt="our-process" />
                  </Parallax>
                </ParallaxProvider>
              </div>
            </motion.div>
            <motion.div className="col-lg-5 offset-lg-1" {...{ ...fadeIn, transition: { delay: 0.5 } }}>
              <div className="font-serif text-xmd font-medium mb-[30px]">
                <span className="w-[50px] h-[1px] bg-fastblue inline-block align-middle mr-[20px]"></span>
                <span className="text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] inline-block">Looking for Digital Signage expertise?</span></div>
              <h5 className="font-serif text-darkgray font-medium mb-[30px] w-full">Welcome to Bond Sign – Your Premier Signage Company in Abu Dhabi</h5>
              <p className="w-[95%] mb-[35px]">At Bond Sign, we specialize in providing high-quality, custom signage solutions for businesses in Abu Dhabi and across the UAE. With years of experience in the industry, we are dedicated to delivering signs that elevate your brand, attract attention, and enhance visibility. Whether you need indoor, outdoor, or digital signage, we offer a wide range of products to meet your specific needs.</p>
              <div className="xs:flex">
                <Buttons to="/page/our-services/" className="mr-[20px] xs:mr-[10px] font-medium rounded-none font-serif uppercase hover:text-darkgray btn-slide-filling-right bg-gradient-to-r from-darkgray to-darkgray" size="md" color="#fff" themeColor="#fff" title="DISCOVER LITHO" />
                <Buttons to="/page/what-we-offer" className="font-medium rounded-none font-serif uppercase hover:text-white bg-transparent btn-slide-right" color="#232323" size="md" themeColor="#232323" title="READ MORE" />
              </div>
            </motion.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[130px] lg:py-[95px] md:py-[70px] sm:py-[50px]py-[130px] sm:py-[50px] bg-lightgray">
        <Container>
          <Row className="justify-center">
            <Col md={6} className="col-12 text-center mb-[4.5rem]">
              <span className="font-serif mb-[10px] block uppercase text-md font-medium">WHAT WE OFFER SERVICES</span>
              <h5 className="font-serif text-darkgray font-medium -tracking-[1px] mb-[15px]">LED & Digital Signs</h5>
            </Col>
          </Row>
          <Services grid="row-cols-1 row-cols-lg-3 row-cols-md-2 justify-center gap-y-10 sm:gap-y-[15px]" theme='service-style-02' className="" data={serviceData} animation={fadeIn} />
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <motion.section className="py-[8%] xs:py-[50px] relative bg-cover overflow-hidden bg-fixed bg-no-repeat bg-center lg:bg-local" style={{ backgroundImage: "url(/assets/img/bond.png)" }}>
        <div className="absolute h-full w-full opacity-75 top-0 left-0 bg-gradient-to-tr from-[#0039e3] via-[#5e28dd] to-[#8600d4]"></div>
        <Container>
          <Row className="row justify-center">
            <Col xl={7} lg={8} md={10} className="relative text-center">
              <h3 className="font-serif text-white font-semibold mb-[35px]">Design & Installation of Custom Signs in Abu Dhabi – Bond Sign</h3>
              <p className="text-white opacity-70 font-serif text-lg md:text-xmd md:leading-[22px] w-[80%] mx-auto leading-[32px] mb-[45px] sm:w-full">At Bond Sign, we specialize in providing custom signage solutions that elevate your brand presence. Whether you're looking for indoor or outdoor signage, we offer a wide range of options including LED, acrylic, and 3D signs, all designed to match your business's unique identity</p>
              <Buttons to="/page/contact-classic" className="btn-fill drop-shadow-md font-medium font-serif uppercase rounded-[50px] btn-shadow text-[15px] md:mb-[15px]" size="lg" themeColor="#fff" color="#000" title="Get Started Now" />
            </Col>
          </Row>
        </Container>
      </motion.section>
     
    </div>
  )
}

export default OurStoryPage