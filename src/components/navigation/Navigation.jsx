import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { IoMenu } from "react-icons/io5";

const Navigation = () => {
  return (
    <>
      <nav>
        <div>
          <NavLink to="/" exact className={styles.logo}>
            <img src="src/assets/logo.jpg" alt="" />
            <h1>Fremtidens Terapi</h1>
          </NavLink>
        </div>
        <ul className={styles.links}>
          <li>
            <NavLink to="/text">VR & Mental Sundhed</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Kontakt</NavLink>
          </li>
          <li>
            <NavLink to="/about">Om os</NavLink>
          </li>
        </ul>
        <ul className={styles.menu}>
          <IoMenu />
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
