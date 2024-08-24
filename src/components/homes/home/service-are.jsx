import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faPencilRuler,
  faLaptopCode,
  faBriefcase,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";

// service data
const service_data = [
  {
    id: 1,
    icon: (
      <FontAwesomeIcon
        icon={faBullhorn}
        style={{ color: "black", fontSize: "2em" }}
      />
    ),
    naem: "Digital Marketing",
    link: "service",
    delay: ".3s",
  },
  {
    id: 2,
    icon: (
      <FontAwesomeIcon
        icon={faPencilRuler}
        style={{ color: "black", fontSize: "2em" }}
      />
    ),
    naem: "UI & UX Design",
    link: "service-3",
    delay: ".4s",
  },
  {
    id: 3,
    icon: (
      <FontAwesomeIcon
        icon={faLaptopCode}
        style={{ color: "black", fontSize: "2em" }}
      />
    ),
    naem: "Web/ App Development",
    link: "service-2",
    delay: ".6s",
  },
  {
    id: 4,
    icon: (
      <FontAwesomeIcon
        icon={faBriefcase}
        style={{ color: "black", fontSize: "2em" }}
      />
    ),
    naem: "360 Branding",
    link: "service",
    delay: ".3s",
  },
  {
    id: 5,
    icon: (
      <FontAwesomeIcon
        icon={faFileInvoice}
        style={{ color: "black", fontSize: "2em" }}
      />
    ),
    naem: "Medical Billing",
    link: "contact",
    delay: ".3s",
  },
];

const service_content = {
  name: "Services",
  title: (
    <>
      Driving Your Success <br /> with Expert Solutions
    </>
  ),
};

const { name, title } = service_content;

const ServiceAre = () => {
  return (
    <>
      <div className="tp-bs-service pt-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <span
                    className="tp-section__subtitle white-bg mb-15 wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    <i className="before-border"></i> {name}
                    <i className="after-border"></i>
                  </span>
                  <h2
                    className="tp-section__title mb-30 wow tpfadeUp"
                    data-wow-delay=".5s"
                  >
                    {title}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="tp-bs-service pb-55 tp-border-bottom pt-35">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5">
              {service_data.map((item, i) => (
                <div
                  key={i}
                  className="col wow tpfadeUp"
                  data-wow-delay={item.delay}
                >
                  <div className="tp-bs-service-box text-center pt-40 pb-40 mb-25">
                    <div className="tp-bs-sv-icon mb-25">{item.icon}</div>
                    <h3 className="tp-bs-sv-title">
                      <Link href={item.link}>{item.naem}</Link>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tp-bs-service-review text-center pt-40 pb-40 wow tpfadeUp">
            <div className="tp-bs-sv-avata d-lg-inline-block pr-25">
              <img src="/assets/img/services/service-avatas.png" alt="" />
            </div>
            <p className="d-inline-block pr-5">
              Here are some of the rewards from putting our customers first.
            </p>
            <Link href="/contact">
              Make Request
              <span>
                <i className="fal fa-long-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAre;
