import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Path } from "../components/Path";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Scroll down to start</h1>
      <Path />
    </div>
  );
};

export default Home;
