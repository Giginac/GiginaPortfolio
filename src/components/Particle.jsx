import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []); 

  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
  }, []);
  
  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{ zIndex: 0 }}
          options={{
            autoPlay: true,
            background: {
              color: { value: "#00ffcc" },
              image: "url('https://particles.js.org/images/background3.jpg')",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
              opacity: 1,
            },
            backgroundMask: {
              composite: "destination-out",
              cover: {
                color: { value: { r: 17, g: 24, b: 39 } },
                opacity: 1,
              },
              enable: true,
            },
            clear: true,
            fullScreen: {
              enable: true,
              zIndex: 0,
            },
            detectRetina: true,
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "bubble" },
                resize: { enable: true, delay: 0.5 },
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 1,
                  size: 30,
                },
                push: {
                  quantity: 4,
                },
              },
            },
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  width: 1920,
                  height: 1080,
                },
              },
              color: { value: "#00ffcc" },
              links: {
                enable: true,
                color: "#00ffcc",
                distance: 150,
                opacity: 1,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                outModes: {
                  default: "out",
                  top: "out",
                  bottom: "out",
                  left: "out",
                  right: "out",
                },
              },
              opacity: {
                value: 1,
              },
              shape: {
                type: "triangle",
              },
              size: {
                value: { min: 1, max: 4 },
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
          }}
        />
      )}
    </>
  );
}
