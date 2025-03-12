import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p>© 2025 Fremtidens-Terapi. Alle rettigheder forbeholdes.</p>
        <div>
          <ul>
            <li>
              <a href="#">Privatlivspolitik</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
