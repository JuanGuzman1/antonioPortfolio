import React from "react";
import Navbar from "../../components/Navbar";

function Header() {
  return (
    <div className="bg-black flex flex-1">
      <div className="flex flex-1 flex-row relative justify-between align-middle shadow-lg shadow-indigo-500/50">
        <div className="self-center ml-5 ">
          <h1 className="text-white font-sans font-semibold tracking-wider text-3xl">
            Antonio Coronado
          </h1>
          <h1 className=" text-[color:#8A3FFC] animate-pulse shadow-lg shadow-indigo-500/50 font-mono font-semibold tracking-tight text-xl">
            Unreal Engine Developer & 3D Artist
          </h1>
        </div>

        <div className="w-72 h-72 mt-5 mb-5 mr-40 z-10 transform transition delay-0 duration-300 hover:scale-125 ">
          <img
            alt="noImage"
            className="rounded-full shadow-lg shadow-indigo-500/50 "
            src="https://img1.wsimg.com/isteam/ip/11c51d32-77d7-415c-a795-43a90fa71b14/fotoPerfil.jpg"
          />
        </div>
      </div>
      {/* <svg
        className="absolute"
        viewBox="0 0 350 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#8A3FFC"
          d="M31.5,-47C38.4,-44.6,39.9,-31.7,47.9,-20.1C55.9,-8.5,70.5,1.9,71.3,11.7C72.1,21.5,59.1,30.7,46.5,34.1C33.9,37.4,21.7,34.9,9.6,43.2C-2.5,51.5,-14.4,70.7,-24.2,72.4C-34,74.1,-41.6,58.3,-49.7,45.2C-57.8,32,-66.4,21.4,-72.3,7.9C-78.1,-5.6,-81.3,-22.1,-73.4,-31.1C-65.5,-40.1,-46.7,-41.7,-32.6,-40.8C-18.5,-39.9,-9.3,-36.6,1.5,-39C12.3,-41.3,24.6,-49.4,31.5,-47Z"
          transform="translate(280 45)"
        />
      </svg> */}
      {/* navbar */}
      <Navbar />
    </div>
  );
}

export default Header;
