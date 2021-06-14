import React from "react";
import SignInButton from "../components/SignInButton";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <SignInButton />
    </div>
  );
};

export default Home;
