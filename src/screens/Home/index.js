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
      <div className="pt-40">
        <div className="pl-24 pb-20">
          <h1 className="font-bold tracking-wider text-4xl text-black font-sans">
            About me
          </h1>
          <p className="font-sans mt-9 font-medium text-2xl">
            I am an Unreal Engine developer and 3D artist. I have been in video
            games field for almost 2 years and worked on over 5 indie titles as
            freelancer.
          </p>
          <p className="font-sans mt-9 font-medium text-2xl">
            I still remember when I tried the spiderman 2 game for the first
            time on my PS2 console, I was amazed and I didn't know it then, but
            my destiny had been marked with a passion, video games.
          </p>
          <p className="font-sans mt-9 font-medium text-2xl">
            I'm a fan of open world games and RPGs in general. I usually spend
            weekend afternoons playing dungeons and dragons with my friends,
            creating unforgettable adventures and unique characters.
          </p>
          <p className="font-sans mt-9 font-medium text-2xl">
            I am highly self-taught and always looking to learn new skills and
            gain new knowledge.
          </p>
          <p className="font-sans mt-9 font-medium text-2xl">
            My favorite games of all time are Skyrim, The Witcher 3, and Red
            Dead Redemption 1. My favorite book is “The name of the wind”.
          </p>
        </div>

        <div className="bg-black pt-40 pl-24 pb-10 ">
          <h1 className="font-bold tracking-wider text-4xl text-white font-sans">
            Best Achievements
          </h1>
        </div>

        {/* achievement 1 */}
        <PortfolioItemRight data={portfolioData[1]} />
        {/* achievement 2 */}
        <PortfolioItemLeft data={portfolioData[2]} />

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
