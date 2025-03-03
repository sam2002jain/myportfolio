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
        {/* <Image
        className={styles.mypic}
        src="/Subject.png"
        alt="Profile picture"
        width={100}
        height={100}
        priority
      /> */}
      </main>
      <main className={styles.main2}>
        <div className={styles.content}>
          <div className={styles.textBackground}></div>
          <h1 className={styles.sectionTitle}>Education</h1>
          <div className={styles.educationItem}>
            <h2 className={styles.schoolName}>WIT, Solapur</h2>
            <p className={styles.degree}>Bachelor of Technology - Information Technology</p>
            <p className={styles.duration}>2021 - 2025</p>
            <p className={styles.gpa}>CGPA: 9.1/10</p>
          </div>
          <div className={styles.educationItem}>
            <h2 className={styles.schoolName}>Guru nanak dev institute of technology</h2>
            <p className={styles.degree}>Diploma</p>
            <p className={styles.duration}>2018 - 2021</p>
            <p className={styles.gpa}>Percentage: 78%</p>
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
