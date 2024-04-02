import Image from "next/image";
import styles from '../Experience.module.css';
import pageStyle from './Image.module.css';
export default function Experience() {
  const experiences = [
    {
      company: "Company 1",
      role: "Role 1",
      duration: "Duration 1",
      description: "Description 1",
    },
    {
      company: "Company 2",
      role: "Role 2",
      duration: "Duration 2",
      description: "Description 2",
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