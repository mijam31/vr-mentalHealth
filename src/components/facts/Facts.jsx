import styles from "./facts.module.css";
import { NavLink } from "react-router-dom";
import React, { useEffect, useRef } from "react";

const Facts = () => {
  const factsRef = useRef([]); // en ref til at holde referencer til facts elementer

  useEffect(() => {
    // laver en IntersectionObserver for at observere når factsne/elemnterne kommer til syne
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // tjekker om elementet er i syne
            entry.target.classList.add(
              entry.target.dataset.index % 2 === 0 // tjekker om indec er lige eller ulige
                ? styles["slide-in-left"] // klasser for lige index
                : styles["slide-in-right"] //klasser for ulige index
            );
            observer.unobserve(entry.target); // Stopper med at observere facts/elementet
          }
        });
      },
      { threshold: 0.5 } // her ændrer jeg hvornår factsne kommer frem
    );

    //observerer hvert fact element
    factsRef.current.forEach((fact) => {
      if (fact) observer.observe(fact);
    });

    return () => {
      if (factsRef.current) {
        factsRef.current.forEach((fact) => {
          if (fact) observer.unobserve(fact); // tjekker om fact er gydligt og stopper observation
        });
      }
    };
  }, []); // tom afhængighedsliste, så den kører kun en gang ved første render

  return (
    <>
      <section className={styles.facts}>
        <img src="src/assets/hands.avif" alt="" />
        <div>
          <h3>Lidt omkring Fremtidens Terapi</h3>
          <div className={styles.content}>
            {[
              "66-90% succesrate for PTSD-behandling med VR",
              "VR kan hjælpe med social angst & autisme",
              "Virtuel terapi kan reducere afhængighed & cravings",
              "Fremtidens terapi starter nu!",
            ].map((fact, index) => (
              <React.Fragment key={index}>
                <div className={styles.line}></div>
                <p
                  className={`${styles.fact}`}
                  ref={(el) => (factsRef.current[index] = el)}
                  data-index={index}
                >
                  {fact}
                </p>
              </React.Fragment>
            ))}
            <div className={styles.line}></div>
          </div>
          <NavLink to="/text">
            <button>Hvordan virker det?</button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Facts;
