import React, { memo } from 'react'
import { Row } from 'react-bootstrap'
import { motion } from "framer-motion"
import { serviceData1 } from './ServicesData'


const Services = (className='',animation,animationDelay,theme,grid) => {
    return (
        <Row className={grid}>
            {
                className.data.map((item, i) => {
                    return (
                        <motion.div key={i} className={`col px-[15px]${className ? ` ${className}` : ""}`} {...{ ...animation, transition: { delay: i * animationDelay } }}>
                            <div className={theme}>
                                <div className="img-wrapper">
                                    {theme === "service-style-05" && <span className="text-xmd">{i + 1 >= 10 ? '' : '0'}{i + 1}</span>}
                                    {item.img && <img height={238} width={360} className="w-full max-w-full align-middle" src={item.img} alt="service-style-5" />}
                                    {theme === "service-style-01" && <div className='services-box-hover'>
                                        {(item.icon || item.link) && <a aria-label="services" to={item.link ? item.link : "#"}><i className={item.icon}></i></a>}
                                    </div>}
                                </div>
                                <div className='service-style'>
                                    {theme === "service-style-03" && <span className='verticalline'></span>}
                                    {item.title && <span className="title font-medium text-darkgray block font-serif mb-[10px]">{item.title}</span>}
                                    {item.content && <p>{item.content}</p>}
                                    {(theme === "service-style-02" || theme === "service-style-05") && <div className='info-service'>
                                        {(item.linkTitle || item.icon) && <a aria-label="services" to={item.link ? item.link : "#"} className="no-underline font-serif font-medium text-gray-900 text-sm uppercase block">{item.linkTitle}<i className={item.icon}></i></a>}
                                    </div>}
                                </div>
                            </div>
                        </motion.div>
                    )
                })
            }
        </Row>
    )
}

Services.className = {
    data: serviceData1,
    theme: "service-style-01",
    animationDelay: 0.2
}


export default memo(Services)