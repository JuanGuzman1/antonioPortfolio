import React, { useEffect, useState, useRef } from "react";
import PortfolioItemLeft from "../../components/PortfolioItems/PortfolioItemLeft";
import PortfolioItemRight from "../../components/PortfolioItems/PortfolioItemRight";
import Header from "./header";
import { portfolioData } from "../../assets/data";

const Home = () => {
  const [isVisible2, setIsVisible2] = useState(false);
  const element2 = useRef();

  const initializeAnimation2 = () => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setIsVisible2(true);
      } else {
        setIsVisible2(false);
      }
    });

    observer.observe(element2.current);
  };

  useEffect(() => {
    initializeAnimation2();
  }, []);

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <div className="">
        <div className="bg-black pt-40 pl-24 pb-10 ">
          <h1 className="font-bold tracking-wider text-4xl text-white font-sans">
            Best Achievements
          </h1>
        </div>

        {/* achievement 1 */}
        <PortfolioItemRight data={portfolioData[0]} />
        {/* achievement 2 */}
        <PortfolioItemLeft data={portfolioData[1]} />

        {/* software used */}
        <div className="mb-20">
          <h1 className="mt-40 ml-24 mb-16 font-bold tracking-wider text-4xl font-sans">
            Software i use
          </h1>

          <div
            ref={element2}
            className={`ml-40 gap-10 grid grid-cols-3 transition-all delay-500 duration-500 ${
              isVisible2 ? "opacity-100  " : "opacity-0"
            }`}
          >
            <div className="flex items-center transform transition delay-0 duration-300 hover:scale-125 ">
              <img
                alt="noImage"
                width={200}
                height={180}
                src="https://img1.wsimg.com/isteam/ip/11c51d32-77d7-415c-a795-43a90fa71b14/blob.png"
              />
            </div>
            <div className="flex items-center transform transition delay-0 duration-300 hover:scale-125 ">
              <img
                alt="noImage"
                width={350}
                height={350}
                src="https://img1.wsimg.com/isteam/ip/11c51d32-77d7-415c-a795-43a90fa71b14/maya.png"
              />
            </div>
            <div className="flex items-center transform transition delay-0 duration-300 hover:scale-125 ">
              <img
                alt="noImage"
                width={300}
                height={300}
                src="https://img1.wsimg.com/isteam/ip/11c51d32-77d7-415c-a795-43a90fa71b14/zbrush.png"
              />
            </div>
            <div className="flex items-center transform transition delay-0 duration-300 hover:scale-125 ">
              <img
                alt="noImage"
                width={200}
                height={200}
                src="https://img1.wsimg.com/isteam/ip/11c51d32-77d7-415c-a795-43a90fa71b14/blob-0002.png"
              />
            </div>
            <div className="flex items-center transform transition delay-0 duration-300 hover:scale-125 ">
              <img
                alt="noImage"
                width={300}
                height={300}
                src="https://img1.wsimg.com/isteam/ip/11c51d32-77d7-415c-a795-43a90fa71b14/ps.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
