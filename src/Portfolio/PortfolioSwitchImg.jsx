import React, { memo, useEffect, useRef, useState } from 'react'

import { m } from "framer-motion";

// Components
import Filter from './Filter';

// Data
import { portfolioSwitchImgData } from './PortfolioData'

const PortfolioSwitchImg = (props) => {
    const portfolioWrapper = useRef()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let allImages = portfolioWrapper.current.querySelectorAll("img");

        Promise.all(Array.prototype.slice.call(allImages).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
            import("../../Functions/Utilities").then(module => {
                const grid = module.initializeIsotop(portfolioWrapper.current)
                grid.on('arrangeComplete', () => setLoading(false));
            })
        });
    })

    const handleFilterChange = () => {
        portfolioWrapper.current.querySelectorAll("li").forEach(item => item.childNodes[0]?.classList.add("appear"))
    }

    return (
        <div className={`${props.className ? ` ${props.className}` : ""} grid-wrapper`}>
            {/* Filter Start */}
            <Filter title={props.title} filterData={props.filterData} onFilterChange={handleFilterChange} />
            {/* Filter End */}

            {/* Grid Start */}
            <ul ref={portfolioWrapper} className={`grid-container text-center${props.grid ? ` ${props.grid}` : ""}${loading ? " loading" : ""}`}>
                <li className="grid-sizer"></li>
                {
                    props.data.map((item, i) => {
                        return (
                            <li key={i} className={`grid-item${item.double_col ? " grid-item-double" : ""} ${item.category.toString().split(",").join(" ").toLowerCase()}`}>
                                <a aria-label='link' target={props.target} to={item.link} className="no-underline">
                                    <m.div
                                        className="portfolio-switchimg overflow-hidden"
                                        initial={{ opacity: 0 }}
                                        whileInView={!loading && { opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    >
                                        <div className="portfolio-image">
                                            {item.frontimg && <img src={item.frontimg} width={600} height={500} alt="portfolio-switch" className="w-full" />}
                                            {item.backimg && <img className="portfolio-switch-image w-full" src={item.backimg} width={600} height={500} alt="portfolio-switch" />}
                                        </div>
                                        <div className="py-[30px] portfolio-content lg:py-[20px] xs:py-[15px]">
                                            {item.title && <span className="inline-block font-medium text-darkgray font-serif">{item.title}</span>}
                                            {item.subtitle && <span className="block text-spanishgray text-md">{item.subtitle}</span>}
                                        </div>
                                    </m.div>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            {/* Grid End */}
        </div>
    )
}

PortfolioSwitchImg.defaultProps = {
    data: portfolioSwitchImgData,
}



export default memo(PortfolioSwitchImg)