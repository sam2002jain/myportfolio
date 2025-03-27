import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './FloatingIcons.module.css';

const icons = [
  { src: '/android.png', alt: 'React' },
  { src: '/firebase.png', alt: 'Android' },
  { src: '/ios.png', alt: 'Firebase' },
  { src: '/rn.png', alt: 'TypeScript' },
  { src: '/sb.png', alt: 'Node.js' },
];

export default function FloatingIcons() {
  return (
    <div className={styles.floatingContainer}>
      {icons.map((icon, index) => (
        <div 
          key={icon.alt}
          className={styles.floatingIcon}
          style={{
            animationDelay: `${index * 0.5}s`,
            left: `${Math.random() * 100}%`
          }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={40}
            height={40}
          />
        </div>
      ))}
    </div>
  );
}
