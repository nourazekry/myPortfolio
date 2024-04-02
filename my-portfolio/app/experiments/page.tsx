import Image from "next/image";
import styles from '../Experience.module.css';
import pageStyle from './Experiments.module.css';

export default function Experience() {
  const experiences = [
    {
      company: "ADknown Inc.",
      role: "Software Developer",
      description: "Developed internal marketing tools across 3+ systems and pioneered an affiliate marketing site generation system, automating a vital revenue stream. Revitalized digital publishing websites through AWS optimization and Agile methodologies, ensuring efficient workflows using Jira/Confluence and Git.",
    },
    // {
    //   company: "Company 2",
    //   role: "Role 2",
    //   duration: "Duration 2",
    //   description: "Description 2",
    // },
    // Add more experiences as needed
  ];

  return (
    <main className={`${styles.main} ${pageStyle.pageimg}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>Creative Experiments</h1>
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