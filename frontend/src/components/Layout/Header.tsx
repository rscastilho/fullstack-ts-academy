import styles from "./Layout.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../../Context/Context";
import appApi from "../../api/appApi";

const Header = () => {
  const { state, setState } = useContext(Authcontext);

  const logout = () => {
    setState(false);
    localStorage.removeItem("@token");
    appApi.defaults.headers.delete.authorization = ``;
    console.log(state);
    
  };
  return (
    <>
      <nav className={styles.nav}>
        <div>1</div>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          {state ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </div>
      </nav>
      <div className={styles.menu}>Menu</div>
    </>
  );
};

export default Header;
