import React from "react";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Chatbot from "../components/Chatbot";

const HomePage = () => {
  return (
    <>
      <Introduction />
      <Skills />
      <Resume />
      <Contact />
      <Chatbot />
    </>
  );
};

export default HomePage;
