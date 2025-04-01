import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ title1, title2, text, button }) => {
  return (
    <>
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${bgg})` }}
      >
        <div className={styles.content}>
          <h2>{title1}</h2>
          <h2> {title2}</h2>
          <p>{text}</p>
          {button && (
            <NavLink to="/text">
              <button>{button}</button>
            </NavLink>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
