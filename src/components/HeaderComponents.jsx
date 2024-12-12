import Header, {
  HeaderNav,
  Menu,
  SearchBar,
  Topbar,
} from "../components/Header/Header";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import SocialIcons from "../components/SocialIcon/SocialIcons";
import HeaderData from "../components/Header/HeaderData";
const SocialIconsData = [
  {
    color: "#0038e3",
    link: "https://www.facebook.com/",
    icon: "fab fa-facebook-f",
  },
  {
    color: "#0038e3",
    link: "https://dribbble.com/",
    icon: "fab fa-dribbble",
  },
  {
    color: "#0038e3",
    link: "https://twitter.com/",
    icon: "fab fa-twitter",
  },
  {
    color: "#0038e3",
    link: "https://www.instagram.com/",
    icon: "fab fa-instagram",
  },
];

const headerProps = { fluid: "lg", theme: "dark", menu: "light", expand: "lg" };

const HeaderDigitallink = (props) => {
  return (
    <div style={props.style}>
      <Header
        {...headerProps}
        className="header-with-topbar"
        topSpace={{ desktop: true }}
        type="reverse-scroll"
      >
        <Topbar className="bg-[#262b35] border-b home-business-topbar border-[#0000001a] sm:hidden md:px-0 header-with-topbar border-bottom px-[35px]">
          <Container fluid>
            <Row className="justify-between pl-[15px] lg:pr-[15px] items-center">
              <Col className="col-12 text-center sm:text-start col-sm-auto me-auto ps-lg-0">
                <SocialIcons
                  theme="social-icon-style-01 "
                  size="xs"
                  iconColor="light"
                  data={SocialIconsData}
                />
              </Col>
              <Col className="col-auto none sm:block text-end lg:px-0">
                <span className="top-bar-contact-list border-l border-inherit	py-[9px] px-[18px] text-[13px] inline-block float-left text-white">
                  <i className="feather-phone-call text-white mr-[6px] text-md relative top-[1px]"></i>{" "}
                  +971558952593
                </span>
                <span className="top-bar-contact-list border-l border-inherit	py-[9px] px-[18px] text-[13px] inline-block float-left text-white">
                  <i className="feather-phone-call text-white mr-[6px] text-md relative top-[1px]"></i>{" "}
                  +971504132803
                </span>
                <span className="border-l border-inherit py-[9px] pl-[18px] text-[13px] inline-block float-left border-r-0 pr-0 text-white">
                  <i className="feather-map-pin text-white mr-[6px] text-md relative top-[1px]"></i>{" "}
                  M37,Musaffah- Abu Dhabi
                </span>
              </Col>
            </Row>
          </Container>
        </Topbar>
        <HeaderNav
         fluid="lg" theme="light" bg="white" menu="light" expand="lg"
          className="px-[35px] py-[0px] md:px-[15px] sm:px-0"
          containerClass="md:px-0"
        >
          <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
            <a aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0 ">
                <img
                  className="default-logo"
                  width="211"
                  height="136"
                  loading="lazy"
                  src="/assets/logo2.png"
                  data-rjs="/assets/logo2.png"
                  alt="logo"
                />
                <img
                  className="alt-logo"
                  width="211"
                  height="136"
                  loading="lazy"
                  src="/assets/logo2.png"
                  data-rjs="/assets/logo2.png"
                  alt="logo"
                />
                <img
                  className="mobile-logo"
                  width="211"
                  height="136"
                  loading="lazy"
                  src="/assets/logo2.png"
                  data-rjs="/assets/logo2.png"
                  alt="logo"
                />
              </Navbar.Brand>
            </a>
          </Col>
          <Navbar.Toggle className="order-last md:mx-[15px]">
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
          </Navbar.Toggle>
          <Navbar.Collapse className="col-auto justify-end p-0">
            <Menu data={HeaderData} />
          </Navbar.Collapse>
          <Col className="col-auto text-right !pr-0 pl-[15px] md:pl-0 md:pr-[15px] sm:pr-0">
            <SearchBar className="pl-[17px] xs:px-[15px]" />
          
          </Col>
        </HeaderNav>
      </Header>
    </div>
  );
};

export default HeaderDigitallink;
