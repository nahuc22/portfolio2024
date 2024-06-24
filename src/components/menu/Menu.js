"use client";
import React, { useState, useRef, useEffect } from "react";
import "./menu.css";
import { gsap } from "gsap";

const menuLinks = [
  { path: "#home", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#work", label: "Work" },
  { path: "#projects", label: "Projects" },
  { path: "#contact", label: "Contact" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const targetRef = useRef(null); // Guarda la referencia del objetivo para el smooth scrolling

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });
    tl.current = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut"
      })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
      });
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    const targetId = path.substring(1); // Eliminar el símbolo '#'
    targetRef.current = document.getElementById(targetId);

    // Iniciar el cierre del menú y luego hacer el smooth scrolling
    toggleMenu();
  };

  useEffect(() => {
    if (!isMenuOpen && targetRef.current) {
      // Realiza el smooth scrolling después de que el menú se haya cerrado
      setTimeout(() => {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
        targetRef.current = null;
      }, 1500); // Ajusta el tiempo según la duración de la animación de cierre
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <a href="#home" onClick={(e) => handleLinkClick(e, link.path)}>Nahu</a>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            {/* <a className="menu-nahu" href="#home">Nahu</a> */}
          </div>
          <div className="menu-close">
            {/* <p>Close</p> */}
          </div>
        </div>
        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder">
                  <a
                    href={link.path}
                    className="menu-link"
                    onClick={(e) => handleLinkClick(e, link.path)}
                  >
                    {link.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="#">Instagram&#8599;</a>
              <a href="#">Linkedin &#8599;</a>
              <a href="#">Github &#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>nahuelcastilla22@gmail.com</p>
              <p>+5493816319655</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <p>View Showreel</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
