import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer mt-16 bg-white h-56 flex items-center w-full absolute b-0">
      <div className="container">
        <div>
          <p className="text-6xl text-black">
            <Link to="/">
              Movies<span className="text-purple-500">Lib</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
