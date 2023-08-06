import styles from "./Layout.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../../Context/Context";
import appApi from "../../api/appApi";
import {FaKey } from 'react-icons/fa'
import {GrLogout } from 'react-icons/gr'

const Header = () => {
  const { state, setState } = useContext(Authcontext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("@token");
    setState({ logado: false });
    appApi.defaults.headers.delete.authorization = null;
    navigate("/");

    console.log("logout realizado", localStorage);
  };
  return (
    <>
      <nav className={styles.nav}>
        <div>
        <Link to={"/presenca"}>Presença</Link>
        </div>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div className={styles.login}>
          {state.logado ? (
            <button onClick={logout}>
              <GrLogout size={'1.5em'}/>
              logout
              </button>
          ) : (
            <Link to={"/login"}>
              Login
              {/* <FaKey size={'1.5em'}/> */}
            </Link>
          )}
        </div>
      </nav>
      <div className={styles.menu}>
        <Link to={'/'}>
        <span>Menu</span>
        </Link>
        {state.logado && (
          <Link to={"/administracao"}>
            <span>Administração</span>
          </Link>
        )}
      </div>
    </>
  );
};

export default Header;
