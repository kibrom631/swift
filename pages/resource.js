import Seo from "../components/common/Seo";
import Header from "../components/home-page/home-8/Header";
import CopyrightFooter2 from "../components/footer/CopyrightFooter2";
import Footer from "../components/home-page/home-8/Footer";

const contact = () => {
  return (
    <div className="dark-bg-one">
      <Seo pageTitle="Contact" />

      <Header />

      <div
        className="hero-banner-eight position-relative pt-225 md-pt-150"
        data-aos="fade-right"
      >
        <div
          className="fancy-feature-sixteen position-relative pt-120 pb-80 mt-125 mb-150 lg-mt-130 lg-pt-80 lg-pb-50 lg-mb-100"
          style={{ backgroundColor: "#151937" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <div
                  className="title-style-six text-center "
                  data-aos="fade-up"
                >
                  <div className="sc-title" style={{ color: "#FF8A8A" }}>
                    Featured Causes
                  </div>
                  <h2 className="main-title fw-500 text-white">Resources</h2>
                </div>
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

export default contact;
