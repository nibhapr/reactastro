import React from "react";
import { Col, Container, Row } from 'react-bootstrap';


const Filter = ({title,filterData=[],}) => {

    const handleFilterChange = () => {
        onFilterChange && onFilterChange()
    }

    return (
        (title || filterData) && (
            <Container className="mb-24 md:mb-[4.5rem] sm:mb-8">
                <Row className={`${title ? "justify-between" : "justify-center"} items-center md:justify-center md:items-center md:text-center md:flex-col`}>
                    {
                        title && (
                            <Col xs="auto" className="md:mb-[30px]"><h3 className="heading-4 font-serif m-0 p-0 font-semibold text-darkgray tracking-[-1px]">{title}</h3></Col>
                        )
                    }
                    <Col xs="auto">
                        {
                            filterData && (
                                <ul className="filter-menu items-center justify-center flex flex-wrap uppercase">
                                    {
                                        filterData.map((item, i) => {
                                            return (
                                                <li key={i} className={`px-[20px]${i === 0 ? " active" : ""}`}><span data-filter={item.key} onClick={handleFilterChange}>{item.title}</span></li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        }
                    </Col>
                </Row>
            </Container>
        )
    )
}

export default Filter

