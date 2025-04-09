import styles from "./ExternalLinkCard.module.css";
import { FaArrowRight } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import virtualRealityImg from "/public/eksternlink1.jpg";
import psykologiImg from "/public/psykologi.webp";
import chatGbtImg from "/public/chatgbt.webp";

const ExternalLinkCard = () => {
  return (
    <>
      <section className={styles.externalLinks}>
        <h3>Andre spændende artikler om VR & psykologi</h3>

        <div className={styles.container}>
          <FaAngleLeft className={styles.btn} />
          <div className={styles.link}>
            <img src={virtualRealityImg} alt="" />
            <div className={styles.text}>
              <h4>Virtual Reality</h4>
              <p>
                Læs om, hvad Virtual reality virkelig er, og hvordan det
                påvirker os
              </p>
              <a
                href="https://www.iberdrola.com/innovation/virtual-reality"
                target="_blank"
              >
                Læs mere
                <FaArrowRight />
              </a>
            </div>
          </div>
          <div className={styles.link}>
            <img src={psykologiImg} alt="" />
            <div className={styles.text}>
              <h4>Psykologi</h4>
              <p>Se, mange forskellige artikler der omhandler psykologi.</p>
              <a href="https://videnskab.dk/tema/psykologi/" target="_blank">
                Læs mere
                <FaArrowRight />
              </a>
            </div>
          </div>
          <div className={styles.link}>
            <img src={chatGbtImg} alt="" />
            <div className={styles.text}>
              <h4>Fremtiden af chatgpt</h4>
              <p>
                Læs om, brugen af kunstig intelligens og hvad fremtiden har at
                byde på.
              </p>
              <a
                href="https://www.dr.dk/nyheder/indland/i-fremtiden-skal-man-kunne-gaa-til-eksamen-i-chatgpt-eleverne-skal-blive-herre-over"
                target="_blank"
              >
                Læs mere
                <FaArrowRight />
              </a>
            </div>
          </div>
          <FaAngleRight className={styles.btn} />
        </div>
      </section>
    </>
  );
};

export default ExternalLinkCard;
