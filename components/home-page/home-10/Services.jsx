import Link from "next/link";

const servicesData = [
  {
    bgColor: "rgba(255, 171, 51, 0.18)",
    iconSrc: "/images/icon/icon_01.svg",
    title: "Business Planning.",
    description:
      "Every successful business starts with a solid plan. Whether you're launching a new venture or looking to grow your existing one, our business planning services provide you with a roadmap for success.",
  },
  {
    bgColor: "rgba(100, 219, 226, 0.18)",
    iconSrc: "/images/icon/icon_02.svg",
    title: "Business Licensing and Registration.",
    description:
      "Navigating the maze of licenses and registrations can be challenging. We simplify the process by handling all the necessary paperwork, ensuring your business is legally compliant and ready to thrive.",
  },
  {
    bgColor: "rgba(255, 160, 194, 0.18)",
    iconSrc: "/images/icon/icon_03.svg",
    title: "Website Design and Development.",
    description:
      "In today's digital age, a strong online presence is crucial. Our website design and development services create stunning, user-friendly websites tailored to your brand, helping you reach a wider audience and stand out in the digital marketplace.",
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
