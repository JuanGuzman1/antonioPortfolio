import React from "react";
import Navbar from "../Navbar";
import { Canvas } from "@react-three/fiber";
import Box from "../Box";
import { OrbitControls } from "@react-three/drei";

function Header(props) {
  const { title } = props;
  return (
    <div className="bg-black flex flex-1">
      <div className="flex flex-1 flex-row justify-between align-middle shadow-lg shadow-indigo-500/50">
        <div className="self-center ml-10 pt-32 pb-24">
          <h1 className="text-white font-sans font-semibold tracking-wider text-4xl">
            {title}
          </h1>
        </div>
        <div className="h-80 mr-16">
          <Canvas className="h-80">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Box />
          </Canvas>
        </div>
      </div>

      {/* navbar */}
      <Navbar />
    </div>
  );
}

export default Header;
