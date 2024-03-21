import Seo from "../components/common/Seo";
import Header from "../components/home-page/home-8/Header";
import CopyrightFooter2 from "../components/footer/CopyrightFooter2";
import Footer from "../components/home-page/home-8/Footer";

const AboutUs = () => {
  return (
    <div className="dark-bg-one">
      <Seo pageTitle="AboutUs" />

      <Header />

      <div
        className="hero-banner-eight position-relative pt-225 md-pt-150 "
        data-aos="fade-right"
      ></div>

      <div className="service-details position-relative mt-100 mb-170 md-mt-50 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 order-lg-1">
              <div className="service-details-meta ps-lg-5">
                <h3
                  className="main-title tx-dark mb-30 text-white"
                  style={{ textAlign: "start", fontSize: "40px" }}
                >
                  Our Mission
                </h3>

                <p
                  className="text-md text-white"
                  style={{ fontSize: "15px", textAlign: "start" }}
                >
                  At Swift File Solution, our mission is to empower trucking
                  businesses and entrepreneurs in the journey to success. We are
                  dedicated to providing expert guidance, comprehensive
                  solutions, and personalized support to navigate the
                  complexities of the trucking industry and small business
                  setup. With over 7 years of experience, we aim to be the
                  trusted partner that helps our clients achieve their goals and
                  thrive in their respective ventures. Our commitment is to
                  deliver excellence, enabling our clients to drive their
                  businesses forward with confidence and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-details position-relative mt-100 mb-170 md-mt-50 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 order-lg-1">
              <div className="service-details-meta ps-lg-5">
                <h2
                  className="main-title tx-dark mb-30 text-white"
                  style={{ textAlign: "start", fontSize: "40px" }}
                >
                  About Us
                </h2>

                <p
                  className="text-md text-white"
                  style={{ fontSize: "15px", textAlign: "start" }}
                >
                  With over 7 years of experience, Swift File Solutions is a
                  trusted name in the trucking industry and small business
                  setup. We specialize in providing tailored solutions to
                  trucking businesses and entrepreneurs, helping you navigate
                  the road to success.
                </p>
                <p
                  className="text-md text-white"
                  style={{ fontSize: "15px", textAlign: "start" }}
                >
                  At Swift File Solutions, we are committed to your success. Our
                  team of professionals is dedicated to providing top-notch
                  service and support, allowing you to focus on what you do best
                  – driving your business forward.
                </p>
                <p
                  className="text-md text-white"
                  style={{ fontSize: "15px", textAlign: "start" }}
                >
                  Ready to take your trucking business to the next level?
                  Contact us today to learn more about our services and how we
                  can tailor our solutions to meet your unique needs.
                </p>
              </div>
            </div>
          </div>
        </div>
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

export default AboutUs;
