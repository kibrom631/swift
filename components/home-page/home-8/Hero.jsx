import Link from "next/link";

const Hero = () => {
  return (
    <>
      <h1
        className="hero-heading fw-500 text-white mb-45"
        style={{ fontSize: "36px" }}
      >
        Our Comprehensive Solution Hub for{" "}
        <span>Trucking, Small Business, Immigration, Tax Filing</span> and more
      </h1>
      <p className="text-md text-white opacity-75 mb-65 lg-mb-50 pe-lg-5">
        Welcome to Swift File Solutions , where we simplify the complexities of
        business. From trucking and small business management to immigration,
        tax filing, and business setup, we offer comprehensive services tailored
        to your needs. Let us be your trusted partner in navigating the
        challenges and achieving success. Welcome to efficiency, welcome to
        excellence - welcome to Swift File Solutions.{" "}
        <Link href="/aboutUs" style={{ color: "pink" }}>
          Learn more
        </Link>
      </p>

      <div className="d-sm-flex align-items-center">
        <Link
          href="/contact"
          className="btn-sixteen fw-500 tran3s mb-25 me-4 order-sm-first"
        >
          Contact Us
        </Link>
      </div>
    </>
  );
};

export default Hero;
