import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import { logout } from "../../firebase/authentication/authentication";
import styles from "./Header.module.scss";
import HeaderAction from "./HeaderItem/HeaderAction";
import HeaderLink from "./HeaderItem/HeaderLink";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

const Header = () => {
  const currentPath = useLocation().pathname;
  const authentication = useContext(AuthenticationContext);

  const performLogout = () => {
    if (window.confirm("Do you want to log out?")) {
      logout()
        .then((_) => {
          console.log("Logged out");
        })
        .catch((err) => {
          console.log("Log out error: ", err);
        });
    }
  };

  return (
    <>
      <div className={styles.spacer}></div>
      <nav className={styles.header}>
        <div className={styles.content}>
          <HeaderLogo />
          <ul className={styles.items}>
            {!authentication?.user && (
              <>
                <HeaderLink
                  link="/login"
                  label="Login"
                  currentPath={currentPath}
                />
                <HeaderLink
                  link="/signup"
                  label="Sign Up"
                  currentPath={currentPath}
                />
              </>
            )}
            {authentication?.user && (
              <>
                <HeaderLink link="/" label="Home" currentPath={currentPath} />
                <HeaderAction label="Logout" onClick={performLogout} />
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
