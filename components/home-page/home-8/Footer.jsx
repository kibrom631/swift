import { useState } from "react";

const footerLinks = [
  {
    title: "Trucking Industry",
    links: [
      { label: "Dispatching Services", href: "/" },
      { label: "DOT (Department of Transportation) Audits and Consultation", href: "/" },
      { label: "Carrier Packet Set up", href: "/" },
      { label: "Owner-Operator Agreement Assistant", href: "/" },
      { label: "UCR (Unified Carrier Registration)", href: "/" },
      { label: "IFTA", href: "/" },
      { label: "MC-150 Update", href: "/" },
      { label: "Permit and Licensing Setup", href: "/" },
    ],
  },
  {
    title: "Immigration services ",
    links: [
      { label: "Asylum Application Assistance", href: "/" },
      { label: "N-400 Naturalization Application Support", href: "/" },
      { label: "Work Permit (Form I-765) Filing Assistance", href: "/" },
      { label: "I-130 Petition for Alien Relative Support", href: "/" },
      { label: "Adjustment of Status (Form I-485) Assistance", href: "/" },
      { label: "Fiancé(e) Visa (Form I-129F) Filing Support", href: "/" },
      { label: "Visa Extension/Renewal Assistance", href: "/" },
      { label: "Green Card Renewal (Form I-90) Support", href: "/" },
    ],
  },
 
  {
    title: "Small businesses ",
    links: [
      { label: "Small business", href: "/" },
      { label: "Documentation and compliance", href: "/" },
      { label: "Business Plan", href: "/" },
      { label: "Business registration and Licensing", href: "/" },
      { label: "Website design and Development", href: "/" },
      { label: "Logo Creation", href: "/" },
    ],
  },
  {
    title: "Tax Filing",
    links: [
      { label: "Individual  tax filing ", href: "/" },
      { label: "Self employed tax filing ", href: "/" },
      { label: "Business tax filing ", href: "/" },
      { label: "Self-Employment Tax Filing", href: "/" },
    ],
  },
];

const Footer = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (title) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };


  return (
    <>

      {footerLinks.map((section, index) => (
        <div  className={`col-lg-3 col-sm-4 ms-auto mb-30`} key={section.title}>
          <h5 className="footer-title text-white fw-500">{section.title}</h5>
          <ul className="footer-nav-link style-none">
            {section.links.slice(0, expandedSections[section.title] ? section.links.length : 5).map((link) => (
              <li key={link.label}>
                <a href={link.href} style={{ fontSize: "14px" }}>{link.label}</a>
              </li>
            ))}
            {section.links.length > 5 && (
              <li key="more" onClick={() => toggleSection(section.title)}>
                <span style={{ fontSize: "14px", cursor: "pointer" }}>
                 {expandedSections[section.title] ? "Less" : "More"}
                </span>
              </li>
            )}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer;
