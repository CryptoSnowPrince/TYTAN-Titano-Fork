/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/mainHeader";
import Banner from "../sections/Banner";
import Protocol from "../sections/Protocol";
import Earn from "../sections/Earn";
import HowItWorks from "../sections/HowItWorks";
import Liquidity from "../sections/Liquidity";
import Footer from "../sections/Footer";
import Particles from "react-tsparticles";
import Faq from "../sections/Faq";
const particlesInit = (main) => {
  // console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};

const particlesLoaded = (container) => {
  // console.log(container);
};
const MainHome = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Protocol />
      <div className="how-it-works">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            // background: {
            //   color: {
            //     value: "#0d47a1",
            //   },
            // },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 1,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 0.5,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 2,
              },
            },
            detectRetina: true,
          }}
        />
        <Earn />
        <HowItWorks />
      </div>
      <Liquidity />
      {/* <Faq /> */}
      <Footer />
    </div>
  );
};

export default MainHome;
