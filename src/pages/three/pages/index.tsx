import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import TestModel from "../components/TestModel";

const ThreeTest = () => {
  return (
    <>
      <div>3d 테스트</div>

      <Canvas camera={{ position: [2, 2, 1] }} shadows>
        <ambientLight />
        <pointLight position={[1, 1, 1]} />

        <TestModel position={[0, 0, 0]} />
        <OrbitControls target={[0, 0, 0]} />
        <axesHelper />
        <gridHelper />
        <Stats />
      </Canvas>
    </>
  );
};

export default ThreeTest;
