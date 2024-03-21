import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import { SpinnerCircularFixed } from "spinners-react";

import { ToastContainer, toast } from "react-toastify";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true); // Start loading
      setIsSubmit(true); // Set isSubmit to true when form is submitted
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        console.log(data);
        toast.success("Email sent successfully!"); // Show success toast
        resetForm(); // Reset the form
      } catch (error) {
        console.error(error);
        toast.error("An error occurred while sending the email."); // Show error toast
      } finally {
        setIsLoading(false); // Stop loading
        setIsSubmit(false); // Reset isSubmit to false after submission
      }
    },
  });

  return (
    <>
      <div className="col-lg-12 form-widget mb-300">
        <h4
          className="hero-heading text-white text-center mb-50 "
          style={{ fontSize: "40px" }}
        >
          <span>
            Any question? <br /> Send us message.
          </span>
        </h4>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsSubmit(true);
            formik.handleSubmit();
          }}
          action="#"
          className="position-relative me-xxl-5"
        >
          <input
            type="text"
            placeholder="Enter your Name"
            style={{ marginBottom: "10px" }}
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {isSubmit && formik.errors.name ? (
            <div style={{ color: "red", marginBottom: "20px" }}>
              {formik.errors.name}
            </div>
          ) : null}

          <input
            type="email"
            placeholder="Enter your Email"
            style={{ marginBottom: "10px" }}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {isSubmit && formik.errors.email ? (
            <div style={{ color: "red", marginBottom: "20px" }}>
              {formik.errors.email}
            </div>
          ) : null}

          <input
            placeholder="Enter your Message"
            style={{
              paddingBottom: "30px",
              height: "100px",
              marginBottom: "10px",
            }}
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
          {isSubmit && formik.errors.message ? (
            <div style={{ color: "red", marginBottom: "20px" }}>
              {formik.errors.message}
            </div>
          ) : null}
          <button
            type="submit"
            className="fw-500"
            style={{
              height: "50px",
              width: "200px",
              margin: "auto",
              marginTop: "20px",
            }}
            disabled={isLoading} // Disable the button while loading
          >
            {isLoading ? (
              <SpinnerCircularFixed
                size={20}
                thickness={200}
                speed={200}
                color="white"
                enabled
                className="me-2"
              />
            ) : null}
            Send Message
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default ContactForm;
