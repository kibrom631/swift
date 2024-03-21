const blocks = [
  {
    icon: "/images/icon/icon_75.png",
    crName: "BTC",
    crPoint: "1.34500",
    arrow: "up",
    crValue: "+14%",
    shape: "/images/shape/shape_103.svg",
    balance: "42,530.2310",
    title: "Trucking Industry",
  },
  {
    icon: "/images/icon/icon_76.png",
    crName: "DESH",
    crPoint: "1.42800",
    arrow: "down",
    crValue: "-11%",
    shape: "/images/shape/shape_104.svg",

    balance:
      "Truck Dispatching: We provide efficient and reliable truck dispatching services to ensure your fleet is optimized for maximum efficiency. Our dispatchers are experienced and skilled in managing routes, schedules, and communication to keep your operations running smoothly.",
  },
  {
    icon: "/images/icon/icon_77.png",
    crName: "BTC",
    crPoint: "1.34500",
    arrow: "up",
    crValue: "+14%",
    shape: "/images/shape/shape_105.svg",
    balance: "51,530.2310",
  },
  {
    icon: "/images/icon/icon_77.png",
    crName: "BTC",
    crPoint: "1.34500",
    arrow: "up",
    crValue: "+14%",
    shape: "/images/shape/shape_105.svg",
    balance: "51,530.2310",
  },
  {
    icon: "/images/icon/icon_77.png",
    crName: "BTC",
    crPoint: "1.34500",
    arrow: "up",
    crValue: "+14%",
    shape: "/images/shape/shape_105.svg",
    balance: "51,530.2310",
  },
];

const featureList = [
  {
    title: "Global Exchange Rates",
  },
  {
    title: "Make payments with Bank Transfer",
  },
  {
    title: "Instant Transaction",
  },
];

// Trucking Industry

// Dispaching Services

// USDOT Compliance Assistance

// Safety and Compliance Audits

// IFTA Filing

// Complete Trucking Business

// Setup

// +1 (720) -329 - 0379

// - 
// - 

// Accounting and Filing

// Servicess

// Small Business

// Imigration Sercies

// Business Plan

// - Immigration applications

// Documentation and Compliance

// - Translation Services

// Website Design and

// Development

// Businesse Setup and Licensing

// Tax filing Services


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
    title : "Imigration Sercies",
    features : [
      "Immigration applications",
      "Translation Services",
    ]
  }

]

const Block1 = () => {
  return (
    <>
      {Services.map((block, index) => (
        <div className="col-lg-4" style={{padding:""}} key={index}>
          <div className="trade-meta-block">
            {/* <div className="d-sm-flex justify-content-between">
              
              <div className="meta-point d-inline-flex align-items-center justify-content-between xs-mt-20">
                <div className="pe-lg-4">
                  <div className="cr-name text-uppercase">{block.crName}</div>
                  <div className="cr-point text-white opacity-75 fs-15">
                    {block.crPoint}
                  </div>
                </div>
                <div className="ms-5 text-center">
                  <div className={`arrow arrow-${block.arrow}`}>
                    {block.arrow === "up" ? (
                      <i className="bi bi-caret-up-fill" />
                    ) : (
                      <i className="bi bi-caret-down-fill" />
                    )}
                  </div>
                  <div className="cr-value">{block.crValue}</div>
                </div>
              </div>
            </div> */}
            <h4 className="text-white  mb-10">{block.title}</h4>
            <div className="block-style-three " data-aos="fade-left">
              <ul className="style-none list-item fs-18 text-white opacity-75">
                {block.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>{" "}
            {/* <div className="mt-15 d-sm-flex justify-content-between align-items-center">

              <div className="btc-balance xs-mt-10 text-white fw-500">
                <span className="counter">{block.balance}</span>
              </div>
            </div> */}
          </div>
          {/*  /.trade-meta-block */}
        </div>
      ))}
    </>
  );
};

export default Block1;
