import React, { useRef } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import { AnimatePresence } from 'framer-motion';
import { Formik, Form } from 'formik';
import { motion } from "framer-motion";


import { Checkbox, Input, TextArea } from '../components/Form/Form'
import Buttons from '../components/Button/Buttons'
import { ContactFormStyle03Schema } from '../components/Form/FormSchema';
import MessageBox from '../components/MessageBox/MessageBox';
import Overlap from '../components/Overlap/Overlap';
import SocialIcons from '../components/SocialIcon/SocialIcons';

import { fadeIn } from '../Functions/GlobalAnimations'
import { resetForm, sendEmail } from '../Functions/Utilities';


// Data
const SocialIconsData = [
  {
    color: "#3b5998",
    link: "https://www.facebook.com/",
    icon: "fab fa-facebook-f"
  },
  {
    color: "#ea4c89",
    link: "https://dribbble.com/",
    icon: "fab fa-dribbble"
  },
  {
    color: "#00aced",
    link: "https://twitter.com/",
    icon: "fab fa-twitter"
  },
  {
    color: "#fe1f49",
    link: "https://www.instagram.com/",
    icon: "fab fa-instagram"
  }
]

const ContactUsSimplePage = (props) => {

  const form = useRef(null)

  return (
    <div style={props.style}>
   
   
     
      <section className="py-[180px] lg:py-[90px] md:py-[75px]  sm:py-[50px]">
        <Container>
          <Row className="row-cols-1 row-cols-lg-4 row-cols-sm-2 md:gap-y-[50px] sm:gap-y-[30px] text-center">
            <Col>
              <i className="line-icon-Geo2-Love text-gradient bg-fastblue text-[32px] mb-[30px] sm:mb-[10px] inline-block md:mb-[15px]"></i>
              <div className="text-darkgray uppercase text-sm font-medium font-serif mb-[10px]">BOND SIGN</div>
              <p className="w-[75%] lg:w-[90%] md:w-[60%] sm:w-[75%] xs:w-full mx-auto">M37,Musaffah- Abu Dhabi</p>
            </Col>
            <Col>
              <i className="line-icon-Headset text-gradient bg-fastblue text-[32px] mb-[30px] sm:mb-[10px] inline-block md:mb-[15px]"></i>
              <div className="text-darkgray uppercase text-sm font-medium font-serif mb-[10px]">Let's Talk</div>
              <p className="w-[70%] lg:w-full mx-auto">Phone: +971558952593</p>
            </Col>
            <Col>
              <i className="line-icon-Mail-Read text-gradient bg-fastblue text-[32px] mb-[30px] sm:mb-[10px] inline-block md:mb-[15px]"></i>
              <div className="text-darkgray uppercase text-sm font-medium font-serif mb-[10px]">E-MAIL US</div>
              <p className="w-[70%] lg:w-full mx-auto">
                <a aria-label="mail" href="mailto:info@yourdomain.com" className="hover:text-basecolor">info@bondsign.ae</a><br />
                
              </p>
            </Col>
            <Col>
              <i className="line-icon-Information text-gradient bg-fastblue text-[32px] mb-[30px] sm:mb-[10px] inline-block md:mb-[15px]"></i>
              <div className="text-darkgray uppercase text-sm font-medium font-serif mb-[10px]">CUSTOMER SERVICES</div>
              <p className="w-[70%] lg:w-full mx-auto">
                <a aria-label="mail" href="mailto:info@yourdomain.com" className="hover:text-basecolor">customer@bondsign.ae</a><br />
                
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    
     <section className="pt-[160px] pb-[250px] lg:pt-[120px] md:pt-[95px] md:pb-[220px] sm:py-[80px] xs:py-[50px] relative bg-cover overflow-hidden bg-center bg-no-repeat bg-fixed lg:bg-local" style={{ backgroundImage: `url(/assets/img/contact.webp)` }}>
        <div className="absolute h-full w-full opacity-80 top-0 left-0 bg-gradient-to-tr from-[#0039e3] via-[#5e28dd] to-[#8600d4]"></div>
       
        
      </section>
     
      <section className="bg-lightgray pb-[130px] lg:pb-[90px] md:pb-[75px] sm:py-[50px]">
        <Container>
          <motion.div  {...fadeIn}>
            <Overlap value={20} className="relative p-32 lg:p-[104px] md:p-[60px] sm:p-[55px] xs:px-[22px] xs:py-[44px] shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white">
              <Row className="justify-center" >
                <Col xl={6} lg={7} className="col-12 text-center mb-[4.5rem] md:mb-12">
                  <span className="font-serif mb-[5px] -tracking-[.5px] text-xmd block">Fill out the form and we'll be in touch soon!</span>
                  <h4 className="font-serif font-semibold text-darkgray">How we can help you?</h4>
                </Col>
                <Col className="col-12">
                  <Formik
                    initialValues={{ name: '', email: '', phone: '', comment: '', terms_condition: false }}
                    validationSchema={ContactFormStyle03Schema}
                    onSubmit={async (values, actions) => {
                      actions.setSubmitting(true)
                      const response = await sendEmail(values)
                      response.status === "success" && resetForm(actions)
                    }}
                  >
                    {({ isSubmitting, status }) => (
                      <Form ref={form}>
                        <Row className="row-cols-1 row-cols-md-2">
                          <Col className="mb-16 sm:mb-[25px]">
                            <Input showErrorMsg={false} type="text" name="name" className="py-[15px] px-[20px] text-md w-full border-[1px] border-solid border-[#dfdfdf]" labelClass="mb-[25px]" placeholder="Your name" />
                            <Input showErrorMsg={false} type="email" name="email" className="py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]" labelClass="mb-[25px]" placeholder="Your email address" />
                            <Input showErrorMsg={false} type="tel" name="phone" className="py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]" placeholder="Mobile number" />
                          </Col>
                          <Col className="mb-16 sm:mb-[20px]">
                            <TextArea className="border-[1px] border-solid border-[#dfdfdf] w-full py-[15px] px-[20px] text-md h-[210px] resize-none" rows="6" name="comment" placeholder="Your message"></TextArea>
                          </Col>
                          <Col className="text-left sm:mb-[20px]">
                            <Checkbox type="checkbox" name="terms_condition" className="inline-block mt-[4px]" labelClass="flex items-start">
                              <span className="ml-[10px] text-sm inline-block w-[85%]">I accept the terms & conditions and I understand that my data will be hold securely in accordance with the<a aria-label="checkbox" to="/privacy" target="_blank" className="text-darkgray underline hover:text-fastblue"> privacy policy</a>.</span>
                            </Checkbox>
                          </Col>
                          <Col className="text-right sm:text-center">
                            <Buttons type="submit" className={`text-xs tracking-[1px] rounded-none py-[12px] px-[28px] uppercase${isSubmitting ? " loading" : ""}`} themeColor={["#b884fd", "#fe73a8", "b884fd"]} size="md" color="#fff" title="Send Message" />
                          </Col>
                        </Row>
                        <AnimatePresence>
                          {status && <Row><Col xs={12}><div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><MessageBox className="mt-[20px] py-[10px]" theme="message-box01" variant="success" message="Your message has been sent successfully!" /></div></Col></Row>}
                        </AnimatePresence>
                      </Form>
                    )}
                  </Formik>
                </Col>
              </Row>
            </Overlap>
          </motion.div>
       
        </Container>
      </section>
      <section className="py-[80px] md:py-[40px]">
        <Container>
          <Row className="items-center">
            <Col lg={6} md={7} sm={6} className="xl:text-start xs:text-center sm:my-[25px] xs:mb-[30px]">
              <h6 className="font-serif text-darkgray font-medium mb-[10px]">Are you ready to work with us?</h6>
              <Buttons to="/page/contact-classic" className="font-medium after:bg-fastblue !leading-[25px] font-serif uppercase btn-link after:h-[2px] md:text-md hover:opacity-50" color="#0038e3" size="xl" title="Start a Project" />
            </Col>
            <Col lg={6} md={5} sm={6} className="sm:my-[25px] xs:mt-0">
              <span className="font-serif text-md text-right xs:text-center block mb-[10px]">Connect with social media</span>
              <SocialIcons theme="social-icon-style-01" size="sm" iconColor="light" className="justify-end text-end xs:justify-center xs:!text-center" data={SocialIconsData.slice(0, 4)} />
            </Col>
          </Row>
        </Container>
      </section> 
    
    </div>
  )
}

export default ContactUsSimplePage