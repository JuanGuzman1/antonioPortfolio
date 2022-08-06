import React, { useRef, useEffect, useState } from "react";

function PortfolioItemLeft(props) {
  const { data } = props;

  const [isVisible, setIsVisible] = useState(false);
  const element = useRef();
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
  useEffect(() => {
    initializeAnimation();
  }, []);
  return (
    <div className="flex flex-row justify-between snap-y snap-mandatory snap-start">
      <div className="h-screen w-1/3 bg-black flex flex-col p-8 justify-center items-center">
        <div
          ref={element}
          className={`transition-all delay-100 duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-indigo-500 mb-5 animate-pulse font-sans text-center font-semibold tracking-widest text-4xl shadow-xl shadow-indigo-500/50">
            {data.title}
          </h1>
          <p className="text-white">{data.text}</p>
        </div>
      </div>
      <div className="h-screen w-3/4 bg-black ">
        <iframe
          className="shadow-xl shadow-indigo-500/50"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${data.videoID}?controls=0&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&playlist=${data.videoID}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
}

export default PortfolioItemLeft;
