import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer mt-16 bg-white h-56 flex items-center w-full absolute b-0">
      <div className="container">
        <div className="flex justify-between items-center flex-col  md:flex-row  gap-8 md:gap-0 ">
          <p className="text-5xl sm:text-6xl text-black">
            <Link to="/">
              Movies<span className="text-purple-500">Lib</span>
            </Link>
          </p>
          <ul className="flex flex-col gap-5 xs:flex-row">
            <Link to="https://github.com/MatheusKemuel/MoviesLib" target="_blank">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="39"
                  height="39"
                  fill="rgb(180, 78, 211)"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                <li className="text-purple-700">MatheusKemuel</li>
              </div>
            </Link>
            <Link
              to="https://www.linkedin.com/in/matheus-kemuel-a037871b2/"
              target="_blank"
            >
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="34"
                  width="34"
                  viewBox="0 0 448 512"
                  fill="rgb(180, 78, 211)"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
                <li className="text-purple-700">Matheus Kemuel</li>
              </div>
            </Link>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-1 w-full flex justify-center text-gray-500 font-bold text-[10px] text-center">
        Copyright &copy; 2024, Matheus Kemuel. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
