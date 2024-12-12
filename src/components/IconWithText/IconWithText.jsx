import React, { memo } from 'react'
import { Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Buttons from '../Button/Buttons'
import "../../assets/scss/components/_iconwithtext.scss"


const IconWithText = ({grid,data=[],theme,className="",animation,animationDelay,animationTransition,animationDuration}) => {
  return (
    <Row className={`${grid} md:justify-center`}>
      {
        data.map((item, i) => {
          return (
            <motion.div key={i} className={`col${theme ? ` ${theme}` : ""}${className ? ` ${className}` : ""}`} {...{animation, transition: { delay: i * animationDelay, ease: animationTransition, duration: animationDuration } }}>
              <div className="rounded-md w-full">
                {
                  item.img ? (
                    <img height={42} width={51} className="inline-block items-center justify-center mb-[30px]" src={item.img} alt="featurebox" />
                  )
                    :
                    item.icon ? (theme === "icon-with-text-05" ? <a aria-label="link for icon" to="#"><i className={item.icon}></i></a> : <i className={item.icon}></i>
                    )
                      :
                      item.textIcon ? (<span className="text-basecolor inline-block icon-text">{item.textIcon}</span>)
                        :
                        <span className="text-basecolor inline-block icon-text">{`${i <= 9 ? "0" : ""}${i + 1}`}</span>
                }

                <div className='feature-box-content'>
                  {item.title && <span className="font-medium title font-serif text-black">{item.title}</span>}
                  {item.content && <p>{item.content}</p>}
                  {theme === "icon-with-text-11" ? <Buttons ariaLabel="iconwithtext" href="#" className="font-medium font-serif uppercase btn-link after:h-[2px] after:bg-darkgray md:text-md md:mb-[15px]" size="xl" color="#232323" title="Read more" /> : ""}
                </div>
                {(item.linkTitle || item.link) && <Buttons ariaLabel="iconwithtext" className="font-medium font-serif uppercase btn-link after:h-[1px] md:text-md md:mb-[15px] after:bg-basecolor hover:text-basecolor" to={item.link} title={item.linkTitle} />}
              </div>
            </motion.div>
          )
        })
      }
    </Row>
  )
}






export default memo(IconWithText)