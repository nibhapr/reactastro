import { Row,Container} from "react-bootstrap";
import RotateBox from "../components/RotateBox/RotateBox";

import {
       rotateInLeft,
  } from "../Functions/GlobalAnimations";

  const RotateBoxData = [
    {
      img: "/assets/img/bondsign1.webp",
      title: "Bondsign",
      subtitle: "U.A.E Abudhabi",
      icon: "line-icon-Flick",
      btnLink: "#",
      btnTitle: "Discover possible",
      content:
        "At Bond Sign, we design and produce high-impact signs tailored to your unique business needs. Whether you need indoor, outdoor, or digital signage, we deliver quality that grabs attention in Abudhabi.",
    },
    {
      img: "/assets/img/bondsign2.webp",
      title: "Bondsign",
      subtitle: "U.A.E Abudhabi",
      icon: "line-icon-Bell-2",
      btnLink: "#",
      btnTitle: "Discover possible",
      content:
        "Bond Sign provides businesses across Abudhabi with eye-catching, professional signage. With our expertise in fabrication and installation, your brand can shine in any setting—indoor or outdoor.",
    },
    {
      img: "/assets/img/bond.webp",
      title: "Bondsign",
      subtitle: "U.A.E Abudhabi",
      icon: "line-icon-Sun",
      btnLink: "#",
      btnTitle: "Discover possible",
      content:
        "At Bond Sign, we offer bespoke signage solutions that reflect your brand’s vision. From design to installation, our expert team ensures your signs are impactful and aligned with your business goals.",
    },
  ];
const RotateComponets = () => {

    return (

<section>
<Container>
  <Row className="justify-center lg:mt-[200px] md:mt-0 m-8">
    <div className="col-12 col-md-12 col-sm-8 md:mt-0 md:py-[95px] sm:py-[80px] xs:pb-0">
      <RotateBox
        animation={rotateInLeft}
        animationDelay={0.4}
        grid="row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-10 justify-center"
        data={RotateBoxData}
      />
    </div>
  </Row>
</Container>
</section>

    )}

export default RotateComponets