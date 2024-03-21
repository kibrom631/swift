"use client";
import Seo from "../components/common/Seo";
import Header from "../components/home-page/home-8/Header";
import CopyrightFooter2 from "../components/footer/CopyrightFooter2";
import Footer from "../components/home-page/home-8/Footer";
import Features from "../components/home-page/home-6/Features";
import Services from "../components/home-page/home-10/Services";
import Tax from "../components/home-page/home-10/Tax";
import Trucking from "../components/home-page/home-10/Trucking";
import FancyFeatures from "../components/home-page/home-11/FancyFeatures";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Services2 = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <div className="dark-bg-one">
      <Seo pageTitle="Services" />

      <Header />

      {type === "trucking" ? (
        <div
          className="hero-banner-eight position-relative pt-225 md-pt-150"
          id="home"
          data-aos="fade-right"
        >
          <div className="fancy-feature-six position-relative mt-110 mb-150 lg-mt-100 xs-mt-80 lg-pt-14">
            <div className="container">
              <div className="row gx-xxl-5 align-items-center">
              <div className=" title-style-one text-center text-lg-start">
                  <h3 className="main-title fw-bold tx-dark m0 text-white">
                  Trucking Industry
                  </h3>
                </div>

                <div className="col-lg-12 col-12 mt-100" data-aos="fade-up">
                  <div className="title-style-three mb-65 lg-mb-30">
                    <div className="img-meta d-inline-block position-relative md-mt-90">
                      <Image
                        src="/images/assets/trucking.jpg"
                        style={{ borderRadius: "10px" }}
                        width={1400}
                        height={700}
                        alt="media"
                        className="lazy-img"
                      />
                    </div>
                  </div>
                </div>
                
                <Trucking />

                {/* <Features /> */}
              </div>
            </div>
            {/* <div className="inner-content pt-110 lg-pt-60 md-pt-30">
            <div className="row gx-xxl-5" style={{paddingLeft:"120px", paddingRight:"120px"}}>
            </div> */}
          {/* </div> */}
            

          </div>
        </div>
      ) : type === "small" ? (
        <div className="fancy-feature-one pt-250 lg-pt-140 mb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="title-style-one text-center text-lg-start">
                  <h3 className="main-title fw-bold tx-dark m0 text-white">
                    Small Businesses.
                  </h3>
                </div>
              </div>
              <div className="col-lg-6 ms-auto" data-aos="fade-left">
                <p
                  className="text-md text-center text-md-start md-pt-30 m0"
                  style={{ color: "#808080" }}
                >
                  Documentation and Compliance: We understand the importance of
                  proper documentation and compliance in today business
                  landscape. Our team ensures your business meets all the
                  necessary regulatory requirements, allowing you to operate
                  smoothly and confidently.
                </p>
              </div>
            </div>
          </div>

          <div className="inner-content pt-110 lg-pt-60 md-pt-30">
            <div className="row gx-xxl-5" style={{paddingLeft:"120px", paddingRight:"120px"}}>
              <Services />
            </div>
          </div>
        </div>
      ) : type === "immigration" ? (
        <div
          className="hero-banner-eight position-relative pt-225 md-pt-150"
          id="home"
          data-aos="fade-right"
        >
          <div className="fancy-feature-twenty mt-150 lg-mt-140 mb-200">
            <div className="container">
              <FancyFeatures />
            </div>
          </div>
        </div>
      ) : type === "tax" ? (
        <div className="fancy-feature-one pt-250 lg-pt-200 mb-200">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="title-style-one text-center text-lg-start mt-50">
                  <h3 className="main-title fw-bold tx-dark m0 text-white">
                    Tax Filing
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="inner-content pt-70 lg-pt-60 md-pt-30">
            <div className="row gx-xxl-5" style={{paddingLeft:"120px", paddingRight:"120px"}}>
              <Tax />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className="hero-banner-eight position-relative pt-225 md-pt-150"
            id="home"
            data-aos="fade-right"
          >
           <div className="fancy-feature-six position-relative mt-110 mb-150 lg-mt-100 xs-mt-80">
            <div className="container">
              <div className="row gx-xxl-5 align-items-center">
              <div className=" title-style-one text-center text-lg-start">
                  <h3 className="main-title fw-bold tx-dark m0 text-white">
                  Trucking Industry
                  </h3>
                </div>

                <div className="col-lg-12 col-md-6 mt-100" data-aos="fade-up">
                  <div className="title-style-three mb-65 lg-mb-30">
                    <div className="img-meta d-inline-block position-relative md-mt-90">
                    <Image
                        src="/images/assets/trucking.jpg"
                        style={{ borderRadius: "10px" }}
                        width={1400}
                        height={700}
                        alt="media"
                        className="lazy-img"
                      />

                    </div>
                  </div>
                </div>
                <Trucking />
              </div>
            </div>
          </div>
          </div>

          <div className="fancy-feature-one pt-170 lg-pt-140 mb-100">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right">
                  <div className="title-style-one text-center text-lg-start">
                    <h3 className="main-title fw-bold tx-dark m0 text-white">
                      Small Businesses.
                    </h3>
                  </div>
                </div>
                <div className="col-lg-6 ms-auto" data-aos="fade-left">
                  <p
                    className="text-md text-center text-md-start md-pt-30 m0"
                    style={{ color: "#808080" }}
                  >
                    Documentation and Compliance: We understand the importance
                    of proper documentation and compliance in today business
                    landscape. Our team ensures your business meets all the
                    necessary regulatory requirements, allowing you to operate
                    smoothly and confidently.
                  </p>
                </div>
              </div>
            </div>

            <div className="inner-content pt-110 lg-pt-60 md-pt-30">
            <div className="row gx-xxl-5" style={{paddingLeft:"120px", paddingRight:"120px"}}>
                <Services />
              </div>
            </div>
          </div>

          <div className="fancy-feature-twenty mt-250 lg-mt-140 mb-200">
            <div className="container">
              <FancyFeatures />
            </div>
          </div>

          <div className="fancy-feature-one pt-0 lg-pt-100 mb-200">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right">
                  <div className="title-style-one text-center text-lg-start">
                    <h3 className="main-title fw-bold tx-dark m0 text-white">
                      Tax Filing.
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="inner-content pt-110 lg-pt-60 md-pt-30">
            <div className="row gx-xxl-5" style={{paddingLeft:"120px", paddingRight:"120px"}}>
                <Tax />
              </div>
            </div>
          </div>
        </>
      )}

      <div className="footer-style-eight theme-basic-footer">
        <div className="top-footer zn2 position-relative">
          <img
            src="/images/shape/shape_107.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
          <div className="container">
            <div className="inner-wrapper m-auto">
              <div className="row">
                <Footer />
              </div>
            </div>
          </div>
        </div>
        <CopyrightFooter2 />
      </div>
    </div>
  );
};

export default Services2;
