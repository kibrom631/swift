const Faq = () => {
  const faqItems = [
    {
      question: "Trucking Industry Experts?",
      answer:
        "Our team understands the unique challenges of the trucking industry. We offer services like dispatching, compliance assistance, safety audits, and permit setup to keep your trucking business running smoothly.",
    },
    {
      question: " Immigration Service?",
      answer:
        "Our mission  is to simplify and support the immigration journey for our clients through expert guidance, personalized service, and unwavering dedication. We aim to provide efficient, accurate, and reliable solutions, ensuring our clients feel empowered and confident every step of the way.",
    },
    {
      question: "Small Business Setup?",
      answer:
        "We're passionate about helping entrepreneurs realize their dreams. From business planning and licensing to website design and development, we provide end-to-end support to set up and grow your small business.",
    },
    {
      question: "Comprehensive Support?",
      answer:
        "At Swift File Solution, we offer comprehensive support, so you can focus on what matters most - driving your business forward. Our solutions are designed to meet your specific needs..",
    },
    {
      question: "Client-Centered Approach?",
      answer:
        "Your success is our priority. We provide personalized attention and expert guidance, ensuring your business thrives in the competitive trucking industry.",
    },
    
  ];

  return (
    <div className="accordion accordion-style-three md-mt-60" id="accordionOne">
      {faqItems.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${
                index === 2 ? "not-collapsed" : "collapsed"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse${index}`}
            >
              {item.question}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${
              index === 0 ? "show" : ""
            }`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
