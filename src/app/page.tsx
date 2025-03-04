import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
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
          <div className={styles.experienceImage}>
            <Image
              src="/img1.jpg" // Replace with your actual image
              alt="Experience illustration"
              width={500}
              height={500}
              className={styles.expImage}
              priority
            />
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
