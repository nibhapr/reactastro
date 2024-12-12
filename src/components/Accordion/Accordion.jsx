import React, { memo } from 'react'
import { Accordion } from 'react-bootstrap'
import { motion } from "framer-motion"
import "../../assets/scss/components/_accordion.scss"


const Accordions = ({theme,themeColor,className="",data =[],animation,animationDelay}) => {

    return (
        <div className={`${theme} ${themeColor}${className ? ` ${className}` : ""}`}>
            <Accordion defaultActiveKey={0}>
                {
                    data.map((item, key) => {
                        return (
                            <motion.div className={`accordion-item-wrapper`}
                                key={key}
                                {...{ ...animation, transition: { delay: key * animationDelay } }}
                            >
                                <Accordion.Item key={key} eventKey={key}>
                                    {item.title && 
                                        <Accordion.Header>
                                            { item.time && <span className="panel-time">{item.time}</span>}
                                            { item.title && <span className="panel-title">{item.title}</span>}
                                            { item.author && <span className="panel-speaker">{item.author}</span>}
                                        </Accordion.Header>
                                    }
                                    {item.content && <Accordion.Body> {item.content} </Accordion.Body>}
                                </Accordion.Item>
                            </motion.div>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}

export default memo(Accordions)