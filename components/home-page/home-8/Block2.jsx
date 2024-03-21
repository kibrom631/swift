
const Block2 = () => {

  const Services = [
    {
      title : "Trucking Industry",
      features : [
        "Dispatching Services",
        "USDOT Compliance Assistance",
        "Safety and Compliance Audits",
        "IFTA Filing",
        "Complete Trucking Business Setup"
      ]
    },
    {
      title : "Small Business",
      features : [
        "Business Plan",
        "Documentation and Compliance",
        "Website Design and Development",
        "Businesse Setup and Licensing",
        "Tax filing Services"
      ],
  
    }
    , {
      title : "Immigration Services",
      features : [
        "Immigration applications",
        "Translation Services",
      ]
    }
  
  ]

  return (
    <>
      {Services.map((item, index) => (
        <div
          key={index}
          className={`col-lg-4 col-md-6 ${index === 1 ? "active" : ""}`}
        >
          <div
            className="card-style-twelve position-relative mt-40" style={{height:"350px"}}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <h4 className="text-white  mb-30">{item.title}</h4>
            <div className="block-style-three " data-aos="fade-left">
              <ul className="style-none list-item fs-18 text-white opacity-75">
                {item.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>{" "}
            
          </div>
        </div>
      ))}
    </>
  );
};

export default Block2;
