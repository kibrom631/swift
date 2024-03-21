import Link from "next/link";

const servicesData = [
  {
    bgColor: "rgba(255, 171, 51, 0.18)",
    iconSrc: "/images/icon/icon_01.svg",
    title: "Individual Tax Filing",
    description:
      "Simplify your tax season with our Individual Tax Filing service. Our experienced team ensures accurate and efficient filing for all types of income, making tax time stress-free.",
  },
  {
    bgColor: "rgba(100, 219, 226, 0.18)",
    iconSrc: "/images/icon/icon_02.svg",
    title: "Self-Employed Tax Filing",
    description:
      "For self-employed individuals, our specialized Tax Filing service simplifies the process. We maximize deductions and ensure compliance, letting you focus on growing your business.",
  },
  {
    bgColor: "rgba(255, 160, 194, 0.18)",
    iconSrc: "/images/icon/icon_03.svg",
    title: "Business Tax Filing",
    description:
      "Streamline your business taxes with our comprehensive Tax Filing service. From startups to corporations, we handle filings efficiently, keeping you compliant and financially optimized.",
  },
 
];

const Services = () => {
  return (
    <>
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`col-lg-4 col-sm-6`}
        //   data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <div className="card-style-one pe-xxl-5 position-relative mt-40">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ backgroundColor: service.bgColor }}
            >
              <img src={service.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <p className="fw-500 mt-35 mb-25 text-white" style={{fontSize:"18px"}}>
             
                {service.title}
              
            </p>
            <p className="mb-25" style={{color:"#808080", fontSize:"13px"}}>{service.description}</p>
           
          </div>
          {/* /.card-style-one */}
        </div>
      ))}
	  {/* <p style={{color:"#808080", textAlign:"center"}}>At Swift File Solutions, our mission is to empower entrepreneurs and business owners like you. We are committed to delivering top-notch service and expertise, allowing you to focus on what you do best – building and growing your business. <br/>
	  Ready to take the next step in your business journey? Contact us today to learn more about our services and how we can partner with you for success.</p> */}
    </>
  );
};

export default Services;
