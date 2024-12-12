import { motion } from "framer-motion";
import { Col, Container, Row } from 'react-bootstrap'
import { fadeIn, zoomIn } from '../Functions/GlobalAnimations'
import Buttons from '../components/Button/Buttons'
const HomebrandingComponents = () => {
    return (

        <section id="down-section" className="overflow-hidden bg-white p-0 ml-4">
            <Container fluid>
                <Row>
                    <Col lg={2} md={4} className="flex flex-col justify-center border-r border-[#f5f5f5] p-0 sm:h-[400px]">
                        <motion.div className="w-full content-box-image cover-background overflow-visible relative sm:h-full md:h-[300px] md:w-full" {...fadeIn} style={{ backgroundImage: "url(assets/img/bond27.jpg)" }}>
                            <motion.div className="justify-center items-center h-[130px] w-[130px] -right-[70px] -top-[70px] flex rounded-[50%] bg-white absolute box-shadow-extra-large sm:top-0 sm:right-0 md:w-[100px] md:h-[100px] md:-right-[50px] md:-top-[50px] xs:hidden" {...{ ...zoomIn, transition: { duration: 0.7, delay: 0.5 } }}>
                                <h1 className="font-serif font-semibold text-darkgray mb-0 uppercase text-gradient bg-gradient-to-r from-[#b93c90] via-[#a92a96] to-[#951a9d]">B</h1>
                            </motion.div>
                        </motion.div>
                    </Col>
                    <motion.div className="flex flex-col justify-center border-b-[8px]  border-[#b93c90] xl:px-[5%] px-[8%] py-[12%] lg:py-[8%] lg:px-[7%] md:p-[10%] xs:border-0 col-xl-4 col-lg-6 col-md-8" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
                        <span className="font-serif font-medium text-spanishgray uppercase block mb-[30px]">About agency</span>
                        <h2 className="heading-4 font-serif font-semibold text-darkgray -tracking-[2px] mb-12">Professional Signage Solutions in Abudhabi</h2>
                        <p className="w-[90%] mb-[25px] xl:w-full xs:mb-[15px]">Bond sign LLC provides top-notch signage solutions in Abudhabi, designed to boost your business visibility and brand recognition. We specialize in custom indoor and outdoor signs, including illuminated signs, 3D signs, wayfinding signs, and more. From conceptual design to precise installation, our expert team ensures high-quality craftsmanship and durability. Whether you're a retail store, corporate office, or event organizer, our signage services will help you make a bold statement. Contact us today for professional, reliable signage solutions in Abudhabi!</p>
                        <div className="mt-[25px]">
                            <Buttons ariaLabel="about-us" to="/page/about-us" className="btn-fill btn-fancy font-medium font-serif uppercase rounded-none btn-shadow" size="md" themeColor="#000" color="#fff" title="About agency" />
                        </div>
                    </motion.div>
                    <Col lg={2} md={6} className="flex flex-col justify-center border-[1px] !border-t-0 !border-b-0 border-[#f5f5f5] p-0 sm:h-[400px] sm:border-0 md:h-[600px] md:justify-end">
                        <motion.div className="content-box-image cover-background md:h-[300px] sm:h-full" style={{ backgroundImage: "url(assets/img/bond29.jpg)" }} {...fadeIn}></motion.div>
                    </Col>
                    <Col lg={2} md={6} className="flex flex-col justify-start border-r border-[#f5f5f5] p-0 sm:h-[400px] md:h-[600px]">
                        <motion.div className="content-box-image cover-background md:h-[300px] sm:h-full" style={{ backgroundImage: "url(assets/img/bond31.jpg)" }} {...{ ...fadeIn, transition: { delay: 0.5 } }}></motion.div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default HomebrandingComponents

