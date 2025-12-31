import { useEffect, useRef } from "react";
import gsap from "gsap";
import PickItLogo from "../imgs/PickIt/pickIt.svg?react";
import HomePicOne from "../imgs/home/pickHomeOne.svg?react";
import HomePicTwo from "../imgs/home/pickHomeTwo.svg?react";
import BallWhite from "../imgs/balls/Ballswht.svg?react";
import AddColorButton from "./AddColorButton";
import DottedFooter from "./DottedFooter";
import FloatingImage from "./TemplateImgs";

const LeftHomePage = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const float1Ref = useRef(null);
  const float2Ref = useRef(null);
  const float3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      const tl = gsap.timeline();

      // Use fromTo for more predictable behavior in React Strict Mode
      tl.fromTo(
        logoRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          textRef.current.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        )
        .fromTo(
          buttonRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
          },
          "-=0.3"
        )
        .fromTo(
          [float1Ref.current, float2Ref.current, float3Ref.current],
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.8"
        );

      // Floating Animations
      gsap.to(float1Ref.current, {
        y: -20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(float2Ref.current, {
        y: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      gsap.to(float3Ref.current, {
        y: -25,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      // Changed min-h to h-screen to prevent scroll if content fits, and overflow-hidden ensures no scrollbars
      // Added relative to ensure positioning works
      className="relative h-[calc(100dvh-4rem)] w-full overflow-hidden flex flex-col px-4 md:px-10 lg:px-16 pt-4"
    >
      {/* 
        1. PickIt Logo / Watermark 
        Align top-left on ALL screens (removed justify-center)
      */}
      <div
        ref={logoRef}
        className="w-full flex justify-start mb-2 md:mb-4 z-20"
      >
        <PickItLogo
          className="w-[35vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] h-auto text-[#1e1b28]"
          aria-label="PickIt Logo"
        />
      </div>

      {/* 
        2. Main Content 
        Align left on ALL screens (removed items-center)
      */}
      <div
        ref={textRef}
        className="grow flex flex-col justify-center md:justify-start items-start z-20"
      >
        <h1 className="font-russo text-[clamp(2.5rem,10vw,6rem)] xl:text-[7rem] leading-[0.9] text-[#1e1b28] tracking-tight text-left">
          <span className="block mb-2">BRING</span>
          <span className="block">It to life!</span>
        </h1>

        <p className="text-[#5a5a5a] text-[clamp(1rem,2.5vw,1.5rem)] font-medium mt-4 md:mt-6 max-w-xs sm:max-w-md md:max-w-xl text-left leading-relaxed">
          Create color palettes in seconds. Pick a base color, choose a style,
          and get harmonious, ready-to-use hex codes for your design projects.
        </p>

        <div ref={buttonRef} className="mt-6 md:mt-10">
          <AddColorButton />
        </div>
      </div>

      <div className="w-full mt-auto z-20 pb-4">
        <DottedFooter />
      </div>

      {/* 
        3. Floating Images 
      */}

      {/* Ball: Top Right */}
      <FloatingImage
        ref={float1Ref}
        Component={BallWhite}
        className="w-[40vw]
        xl:w-[35vw] xxl:w-[30vw] xxl:-top-[2%] 3xl:w-[35vw] 
        md:w-[25vw] lg:w-[20vw] -top-[5%] -right-[10%] md:top-[5%] md:right-[5%] z-10 opacity-90 hidden md:block"
      />

      {/* Palette Strip: Bottom Right */}
      <FloatingImage
        ref={float2Ref}
        Component={HomePicOne}
        className="w-[50vw]
        vm:w-[40vw]
        ssm:w-[35vw]
        bottom-[17%] right-[5%] z-10 md:w-[30vw] lg:w-[25vw] md:bottom-[5%] md:right-[2%]"
      />

      {/* Swirls: Bottom Left/Center */}
      <FloatingImage
        ref={float3Ref}
        Component={HomePicTwo}
        className="
         w-[40vw]  
         md:w-[25vw] 
         xl:w-[20vw]
         right-[3%] top-[2%]
          vm:w-[35vw]
          sm:w-[35vw]
          ssm:w-[30vw]
          md:right-[25%] md:top-[50%]  
         z-10 
         xl:right-[30%] xl:top-[57%]"
      />
    </div>
  );
};

export default LeftHomePage;
