import React from "react";

const Navbar = () => {
  return (
    <div className=" sticky top-0 z-50 bg-slate-900 shadow-lg">
      <nav className="p-4">
        <ul className="flex space-x-4 items-center justify-between pl-[184px] pr-56">
          <li className="pl-16 text-fuchsia-700 font-semibold">Introduction</li>
          <li className="pl-16 text-fuchsia-700 font-semibold">Skills</li>
          <li className="pl-16 text-fuchsia-700 font-semibold">Resume</li>
          <li className="pl-16 text-fuchsia-700 font-semibold">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
