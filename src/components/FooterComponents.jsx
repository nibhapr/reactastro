import FooterData from '../components/Footer/FooterData';
import FooterMenu, { Footer } from '../components/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

const FooterComponent = () => {

    return (
<Footer className="bg-[#262b35] text-slateblue" theme="dark">
<div className="py-[7%] lg:py-[8%] sm:py-[50px]">
  <Container>
    <Row className="justify-between md:justify-center sm:justify-between">
      <Col className="m-0 md:text-center sm:text-start" lg={{ offSet: 0, span: 3, order: 0 }} sm={{ span: 6, order: 5, offSet: 2 }} md={{ span: 4, offset: 0, order: 5 }} xs={{ span: 12, order: 5, offSet: 2 }}>
        <a to="/" className="text-slateblue mb-[15px] mt-[5px] inline-block">
          <img loading="lazy" src="/assets/logo2.png" alt="logo" width="211" height="136" />
        </a>
        <p className="mb-[25px] text-slateblue sm:w-[90%] md:mb-[15px] md:text-center sm:text-start">We create digital experiences for brands companies by using creativity.</p>
        <p>© Copyright {new Date().getFullYear()} <a to="/" className="underline underline-offset-4 text-white font-normal"> Bond sign</a></p>
      </Col>
      <FooterMenu data={FooterData.slice(0, 4)} lg={{ span: 2, offSet: 1, order: 0 }} md={{ span: 3, order: 0 }} sm={{ span: 4, offSet: 1, order: 2 }} className="xl:px-[15px] md:mb-[40px] xs:mb-[25px]" titleClass="capitalize" />
    </Row>
  </Container>
</div>
</Footer>

    )
}

export default FooterComponent