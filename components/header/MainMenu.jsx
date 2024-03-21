import Link from "next/link";

const MainMenu = () => {
  const portfolioItems = [
    { name: "Trucking Industry", link: "/services?type=trucking" },
    { name: "Small Business", link: "/services?type=small" },
    { name: "Immigration Service", link: "/services?type=immigration" },
    { name: "Tax filing", link: "/services?type=tax" },
    { name: "All", link: "/services" },
  ];

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav gap-4">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/logo/logo.png" alt="" width={140} />
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/" role="button">
              Home
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="/services"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Services
            </Link>
            <ul className="dropdown-menu" style={{ background: "#151937" }}>
              {portfolioItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className="dropdown-item">
                    <span style={{ color: "white" }}>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/aboutUs" role="button">
              About Us
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/contact" role="button">
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/resource" role="button">
              Resource
            </Link>
          </li>
        </ul>
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
