import Link from "next/link";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const servicesData = [
    {
       bgColor: "rgba(255, 171, 51, 0.18)",
       iconSrc: <LocalShippingIcon color="warning" fontSize="large" />,
       title: "Truck Dispatching",
       description:
         "We provide efficient and reliable truck dispatching services to ensure your fleet is optimized for maximum efficiency. Our dispatchers are experienced and skilled in managing routes, schedules, and communication to keep your operations running smoothly.",
    },
    {
       bgColor: "rgba(100, 219, 226, 0.18)",
       iconSrc: <AssuredWorkloadIcon color="info" fontSize="large" />,
       title: "USDOT Compliance Assistance and Updates",
       description:
         "Staying compliant with USDOT regulations is essential for the safety and success of your business. We offer expert assistance and timely updates to help you navigate the complex world of compliance.",
    },
    {
       bgColor: "rgba(255, 160, 194, 0.18)",
       iconSrc: <SafetyCheckIcon color="info" fontSize="large" />,
       title: "Safety and Compliance Audits",
       description:
         "Our team conducts thorough safety and compliance audits to identify areas of improvement in your operations. We provide actionable insights and guidance to enhance safety and regulatory adherence.",
    },
    {
       bgColor: "rgba(255, 171, 51, 0.18)", // Assuming you want to reuse the same bgColor for the next item
       iconSrc: <WorkspacePremiumIcon color="warning" fontSize="large" />,
       title: "Permit and Licensing Setup",
       description:
         "Navigating the permitting and licensing requirements in the trucking industry can be overwhelming. We simplify the process by handling all the paperwork and ensuring your business is fully compliant.",
    },
    {
       bgColor: "rgba(100, 219, 226, 0.18)", // Assuming you want to reuse the same bgColor for the next item
       iconSrc: <DoneAllIcon color="info" fontSize="large" />,
       title: "Complete Trucking Business Setup",
       description:
         "Starting a trucking business from scratch? We've got you covered. From business planning and registration to acquiring the right equipment, we offer end-to-end support to set up your trucking venture for success.",
    },
   ];


// const servicesData = [
//   {
//     bgColor: "rgba(255, 171, 51, 0.18)",
//     iconSrc: "/images/icon/icon_01.svg",
//     title: "Individual Tax Filing:",
//     description:
//       "Simplify your tax season with our Individual Tax Filing service. Our experienced team ensures accurate and efficient filing for all types of income, making tax time stress-free.",
//   },
//   {
//     bgColor: "rgba(100, 219, 226, 0.18)",
//     iconSrc: "/images/icon/icon_02.svg",
//     title: "Self-Employed Tax Filing:",
//     description:
//       "For self-employed individuals, our specialized Tax Filing service simplifies the process. We maximize deductions and ensure compliance, letting you focus on growing your business.",
//   },
//   {
//     bgColor: "rgba(255, 160, 194, 0.18)",
//     iconSrc: "/images/icon/icon_03.svg",
//     title: "Business Tax Filing:",
//     description:
//       "Streamline your business taxes with our comprehensive Tax Filing service. From startups to corporations, we handle filings efficiently, keeping you compliant and financially optimized.",
//   },
 
// ];

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
                      {service.iconSrc}

              {/* <img src={service.iconSrc} alt="icon" className="lazy-img" /> */}
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
