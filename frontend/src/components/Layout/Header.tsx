import styles from "./Layout.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../../Context/Context";
import appApi from "../../api/appApi";


const Header = () => {
  const { state, setState } = useContext(Authcontext);
  const navigate = useNavigate()
  

  const logout = () => {
    localStorage.removeItem("@token");
    setState({logado: false});
    appApi.defaults.headers.delete.authorization = null;
    navigate('/') 
    
    console.log('logout realizado', localStorage);
    
  };
  return (
    <>
      <nav className={styles.nav}>
        <div>1</div>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          {state.logado ? (
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
