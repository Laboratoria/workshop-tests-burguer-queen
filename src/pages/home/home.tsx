import { FC } from "react";
import { useNavigate } from "react-router-dom";

import viteLogo from "../../assets/vite-logo.png";

import styles from "./home.module.css";
import { deleteSession } from "../../services";

export const Home: FC = () => {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    deleteSession();
    navigate("/login");
  };
  return (
    <div data-testid="home_page" className={styles["home"]}>
      Home
      <img src={viteLogo} alt="Vite Logo" />
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};
