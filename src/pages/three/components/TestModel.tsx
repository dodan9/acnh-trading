import { ThreeElements, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const TestModel = (props: ThreeElements["mesh"]) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const model = useLoader(
    GLTFLoader,
    "/src/pages/three/models/NpcNmlOcpZucker.glb"
  );
  // useFrame((state, delta, frame) => {
  //   // const mesh = model.scene.children[0];
  //   // mesh.rotation.y = mesh.rotation.z += 0.01;
  // });

  return (
    <>
      <primitive
        object={model.scene}
        scale={3}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      />
    </>
  );
};

export default TestModel;
