import Image from "next/image";
import styles from '../Experience.module.css';
import pageStyle from './Projects.module.css';
export default function Experience() {
  const experiences = [
    {
      company: "ICC Heart Failure Clinic",
      role: "FREELANCE FULL-STACK ENGINEER",
      duration: "2023",
      description: "Engineered a web application to overhaul a manual patient intake system, reducing time from 25 to 8 minutes.",
    },
    {
      company: "Game of Life Sculpture",
      role: "Role 2",
      duration: "2023",
      description: "Programmed addressable RGB LED lights using Arduino Uno and C++, and welded steel structure to create sculpture expressing human-computer synergy",
    },
    // Add more experiences as needed
  ];

  return (
    <main className={`${styles.main} ${pageStyle.pageimg}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>My Professional Experience</h1>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.experience}>
            <h2 className={styles.company}>{experience.company}</h2>
            <h3 className={styles.role}>{experience.role}</h3>
            <p className={styles.duration}>{experience.duration}</p>
            <p className={styles.description}>{experience.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}