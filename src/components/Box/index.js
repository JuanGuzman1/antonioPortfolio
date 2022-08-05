import React from "react";

function Box() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach={"geometry"} args={[3, 3, 3]} />
      <meshLambertMaterial attach={"material"} color="#8A3FFC" />
    </mesh>
  );
}

export default Box;
