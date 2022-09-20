import styles from "../styles/Home.module.css";
import NavBar from "./components/navBar";

export default function About() {
  return (
    <main className={styles.main}>
      <NavBar />
      <h1>About</h1>
    </main>
  );
}
