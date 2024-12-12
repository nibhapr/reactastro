import React from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import { motion } from "framer-motion"
import { fadeIn } from '../Functions/GlobalAnimations'
import Accordions from '../components/Accordion/Accordion'
import  {AccordionData02 } from '../components/Accordion/AccordionData'

const AccordionComponets =() => {

    return(
        <section className="pt-20 switch-tabs">
        <Col className="text-center">
            <h6 className="font-serif text-darkgray text-center font-medium mb-[5%]">FAQ</h6>
        </Col>
        <Tabs className="justify-center">
        <Tab eventKey="light" title="Frequently Asked Questions">
                <motion.section className="py-20 bg-lightgray">
                    <Container>
                        <Row className="justify-center">
                            <Col lg={6} md={10}>
                                <Accordions
                                    theme="accordion-style-02"
                                    className=""
                                    animation={fadeIn}
                                    themeColor="light"
                                    data={AccordionData02}
                                />
                            </Col>
                        </Row>
                    </Container>
                </motion.section>
            </Tab>
          
          
          
        </Tabs>
        </section>


    )
}

export default AccordionComponets