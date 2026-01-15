import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e378gke",
        "template_dob47ok",
        form.current,
        "M6UMlwqj8m3hUra9p"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="page">
      <h1>Contact</h1>

      <div className="contact-card">
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-row">
            <input
              type="text"
              name="user_name"
              placeholder="Full name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email address"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">
            <IoIosSend /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
