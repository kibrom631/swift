import Image from "next/image";
import Link from "next/link";
import Seo from "../../components/common/Seo";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
import Block2 from "../../components/home-page/home-8/Block2";
import Faq from "../../components/home-page/home-8/Faq";
import Footer from "../../components/home-page/home-8/Footer";
import Header from "../../components/home-page/home-8/Header";
import Hero from "../../components/home-page/home-8/Hero";

const Main = () => {
  return (
    <div className="dark-bg-one">
      <Seo pageTitle="Swift File Solutions" />
      <Header />
      <div
        className="hero-banner-eight position-relative pt-225 md-pt-150 "
        data-aos="fade-right"
      >
        <div className="container" style={{ paddingRight: "140px" }}>
          <div className="row">
            <div className="col-md-7">
              <Hero />
            </div>
          </div>
        </div>
        <div
          className="illustration-holder"
          data-aos="fade-right"
          style={{ marginTop: "40px" }}
        >
          <Image
            width={857}
            height={764}
            layout="intrinsic"
            src="/images/assets/main.jpg"
            alt="illustration"
            className="main-illustration lazy-img"
            style={{ borderRadius: "40px" }}
          />
          <div className="shapes shape-one rounded-circle" />
        </div>
        <img
          src="/images/shape/shape_100.svg"
          alt="shape"
          className="lazy-img shapes line-shape"
        />
      </div>
      <div className="container">
        <div className="title-style-nine text-center wow fadeInUp mb-60 lg-mb-30 mt-100">
          <h2
            className="main-title text-white"
            style={{ fontSize: "40px", paddingTop: "20px" }}
          >
            <span>Our</span> Services
          </h2>
        </div>

        <div className="row gx-xxl-5">
          <Block2 />
        </div>
      </div>

      <div className="fancy-feature-twentyNine position-relative zn2 mt-180 pb-180 lg-mt-110 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="title-style-nine">
                <h2
                  className="main-title text-white"
                  style={{ fontSize: "40px" }}
                >
                  Why <span>Choose</span> Us?
                </h2>
              </div>
              <p className="text-white opacity-75 fs-18 mb-40 mt-30 pe-xxl-5">
                Don’t find your answer here? just send us a message for any
                query.
              </p>
              <Link href="/contact" className="btn-seventeen fw-500 tran3s">
                Contact us
              </Link>
            </div>
            <div className="col-xxl-6 col-lg-7 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
          </div>
        </div>
        <div className="shapes shape-one rounded-circle" />
      </div>
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

export default Main;
