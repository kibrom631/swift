import Image from "next/image";
const FancyFeatures = () => {
  const items = [
    "Asylum Application Assistance.",
    "N-400 Naturalization Application Support.",
    "Work Permit (Form I-765) Filing Assistance.",
    "I-130 Petition for Alien Relative Support.",
  ];
  const items2 = [
    "Adjustment of Status (Form I-485) Assistance.",
    "Fiancé(e) Visa (Form I-129F) Filing Support.",
    "Visa Extension/Renewal Assistance.",
    "Green Card Renewal (Form I-90) Support.",
  ];

  return (
    <div className="row">
      <div className="col-xl-5 col-lg-6 ms-auto order-lg-last">
        <div className="block-style-one ps-xxl-0" data-aos="fade-left">
          <div className="title-style-one">
           
            <h2 className="main-title fw-normal text-white m0" style={{fontSize:"40px"}}>
            Immigration Service 
            </h2>
          </div>
          {/* /.title-style-one */}
          <p className="text-md text-white pt-60 pb-45 lg-pb-10" style={{marginTop:"-30px", fontSize:"13px"}}>
          Swift File Solutions, your premier destination for professional immigration filing services. We understand the complexities and challenges individuals face when navigating the immigration process, which is why were dedicated to providing comprehensive support tailored to your needs.
          </p>
          <p style={{marginTop:"-30px", color:"#fff"}}>Our range of services includes:</p>
          
          <ul className="style-none list-item fs-18">
          <div className="row"> 
            <div  className="col-lg-6 ms-auto" >
            {items.map((item, i) => (
              <li key={i} style={{color:"#808080", fontSize:"13px"}}>{item}</li>
            ))}
            </div>
            <div  className="col-lg-6 ms-auto" >
            {items2.map((item, i) => (
              <li key={i} style={{color:"#808080", fontSize:"13px"}}>{item}</li>
            ))}
            </div>
          </div>
          </ul>
        </div>
        {/* /.block-style-one */}
      </div>
      {/* End .col-xl-5 */}

      <div className="col-lg-6 col-md-10 order-lg-first" data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative md-mt-40">
          <Image
            src="/images/assets/immi.png"
            width={700}
            height={400}
            alt="media"
            className="lazy-img"
            style={{borderRadius:"10px"}}
          />
        </div>
        {/* /.img-meta */}
      </div>
    </div>
  );
};

export default FancyFeatures;
