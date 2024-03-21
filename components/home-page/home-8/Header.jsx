import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainMenu from "../../header/MainMenu";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-eleven white-vr ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={200}
                height={130}
                className="d-none d-lg-block"
              />

              <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={150}
                height={90}
                className="d-block d-lg-none"
              />
            </Link>
          </div>
          <div className="right-widget d-flex align-items-center ms-auto ms-lg-0 order-lg-3">
            <Link
              href="/contact"
              className="start-btn-two fw-500 position-relative d-none d-lg-block"
            >
              Schedule a Call
            </Link>
          </div>
          <MainMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
