import Link from "next/link";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const FeatureData = [
  {
    id: 1,
    iconSrc: <LocalShippingIcon />,
    title: "Truck Dispatching",
    description:
      "We provide efficient and reliable truck dispatching services to ensure your fleet is optimized for maximum efficiency. Our dispatchers are experienced and skilled in managing routes, schedules, and communication to keep your operations running smoothly.",
  },
  {
    id: 2,
    iconSrc: <AssuredWorkloadIcon />,
    title: "USDOT Compliance Assistance and Updates",
    description:
      "Staying compliant with USDOT regulations is essential for the safety and success of your business. We offer expert assistance and timely updates to help you navigate the complex world of compliance.",
  },
  {
    id: 3,
    iconSrc: <SafetyCheckIcon />,
    title: "Safety and Compliance Audits",
    description:
      "Our team conducts thorough safety and compliance audits to identify areas of improvement in your operations. We provide actionable insights and guidance to enhance safety and regulatory adherence.",
  },
  {
    id: 4,
    iconSrc: <WorkspacePremiumIcon />,
    title: "Permit and Licensing Setup",
    description:
      "Navigating the permitting and licensing requirements in the trucking industry can be overwhelming. We simplify the process by handling all the paperwork and ensuring your business is fully compliant.",
  },
  {
    id: 5,
    iconSrc: <DoneAllIcon />,
    title: "Complete Trucking Business Setup",
    description:
      "Starting a trucking business from scratch? We've got you covered. From business planning and registration to acquiring the right equipment, we offer end-to-end support to set up your trucking venture for success.",
  },
];

const Features = () => {
  return (
    <>
      {FeatureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-6 col-md-6 mt-40"
          data-aos=""
          data-aos-delay={feature.id * 100}
        >
          <div className="card-style-three" style={{backgroundColor:"#151937", height:"350px"}}
          >
            <div className="icon d-flex align-items-end"  style={{ color: "white", fontSize: "2rem" }}>
              {/* <img src={feature.iconSrc} alt="icon" className="lazy-img" /> */}
              {feature.iconSrc}
            </div>
            <h6 className="mt-25 mb-20 text-white">{feature.title}</h6>
            <p className="mb-50 " style={{color:"grey", fontSize:"14px"}}>{feature.description}</p>
            {/* <Link href="/pages-menu/service-details">
              <img
                src="/images/icon/icon_18.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
