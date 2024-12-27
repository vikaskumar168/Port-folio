import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-300 sticky top-0 z-50 bg-white shadow-lg">
      <nav className="p-4">
        
        <ul className="flex space-x-4 items-center justify-between pl-[184px] pr-56">
          <li className="pl-16">Introduction</li>
          <li className="pl-16">Skills</li>
          <li className="pl-16">Resume</li>
          <li className="pl-16">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
