"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { JSX, useEffect, useRef, useState } from "react";
import FloatingIcons from "@/components/FloatingIcons";
import Navbar from "@/components/navbar";


export default function Home() {
  const cardRef = useRef<HTMLDivElement>(null);
  const[selected, setSelected] = useState<string | null>(null);
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Create Particle Animation
    const generateParticles = () => {
      const particlesArray = Array.from({ length: 20 }).map((_, index) => {
        const size = Math.random() * 20 + 5;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;

        return (
          <div 
            key={index} 
            className={styles.particle}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${animationDuration}s`,
              animationDelay: `${delay}s`
            }}
          />
        );
      });

      setParticles(particlesArray);
    };

    generateParticles();
  }, []);


  const handleProjectClick = (projectName: string) => {
    setSelected(projectName);
  };

  const handleCloseModal = () => {
    setSelected(null);
  };
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(`.${styles.experienceItem}`).forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

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
      <div className={styles.creativeParticles}>
        {particles}
      </div>

      <Navbar />
      <FloatingIcons />
      <Image
        className={styles.heroImage}
        src="/img1.jpg"
        alt="Profile picture"
        layout="fill"
        objectFit="cover"
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
                  <span>6+</span>
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
            <h1 className={styles.sectionTitle}>Experience</h1>
            <div className={styles.experienceContent}>
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
                  <div className={styles.techBadgesRow}>
                    <span className={styles.techBadge}>React Native</span>
                    <span className={styles.techBadge}>TypeScript</span>
                    <span className={styles.techBadge}>Node.JS</span>
                    <span className={styles.techBadge}>REST APIs</span>
                  </div>
                </div>
              </div>
              <div className={styles.experienceItem}>
                <h2 className={styles.companyname}>Freelance Projects</h2>
                <p className={styles.designation}>Mobile App Developer</p>
                <p className={styles.duration}>Feb,2025 - April, 2025</p>
                <ul className={styles.experienceList}>
                  <li>Built custom mobile applications for various clients</li>
                  <li>Managed entire development lifecycle from design to deployment</li>
                  <li>Implemented complex features and optimized performance</li>
                </ul>
                <div className={styles.techStack}>
                  <span className={styles.techBadge}>Android</span>
                  <span className={styles.techBadge}>Firebase</span>
                  <span className={styles.techBadge}>Clerk Auth</span>
                </div>
              </div>
              <div className={styles.experienceItem}>
                <h2 className={styles.companyname}>Valanceware Technology</h2>
                <p className={styles.designation}>Mobile App Developer</p>
                <p className={styles.duration}>Jan 2025 - March 2025</p>
                <ul className={styles.experienceList}>
                  <li>Led frontend of a sweets delivery app with React Native, firebase</li>
                  <li>Implemented real-time chat and push notifications</li>
                  <li>Reduced app load time by 30% through optimization</li>
                </ul>
                <div className={styles.techStack}>
                  <span className={styles.techBadge}>React Native</span>
                  <span className={styles.techBadge}>Firebase</span>
                  <span className={styles.techBadge}>ContextApi</span>
                </div>
              </div>
              <div className={styles.experienceItem}>
                <h2 className={styles.companyname}>RapportSoft Technology</h2>
                <p className={styles.designation}>Software Developer Intern</p>
                <p className={styles.duration}>Feb 2024 - May 2024</p>
                <ul className={styles.experienceList}>
                  <li>Developed Responsive Mobile and web application using react native Expo</li>
                  <li>Created reliable Auth and Api</li>
                  <li>Integrated OCR and SMTP</li>
                </ul>
                <div className={styles.techStack}>
                  <span className={styles.techBadge}>React Native</span>
                  <span className={styles.techBadge}>SpringBoot</span>
                  <span className={styles.techBadge}>MySql</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className={styles.projectsSection}>
        <h1 className={styles.sectionTitle}>Projects</h1>
        <div className={styles.projectsContainer}>
          <div className={styles.projectCard}>
            <div className={styles.projectIcon}>🚀</div>
            <h3>E-Commerce App</h3>
            <p>A full-stack e-commerce mobile application with React Native and Firebase</p>
            <div className={styles.projectTech}>
              <span className={styles.techBadge}>React Native</span>
              <span className={styles.techBadge}>Firebase</span>
              <span className={styles.techBadge}>Redux</span>
            </div>
            <a onClick={() => handleProjectClick('E-Commerce App')} className={styles.projectLink}>
              View Project →
            </a>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.projectIcon}>💬</div>
            <h3>Chat Application</h3>
            <p>Real-time chat app with message encryption and file sharing capabilities</p>
            <div className={styles.projectTech}>
              <span className={styles.techBadge}>Socket.io</span>
              <span className={styles.techBadge}>Node.js</span>
              <span className={styles.techBadge}>MongoDB</span>
            </div>
            <a onClick={() => handleProjectClick('Chat Application')} className={styles.projectLink}>
              View Project →
            </a>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.projectIcon}>🎯</div>
            <h3>Task Manager</h3>
            <p>A productive task management app with calendar integration</p>
            <div className={styles.projectTech}>
              <span className={styles.techBadge}>React Native</span>
              <span className={styles.techBadge}>TypeScript</span>
              <span className={styles.techBadge}>SQLite</span>
            </div>
            <a onClick={() => handleProjectClick('Task Manager')} className={styles.projectLink}>
              View Project →
            </a>
          </div>
        </div>
      </main>

      {selected && (
        <div className={styles.overlay} onClick={handleCloseModal}>
          <div 
            className={styles.overlayContent} 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={handleCloseModal} 
              className={styles.closeButton}
            >
              ✕
            </button>
            <h2>Project: {selected}</h2>
            {selected === 'E-Commerce App' && (
              <div>
                <p>A comprehensive e-commerce mobile application built with React Native and Firebase.</p>
                <h3>Key Features:</h3>
                <ul>
                  <li>User authentication</li>
                  <li>Product browsing and search</li>
                  <li>Shopping cart functionality</li>
                  <li>Payment integration</li>
                </ul>
              </div>
            )}
            {selected === 'Chat Application' && (
              <div>
                <p>A secure real-time chat application with advanced features.</p>
                <h3>Key Features:</h3>
                <ul>
                  <li>End-to-end encryption</li>
                  <li>File sharing</li>
                  <li>Real-time messaging</li>
                  <li>User authentication</li>
                </ul>
              </div>
            )}
            {selected === 'Task Manager' && (
              <div>
                <p>A productivity-focused task management application.</p>
                <h3>Key Features:</h3>
                <ul>
                  <li>Calendar integration</li>
                  <li>Task creation and tracking</li>
                  <li>Priority setting</li>
                  <li>Reminders and notifications</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

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
