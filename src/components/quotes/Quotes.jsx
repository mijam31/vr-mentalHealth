import styles from "./Quotes.module.css";
import { NavLink } from "react-router-dom";

const Quotes = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.quote1}>
          <NavLink to="/text">
            <h4>Fra en PTSD-veteran, der brugte VR-terapi:</h4>
            <p>
              <i>
                "Jeg troede aldrig, jeg kunne slippe fri af mine traumer. VR
                hjalp mig med at konfrontere mine minder på en måde, jeg aldrig
                havde troet muligt – i et trygt og kontrolleret miljø."
              </i>
            </p>
          </NavLink>
        </div>

        <div className={styles.quote2}>
          <NavLink to="/text">
            <h4>Fra en forsker inden for VR-terapi:</h4>
            <p>
              <i>
                "VR er ikke fremtiden – det er nutiden. Vi ser allerede, hvordan
                teknologi kan revolutionere mental sundhedsbehandling, gøre
                terapi mere tilgængelig og hjælpe mennesker på en helt ny måde."
                – Dr. Albert ‘Skip’ Rizzo, psykolog og VR-forsker.
              </i>
            </p>
          </NavLink>
        </div>

        <div className={styles.quote3}>
          <NavLink to="/text">
            <h4>Fra en person med social angst, der brugte VR-terapi:</h4>
            <p>
              <i>
                "Jeg troede aldrig, jeg kunne holde en tale foran et publikum
                uden at få angstanfald. VR gav mig modet til at konfrontere min
                frygt – én virtuel præsentation ad gangen."
              </i>
            </p>
          </NavLink>
        </div>

        <div className={styles.quote4}>
          <NavLink to="/text">
            <h4>Fra en psykolog, der arbejder med VR-terapi:</h4>
            <p>
              <i>
                "VR er mere end bare teknologi – det er et redskab til at
                genopbygge sindet. Vi ser resultater, der er imponerende, og for
                mange af vores patienter, har VR været et vendepunkt." – Dr.
                Lisa Green, klinisk psykolog.
              </i>
            </p>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Quotes;
