import React from "react";
import Header from "../../components/Header";
import {
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillFacebook,
} from "react-icons/ai";

function About() {
  return (
    <div className="mb-20">
      <Header title="About me" />
      <div className="mt-20 flex flex-row justify-between">
        <div className="ml-11">
          <p className="font-sans m-9 font-medium text-2xl text-center">
            I am an Unreal Engine developer and 3D artist. I have been in
            videogames field for almost 2 years and worked on over 5 indie
            titles as freelancer.
          </p>
          <p className="font-sans m-9 font-medium text-2xl text-center">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
          </p>
          <p className="font-sans m-9 font-medium text-2xl text-center">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
          </p>
        </div>

        <div>
          <div className="w-72 h-72 mr-11 z-10 transform transition delay-0 duration-300 hover:scale-125 ">
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
        </div>
      </div>
    </div>
  );
}

export default About;
