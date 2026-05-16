import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setStatus("Message sent successfully");
        form.current.reset();
      })
      .catch(() => {
        setStatus("Failed to send message");
      });
  };

  return (
    <section
      id="contact"
      bg="white"
      className="bg-[#0a0a0a] py-28 px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-5xl text-white font-black text-center mb-14">
          Contact
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-5 rounded-xl border bg-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-5 rounded-xl border bg-white outline-none"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Message"
            required
            className="w-full p-5 rounded-xl border bg-white outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue text-white py-5 rounded-xl font-medium hover:bg-zinc-800 transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center font-medium">
              {status}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;