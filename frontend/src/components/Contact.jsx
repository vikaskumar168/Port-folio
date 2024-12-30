import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" }); // Clear form after submission
  };

  return (
    <div
      id="Services"
      className="p-20 flex flex-col items-center justify-center bg-slate-900"
    >
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-800">
        Contact Me
      </h1>

      <div data-aos="fade-left" className="flex mt-2 gap-2">
        <a
          href="https://github.com/vikaskumar168/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-fuchsia-700 hover:text-fuchsia-500 rounded-full glow p-2"
        >
          <AiFillGithub className="text-[28px]" />
        </a>
        <a
          href="https://www.linkedin.com/in/vikas-kumar-704049233/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-fuchsia-700 hover:text-fuchsia-500 rounded-full glow p-2"
        >
          <FaLinkedin className="text-[28px]" />
        </a>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-10 bg-slate rounded-lg shadow-lg p-8 w-full max-w-md text-gray-700"
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block font-semibold mb-2 text-fuchsia-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block font-semibold mb-2 text-fuchsia-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block font-semibold mb-2 text-fuchsia-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            rows="5"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-fuchsia-700 hover:bg-fuchsia-500 text-white font-bold rounded focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
