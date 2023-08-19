import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const DogModel = () => {
  const containerRef = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;

    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/dog.glb", (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      // Ajustar la posición de la cámara según las necesidades
      camera.position.set(2, 5, 5); // Cambia el valor de Y y Z para ajustar el zoom
      camera.lookAt(model.position);

      // Agregar una luz ambiental para iluminar el modelo de manera uniforme
      const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Color blanco y intensidad 1
      scene.add(ambientLight);

      setLoading(false);
    });

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animate);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  // Resto del código sin cambios

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "calc(50vh - 200px)" }}
      className="bg-transparent mt-24"
    >
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default DogModel;
