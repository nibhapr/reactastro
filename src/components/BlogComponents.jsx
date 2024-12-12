import { motion} from 'framer-motion';
import { Col, Container, Row } from 'react-bootstrap'
import Buttons from '../components/Button/Buttons'
import { fadeIn } from '../Functions/GlobalAnimations'
import BlogMasonry from '../Blogs/BlogMasonry'
import { blogData } from "../Blogs/BlogData";

const BlogComponents = ()=>{
    const blogMasonryData = blogData.filter((item) => item.blogType === "masonry");
return(

<motion.section className="py-[130px] bg-lightgray overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]" {...fadeIn}>
<Container>
    <Row className="items-center">
    <Col sm={12}>
            <h2 className="heading-4 font-serif text-center font-semibold text-darkgray mb-0 -tracking-[1px] xs:text-center">Interesting articles</h2>
    </Col>
        <Col sm={6} className="text-right xs:text-center">
            <Buttons ariaLabel="all articles" to="/blogs/blog-masonry" className="font-medium font-serif uppercase btn-link after:h-[2px] md:mb-[15px] after:bg-darkgray hover:text-darkgray" color="#232323" title="all articles" size="xlg" />
        </Col>
    </Row>
    <Row>
        <Col className="px-sm-0">
            <BlogMasonry pagination={false} grid="mt-28 md:mt-12 grid grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-double-extra-large" className="design-agency-blog-masonry" data={blogMasonryData} />
        </Col>
    </Row>
</Container>
</motion.section>
)
}

export default BlogComponents