import React, { memo } from 'react'
import { Row } from 'react-bootstrap'
import { motion } from 'framer-motion'



import "../../assets/scss/components/_processstep.scss"

const ProcessStep = ({grid='',theme,className='',data,animation,animationDelay}) => {
    return (
        <Row className={`${grid ? grid : ""}${className ? ` ${className}` : ""}`}>
            {
                data.map((item, i) => {
                    return (
                        <motion.div key={i} className={`${theme} col process-step`} {...{ ...animation, transition: { delay: i * animationDelay,ease: [0.33,1,0.68,1], duration: 1 } }}>
                            <div className='process-step-icon-box'>
                                <span className='process-step-bfr'></span>
                                {item.icon && <div className="process-step-icon"><i className={item.icon}></i></div>}
                                {theme !== "process-step-style-01" && <span className="process-step-number"><span>{i + 1}</span></span>}
                                {(item.title || item.content) && (
                                    <div className="process-step-description">
                                        {item.title && <span className="process-step-heading">{item.title}</span>}
                                        {item.content && <p className="process-step-content">{item.content}</p>}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )
                })
            }
        </Row>
    )
}





export default memo(ProcessStep)