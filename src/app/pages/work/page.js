"use client"
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Work() {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const workElement = document.getElementById("work");
      if (!workElement) return;

      const scrollPosition = window.scrollY + window.innerHeight * 0.8;
      const workElementTop = workElement.offsetTop;
      const workElementBottom = workElementTop + workElement.offsetHeight;

      if (scrollPosition > workElementTop && scrollPosition < workElementBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScrollAnimation = () => {
      handleScroll();
    };

    handleScrollAnimation();

    window.addEventListener("scroll", handleScrollAnimation);

    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  useLayoutEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        text1Ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.inOut"}
      );
      gsap.fromTo(
        text2Ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.inOut", delay: 0.5 }
      );
      gsap.fromTo(
        text3Ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.inOut", delay: 1 }
      );
    } else {
      gsap.to(
        text1Ref.current,
        { opacity: 0, y: 50, duration: 0.5, ease: "power4.inOut"}
      );
      gsap.to(
        text2Ref.current,
        { opacity: 0, y: 50, duration: 0.5, ease: "power4.inOut", delay: 0.5 }
      );
      gsap.to(
        text3Ref.current,
        { opacity: 0, y: 50, duration: 0.5, ease: "power4.inOut", delay: 1}
      );
    }
  }, [isVisible]);

  return (
    <div id="work">
      <div className="h-screen p-7 bg-[#050101] relative top-14 left-0 font-spaceGrotesk w-full flex flex-col tracking-tight ">
        <h1 ref={text1Ref} className="text-white relative top-10 bottom-5" style={{ fontSize: '8rem' }}>Full stack</h1>
        <h1 ref={text2Ref} className="text-white relative top-5" style={{ fontSize: '8rem' }}>Web Developer</h1>
        <h1 ref={text3Ref} className="text-white relative" style={{ fontSize: '8rem' }}>Freelancer</h1>
      </div>
    </div>
  );
}

