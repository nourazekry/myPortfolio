import Image from "next/image";
import styles from '../Experience.module.css';
import pageStyle from './Experiments.module.css';

export default function Experience() {
  const experiences = [
    {
      role: ["ATOMIC CLOCK", "EXPERIMENTS IN NETWORKED PERFORMANCE", "IMAGE PROCESSING APPLICATION"],
      description: [
        "Working on WWVB radio clock for artist Nestor Kruger's sculpture for Kitchener-Waterloo Art Gallery",
        "School for Poetic Computation",
        "Python toolkit + research project addressing 13+ image processing algorithms"
      ],
    },
  ];

  return (
    <main className={`${styles.main} ${pageStyle.pageimg}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>Ongoing Experiments</h1>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.experience}>
            {experience.role.map((role, index) => (
              <div key={index}>
                <h2 className={`${styles.role} ${pageStyle.role}`}>{role}</h2>
                <h3 className={styles.description}>{experience.description[index]}</h3>
              </div>
            ))}          
          </div>
        ))}
      </div>
    </main>
  );
}