"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";

export default function Home() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={styles.page}>
      <Image
        className={styles.logo}
        src="/img1.jpg"
        alt="Profile picture"
        width={1000}
        height={1000}
        priority
      />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.textBackground}></div>
          <h1 className={styles.breakoutHello}>Hello,</h1>
          <h1 className={styles.nameText1}>I'm Sanyam Jain!</h1>
          <h1 className={styles.nameText2}>サニヤム・ジャイナ語!</h1>
          <p className={styles.nameText3}>
            I'm a Self-taught App Developer based in Delhi with extensive experience in building high-quality mobile applications. I'm currently living in New Delhi and pursuing a degree in Information Technology.
          </p>
        </div>
          <Image
            className={styles.mypic}
            src="/Subject1.png"
            alt="Profile picture"
            width={400}
            height={400}
            priority
          />
      </main>
      <main className={styles.main2}>
        <div className={styles.experienceContainer}>
          <div className={styles.animatedBackground}>
            <div className={styles.animatedCircle}></div>
            <div className={styles.animatedSquare}></div>
            <div className={styles.animatedDots}></div>
          </div>
          <div className={styles.tiltCard} ref={cardRef}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>💻</div>
              <h3>Development Journey</h3>
              <p>From self-taught beginnings to professional development</p>
              <div className={styles.cardStats}>
                <div className={styles.stat}>
                  <span>2+</span>
                  <p>Years Coding</p>
                </div>
                <div className={styles.stat}>
                  <span>15+</span>
                  <p>Projects</p>
                </div>
                <div className={styles.stat}>
                  <span>3</span>
                  <p>Languages</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.textBackground}></div>
            <h1 className={styles.sectionTitle}>Experience</h1>
            <div className={styles.experienceItem}>
              <h2 className={styles.companyname}>Aureus Web Creation, Gurugram</h2>
              <p className={styles.designation}>React Native Developer Intern</p>
              <p className={styles.duration}>Aug, 2024 - Oct, 2024</p>
              <ul className={styles.experienceList}>
                <li>Developed and maintained cross-platform mobile applications using React Native</li>
                <li>Implemented responsive UI designs and custom components</li>
                <li>Integrated RESTful APIs and managed state using Redux</li>
                <li>Collaborated with design and backend teams for feature implementation</li>
              </ul>
              <div className={styles.techStack}>
                <span className={styles.techBadge}>React Native</span>
                <span className={styles.techBadge}>TypeScript</span>
                <span className={styles.techBadge}>Redux</span>
                <span className={styles.techBadge}>REST APIs</span>
              </div>
            </div>
            <div className={styles.experienceItem}>
              <h2 className={styles.companyname}>Freelance Projects</h2>
              <p className={styles.designation}>Mobile App Developer</p>
              <p className={styles.duration}>2023 - Present</p>
              <ul className={styles.experienceList}>
                <li>Built custom mobile applications for various clients</li>
                <li>Managed entire development lifecycle from design to deployment</li>
                <li>Implemented complex features and optimized performance</li>
              </ul>
              <div className={styles.techStack}>
                <span className={styles.techBadge}>Flutter</span>
                <span className={styles.techBadge}>Firebase</span>
                <span className={styles.techBadge}>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      
      <footer className={styles.footer}>
        <a
        href="https://www.linkedin.com/in/jainsanyamit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          
        >
          Github
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Leetcode
        </a>
      </footer>
    </div>
  );
}
