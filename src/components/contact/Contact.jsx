import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { useDarkModeContext } from "../hooks/DarkModeContext";

const Contact = () => {
  const { isLightMode } = useDarkModeContext();
  const [message, setMessage] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const email = document.getElementById("email_id").value;
    const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,6}/;
    if (!regex.test(email)) {
      setMessage("The e-mail is invalid.");
      return;
    }

    emailjs
      .sendForm(
        "service_yvuxwyb",
        "template_rzi3jfl",
        form.current,
        "78mFX6kB5wZSa8pQF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Your message has been sent!");

          document.getElementById("name").value = "";
          document.getElementById("email_id").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
        },
        (error) => {
          console.log(error.text);
          setMessage("There was an error sending your message.");
        }
      );
  };

  setTimeout(() => {
    setMessage("");
  }, 5000);

  return (
    <section className={`contact-container mt-[8rem] flex justify-center`}>
      <form
        ref={form}
        onSubmit={sendEmail}
        className={`contact-form ${isLightMode ? "text-[#202023] for-light" : "text-[#edebe6] for-dark"
          } mb-28 max-sm:mb-12`}
      >
        <div className="ctn">
          <h1 className="contact-title pb-2 text-2xl font-bold text-center">
            Contact
          </h1>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email_id" id="email_id" required />
          </div>
          <div className="field">
            <label>Subject</label>
            <input type="text" name="subject" id="subject" required />
          </div>
          <div className="field">
            <label>Message</label>
            <textarea
              type="text"
              name="message"
              id="message"
              rows={7}
              required
            />
          </div>
          <div className="btn flex justify-center">
            <button
              type="submit"
              className={`py-2 pr-6 pl-6 rounded-xl ${isLightMode
                  ? "bg-[#f2f2f2] hover:bg-[#2c2c2c] hover:text-white"
                  : "bg-[#2c2c2c] hover:bg-[#f2f2f2] hover:text-black"
                } duration-700`}
            >
              Send
            </button>
          </div>
          <p className="mt-4 text-center">{message}</p>
        </div>
      </form>
    </section>
  );
};

export default Contact;
