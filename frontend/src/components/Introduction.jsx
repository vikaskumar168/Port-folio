import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import img from "../assets/Profilephoto.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Introduction = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 950,
    });
  }, []);
  return (
    <div className="fullscreen-div h-full flex flex-col lg:flex-row justify-between items-center text-center lg:text-start text-white gap-5 lg:gap-28 px-10 lg:px-56">
      <div className="flex flex-col justify-center items-center lg:items-start lg:py-40">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal"
        >
          Hi, I am <span className="text-fuchsia-600">Vikas Kumar</span>
        </h1>
        <p data-aos="fade-left" className=" text-[28px] font-normal">
          I am final year Bacheor's of Technology student in computer science
          engineering department at National Institute of Technology,
          Patna(NITP). I am a passionate programmer and a web developer.
        </p>
        <div data-aos="fade-left" className="flex mt-8 gap-2">
          <a
            href="https://github.com/vikaskumar168/"
            className="text-fuchsia-700 hover:text-fuchsia-500 rounded-full glow p-2"
          >
            <AiFillGithub className="text-[28px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/vikas-kumar-704049233/"
            className="text-fuchsia-700 hover:text-fuchsia-500 rounded-full glow p-2"
          >
            <FaLinkedin className="text-[28px]" />
          </a>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src={img}
        width={290}
        height={290}
        className="rounded-full border-2 p-1 border-fuchsia-500 img_glow"
      />
    </div>
  );
};

export default Introduction;
