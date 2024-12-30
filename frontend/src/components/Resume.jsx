import React from "react";

const Resume = () => {
  return (
    <div
      id="Services"
      className="p-20 flex flex-col items-center justify-center bg-slate-900"
    >
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-800">
        Resume
      </h1>
      <a
        href="./../public/cv_Vikas_Kumar.pdf" 
        download="cv_Vikas_Kumar.pdf" 
        className="bg-fuchsia-500 hover:bg-fuchsia-800 text-white font-bold py-2 px-4 rounded"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
