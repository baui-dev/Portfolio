import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import "./3DObject.css";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/src/assets/3d/moon.glb");
  const modelRef = useRef<THREE.Group>(null);
  const [rotationSpeed, setRotationSpeed] = useState(0.0005); // Standard rotation speed
  const [mouseMoving, setMouseMoving] = useState(false);
  const [stopDelay, setStopDelay] = useState<number | null>(null);
  const [prevMousePosition, setPrevMousePosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  // Continuous rotation logic
  useFrame(() => {
    if (modelRef.current) {
      // If the mouse is moving, set rotation speed to 0
      if (mouseMoving) {
        setRotationSpeed(0); // Stop rotating when the mouse is moving
      } else {
        // Gradually increase the rotation speed back to the standard speed after delay
        if (stopDelay) {
          clearTimeout(stopDelay); // Clear previous timeout if mouse is moving again
        }
        setStopDelay(
          setTimeout(() => {
            setRotationSpeed(0.0005); // Set to the standard speed after the delay
          }, 1500)
        ); // 1-second delay before resuming rotation
      }

      // Rotate model based on the current rotation speed
      modelRef.current.rotation.y += rotationSpeed;
    }
  });

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (modelRef.current) {
        const deltaX = (event.clientX - prevMousePosition.x) * 0.0005; // Scale factor for sensitivity
        const deltaY = (event.clientY - prevMousePosition.y) * 0.0005; // Scale factor for sensitivity

        // Apply the delta to the rotation
        modelRef.current.rotation.x -= deltaY; // Subtract for correct orientation
        modelRef.current.rotation.y -= deltaX; // Subtract for correct orientation

        // Update previous mouse position
        setPrevMousePosition({ x: event.clientX, y: event.clientY });
      }
    };

    const handleMouseEnter = () => {
      setMouseMoving(true);
    };

    const handleMouseLeave = () => {
      setMouseMoving(false);
    };

    // Prevent right-click context menu
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault(); // Prevent the context menu from appearing
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("contextmenu", handleContextMenu); // Add event listener for right-click

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("contextmenu", handleContextMenu); // Clean up event listener
    };
  }, [prevMousePosition]);

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={1} // Fixed scale
      position={[-90, 0, 0]} // Adjust position if necessary
    />
  );
};

const Scene = () => {
  return (
    <div className="canvas-container">
      <Canvas>
        {/* Camera setup */}
        <PerspectiveCamera makeDefault position={[-560, 2, 5]} fov={50} />
        {/* Lighting setup */}
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[5, 5, 5]} castShadow />
        <spotLight
          position={[5, 10, 5]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <hemisphereLight
          intensity={0.5}
          groundColor={0x444444}
          color={0xffffff}
        />
        {/* Model */}
        <Model />
        {/* Camera controls with modified settings */}
        <OrbitControls
          enableZoom={false} // Disable zooming
          enablePan={false} // Disable panning
          enableRotate={true} // Allow rotation
          mouseButtons={{
            LEFT: 0, // Left click for rotating
            MIDDLE: undefined, // Disable middle click
            RIGHT: undefined, // Disable right click
          }}
        />
      </Canvas>
    </div>
  );
};

export default Scene;
