import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import Email from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const BlockContact = () => {
  const addressBlocks = [
    {
      icon: <Email />,
      title: "Email Address",
      link: "swiftfilesolutions@gmail.com",
      delay: "100",
    },
    {
      icon: <PhoneIcon />,
      title: "Contact Info",
      content: "Open a chat or give us call at",
      link: "tel:+1 (720) -329 – 0379 ",
      delay: "200",
    },
    {
      icon: <FacebookIcon />,
      title: "Facebook Page",
      content: "live chat service",
      subheading: "Swift File Solutions",
      delay: "300",
      link: "https://www.facebook.com/profile.php?id=61551085376374&mibextid=dGKdO6",
      delay: "300",
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div
          className="col-md-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div
              className="icon rounded-circle d-flex align-items-center justify-content-center m-auto"
              style={{ backgroundColor: "#ffa0a9" }}
            >
              {block.icon}
            </div>
            <h5 className="title text-white" style={{ fontSize: "15px" }}>
              {block.title}
            </h5>
            <p>
              {/* {block.content} <br /> */}
              {block.link && (
                <a
                  href={block.link}
                  style={{ color: "#fff", fontSize: "15px"}}
                  className={
                    block.link.includes("tel:") ? "call" : "webaddress"
                  }
                >
                  {block.title === "Facebook Page"
                    ? block.subheading
                    : block.link.replace("tel:", "")}
                </a>
              )}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact;
