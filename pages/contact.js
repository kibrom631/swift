import Seo from "../components/common/Seo";
import BlockContact from "../components/contact/BlockContact";
import ContactForm2 from "../components/home-page/home-8/ContactForm";
import Map from "../components/contact/Map";
import Header from "../components/home-page/home-8/Header";
import CopyrightFooter2 from "../components/footer/CopyrightFooter2";
import Footer from "../components/home-page/home-8/Footer";

const contact = () => {
  return (
    <div className="dark-bg-one">
      <Seo pageTitle="Contact" />
      <Header />
      <div
        className="hero-banner-eight position-relative pt-225 md-pt-150 "
        data-aos="fade-right"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto wow fadeInUp">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two text-white fst-italic position-relative d-inline-block">
                  Contact info
                </div>
                <h2 className="main-title fw-500 text-white" style={{fontSize:"40px"}}>Get in Touch.</h2>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      <div className="hero-banner-eight mt-60 lg-mt-30">
        <div className="container">
          <div className="row">
            <BlockContact />
          </div>
        </div>
        <div className="footer-style-eight theme-basic-footer">
          <div className=" zn2 position-relative">
            <div className="container">
              <div className="inner-wrapper m-auto">
                <div className="row" style={{marginTop:"60px"}}>
                  <ContactForm2 />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Map />
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

export default contact;
