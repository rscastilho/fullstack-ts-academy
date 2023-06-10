import styles from "./Layout.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div>1</div>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <Link to={"/login"}>Login</Link>
        </div>
      </nav>
      <div className={styles.menu}>Menu</div>
    </>
  );
};

export default Header;
