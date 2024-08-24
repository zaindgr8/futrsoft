import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import AboutArea from "./about-area";
import Brand from "./brand";
import CtaArea from "./cta-are";
import HeroBusiness from "./hero-business";
import ProjectsArea from "./projects-area";
import ServiceAre from "./service-are";
import TestimonialArea from "./testimonial-area";
import HeaderTwo from "@/src/layout/headers/header-2";
import HeaderThree from "@/src/layout/headers/header-3";

const HomeOne = () => {
  return (
    <>
      <Header style_home_one={true} />
      {/* <HeaderTwo /> */}
      {/* <HeaderThree /> */}
      <HeroBusiness />
      <AboutArea />
      {/* <Brand /> */}
      <ServiceAre />
      <TestimonialArea />
      {/* <ProjectsArea /> */}
      {/* <CtaArea /> */}
      <Footer />
    </>
  );
};

export default HomeOne;
