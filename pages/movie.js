import styles from "../styles/Home.module.css";
import Seo from "./components/seo";

export default function Movie() {
  return (
    <main className={styles.main}>
      <Seo title="Home" />
      <h1>movies</h1>
    </main>
  );
}
