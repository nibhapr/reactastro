import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'

const InteractiveBanners01 = ({
    animationDelay = 0.2,
    animation,
    className = "",
    data = InteractiveBannersData02,
    grid = "",
}) => {
    return (
        <Row className={`g-0 ${grid}${className ? ` ${className}` : ""}`} xl={4} sm={2}>
            {
                data.map((item, i) => {
                    return (
                        <Col key={i} className="interactivebanners-style-01 border-y border-r border-mediumgray relative z-0 overflow-hidden">
                            <motion.div className="py-24 px-[5.5rem] xl:px-14 xl:py-12 lg:px-[6.5rem] lg:py-24" {...{ ...animation, transition: { delay: i * animationDelay } }}>
                                {item.subtitle && <span className="block font-serif text-md text-basecolor tracking-[2px] mb-[25px] font-medium uppercase">{item.subtitle}</span>}
                                {item.title && <h3 className="heading-6 font-serif font-semibold w-[70%] mb-[20px] xl:w-full"> {item.title}</h3>}
                                {(item.icon || item.btnLink) && <a aria-label="link" className="no-underline text-[#b7b7b7] text-[40px]" to={item.btnLink ? item.btnLink : "#"}><i className={item.icon}></i></a>}
                                {item.img && <div className="interactive-banners-image bg-no-repeat bg-cover overflow-hidden bg-center absolute" style={{ backgroundImage: `url(${item.img})` }}></div>}
                            </motion.div>
                        </Col>
                    )
                })
            }
        </Row>

    )
}





export default memo(InteractiveBanners01)