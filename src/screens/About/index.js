import React from "react";
import Header from "../../components/Header";
import {
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillFacebook,
} from "react-icons/ai";

const PDF = require("../../assets/CV_AntonioCoronado.pdf");

function About() {
  return (
    <div className="mb-20">
      <Header title="Resume" />
      <div className="mt-20 ml-11 mr-11">
        <div
          className="flex flex-1 flex-col
        "
        >
          <embed src={PDF} width="100%" height="800" type="application/pdf" />

          <a
            href={PDF}
            download
            className="w-1/2 p-5 bg-stone-600 m-10 text-center text-white"
          >
            Click to download
          </a>
        </div>

        {/* <div>
          <div className="w-60 h-60 mr-11 z-10 transform transition delay-0 duration-300 hover:scale-125 ">
            <img
              alt="noImage"
              className="rounded-full shadow-lg shadow-black"
              src="https://img1.wsimg.com/isteam/ip/11c51d32-77d7-415c-a795-43a90fa71b14/fotoPerfil.jpg"
            />
          </div>
          <div className="flex flex-row mt-10 justify-center">
            <AiFillLinkedin color="#0072b1" size={35} />
            <AiOutlineWhatsApp color="#25D366" size={35} />
            <AiFillFacebook color="#3b5998" size={35} />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default About;
