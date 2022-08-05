import React, { useEffect, useState, useRef } from "react";
import Header from "./header";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const element = useRef();
  const element2 = useRef();

  const initializeAnimation = () => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    observer.observe(element.current);
  };

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
    initializeAnimation();
    initializeAnimation2();
  }, []);

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <div className="">
        <h1 className="mt-40 ml-24 mb-10 font-bold tracking-wider text-4xl font-sans">
          Best Achievements
        </h1>

        {/* achievement 1 */}
        <div className="flex flex-row justify-between snap-y snap-mandatory snap-start">
          <div className="h-screen w-3/4 bg-black ">
            <iframe
              className="shadow-xl shadow-indigo-500/50"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/6eXyTL8-2_A?controls=0&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&playlist=6eXyTL8-2_A"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div className="h-screen w-1/3 bg-black flex flex-col p-8 justify-center items-center">
            <div
              ref={element}
              className={`transition-all delay-100 duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="text-indigo-500 mb-5 animate-pulse font-sans text-center font-semibold tracking-widest text-4xl shadow-xl shadow-indigo-500/50">
                Medieval Apocalypse
              </h1>
              <p className="text-white">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
                massa egestas mollis varius; dignissim elementum. Mollis
                tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                Hendrerit parturient habitant pharetra rutrum gravida porttitor
                eros feugiat. Mollis elit sodales taciti duis praesent id.
                Consequat urna vitae morbi nunc congue.
              </p>
            </div>
          </div>
        </div>
        {/* achievement 2 */}
        <div className="flex flex-row justify-between snap-y snap-mandatory snap-start">
          <div className="h-screen w-1/3 p-8 bg-black flex justify-center items-center flex-col">
            <div>
              <h1 className="text-indigo-500 mb-5 animate-pulse font-sans text-center font-semibold tracking-widest text-4xl shadow-xl shadow-indigo-500/50">
                ADragons Call
              </h1>
              <p className="text-white">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
                massa egestas mollis varius; dignissim elementum. Mollis
                tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                Hendrerit parturient habitant pharetra rutrum gravida porttitor
                eros feugiat. Mollis elit sodales taciti duis praesent id.
                Consequat urna vitae morbi nunc congue.
              </p>
            </div>
          </div>
          <div className="h-screen w-3/4 bg-black">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/6eXyTL8-2_A?controls=0&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&playlist=6eXyTL8-2_A"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>

        {/* software used */}
        <div>
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
