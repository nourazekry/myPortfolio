import Image from "next/image";
import styles from '../Experience.module.css';
import pageStyle from './Image.module.css';
export default function Experience() {
  const experiences = [
    {
        company: "ADknown Inc.",
        duration: "(Jan - Aug 2022) - (May - Oct 2023)",
        role: "SOFTWARE DEVELOPER",
        description: "Developed internal marketing tools across 3+ systems and pioneered an affiliate marketing site generation system, automating a vital revenue stream. Revitalized digital publishing websites through AWS optimization and Agile methodologies, ensuring efficient workflows using Jira/Confluence and Git.",
      },
    {
      company: "University of Guelph",
      role: "DATA STRUCTURES TEACHING ASSISTANT",
      duration: "(Sept - Dec 2022)",
      description: "Guided students through C and data structures fundamentals, resulting in improved understanding and successful assignment resolutions.",
    },
    {
        company: "VisualHawk Solutions",
        role: "VR GAME DEV/PROJECT MANAGEMENT INTERN",
        duration: "(May - July 2021)",
        description: "Formulated Level Design Document, merging arts and software team insights for efficient collaboration.",
    },
    
    // Add more experiences as needed
  ];

  return (
    <main className={`${styles.main} ${pageStyle.pageimg}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>Professional Experience</h1>
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