"use client";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import styles from './page.module.css';
import { previews } from "./data.js";

const App = () => {
  const [activePreview, setActivePreview] = useState(null);
  const [bgImage, setBgImage] = useState("/bg-default.jpg");
  const previewRefs = useRef([]);

  useGSAP(() => {
    previews.forEach((_, index) => {
      const previewElement = previewRefs.current[index];
      if (previewElement) {
        gsap.set(previewElement.querySelector(".preview-title"), {
          opacity: 0,
          y: 200,
          x: 50,
        });
        gsap.set(previewElement.querySelector(".preview-tags"), {
          opacity: 0,
          x: -210, 
          y: 235,
        });
        gsap.set(previewElement.querySelector(".preview-description"), {
          opacity: 0,
          x: 400,
          y: -200
        });
        gsap.set(previewElement.querySelector(".preview-img"), {
          clipPath: "inset(100% 0% 0% 0%)",
          x: 500,
          y: -100
        });
      }
    });
  }, [previews]);

  const handleMouseEnter = (index) => {
    setActivePreview(`main-${index + 1}`);
    setBgImage(`/bg-${index + 1}.jpg`);

    const previewElement = previewRefs.current[index];
    if (previewElement) {
      gsap.to(previewElement.querySelector(".preview-title"), {
        border: "2px solid red",
        y: 200,
        x: 50,
        opacity: 1,
        duration: 0.2,
      });
      gsap.to(previewElement.querySelector(".preview-tags"), {
        x: -170,
        y: 200,
        opacity: 1,
        duration: 0.2,
        ease: "power2.in",
      });
      gsap.to(previewElement.querySelector(".preview-description"), {
        border: "2px solid red",

        x: 500,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to(previewElement.querySelector(".preview-img"), {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.3,
        x: 450,
        ease: "power3.in",
      });
    }
  };

  const handleMouseLeave = () => {
    setActivePreview(null);
    setBgImage("/bg-default.jpg");

    previews.forEach((_, index) => {
      const previewElement = previewRefs.current[index];
      if (previewElement) {
        gsap.to(previewElement.querySelector(".preview-title"), {
          
          opacity: 0,
          y: -50,
          x: 50,
          duration: 0.1,
        });
        gsap.to(previewElement.querySelector(".preview-tags"), {
          x: -300,
          y: 200,
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        });
        gsap.to(previewElement.querySelector(".preview-description"), {
          opacity: 0,
          x: 500,
          duration: 0.2,
          ease: "power2.in",
        });
        gsap.to(previewElement.querySelector(".preview-img"), {
          clipPath: "inset(100% 0% 0% 0%)",
          duration: 0.3,
          ease: "power3.out",
        });
      }
    });
  };

  return (
    <div className={styles.projectsPage} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.previewBg}>
        <img src={bgImage} alt="Background" className={styles.imagen} />
      </div>

      <div className={styles.items}>
        {previews.map((preview, index) => (
          <div
            key={index}
            className={styles.item}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.projectName}>{preview.title}</div>
          </div>
        ))}
      </div>

      {previews.map((preview, index) => (
        <div
          key={index}
          ref={(el) => (previewRefs.current[index] = el)}
          className={`${styles.preview} ${activePreview === `main-${index + 1}` ? styles.active : ""}`}
        >
          <div className={`${styles.previewTitle} preview-title`}>{preview.title}</div>
          <ul className={`${styles.previewTags} preview-tags`}>
            {(preview.tags || []).map((tag, tagIndex) => (
              <li key={tagIndex}>{tag}</li>
            ))}
            <div className={`${styles.subTitle1} preview-subtitle`}>
              {preview.subtitle1}
              <ul className={styles.bullets1}>
                {(preview.bullets1 || []).map((bullet, bulletIndex) => (
                  <li className={styles.bullet1} key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
            <br></br>
            <div className={`${styles.subTitle2} preview-subtitle`}>
              {preview.subtitle2}
              <ul>
                {(preview.bullets2 || []).map((bullet, bulletIndex) => (
                  <li className={styles.bullets2} key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
            <br></br>
            <div className={`${styles.subTitle3} preview-subtitle`}>
              {preview.subtitle3}
              <ul>
                {(preview.bullets3 || []).map((bullet, bulletIndex) => (
                  <li className={styles.bullets3}key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          </ul>
          <div className={`${styles.previewDescription} preview-description`}>
            {preview.descriptionTitle}
          <div className={`${styles.descriptionTitle} preview-description-title`}>
            {preview.description}
          </div>
          </div>
          <img
            src={`/main-${index + 1}.jpg`}
            alt={`Preview ${index + 1}`}
            className={`${styles.previewImg} preview-img`}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
