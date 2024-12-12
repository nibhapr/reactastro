import React, { memo } from 'react'
import { motion } from "framer-motion"
import { SocialIconsData01 } from '../SocialIcon/SocialIconsData'
import "../../assets/scss/components/_socialicons.scss"
const data = SocialIconsData01
const SocialIcons = ({ theme="social-icon-style-01",size ="lg",iconColor="light",className="justify-center",animation,animationDelay=0.2}) => {
    return (
        <ul className={`social-icon flex-wrap gap-y-5 p-0 ${theme} ${size} ${iconColor} ${className}`}>
            {
                data.map((item, i) => {
                    return (
                        theme !== "social-icon-style-1" ? (
                            <motion.li key={i} style={{ "--social-icon-color": item.color ? item.color : "#000" }} {...{ ...animation, transition: { delay: i * animationDelay } }} >
                                <a href={item.link} aria-label="social icon" target="_blank" rel="noreferrer">
                                    {item.name && <span className='flex brand-label'>{item.name ? item.name : "icon"}</span>}
                                    {item.icon && <i className={`${item.icon} brand-icon`}></i>}
                                    <span></span>
                                </a>
                            </motion.li>
                        ) : (
                            <motion.li key={i} style={{ "--social-icon-color": item.color ? item.color : "#000" }} {...{ ...animation, transition: { delay: i * animationDelay } }} >
                                <a href={item.link} aria-label="social icon" target="_blank" rel="noreferrer">
                                    {item.socialback && <div className='social-back'><span>{item.socialback}</span></div>}
                                    <div className={`${item.position} social-front grid`}>
                                        {item.icon && <i className={item.icon}></i>}
                                        {item.name && <span>{item.name ? item.name : "icon"}</span>}
                                    </div>
                                </a>
                            </motion.li>
                        )
                    )
                })
            }
        </ul>
    )
}






export default memo(SocialIcons)