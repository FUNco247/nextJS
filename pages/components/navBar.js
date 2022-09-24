import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navBar.module.css";

export default function NavBar() {
  const route = useRouter();
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={route.pathname === "/" ? styles.active : styles.inActive}>
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={
            route.pathname === "/about" ? styles.active : styles.inActive
          }
        >
          About
        </a>
      </Link>
      <Link href="/movie">
        <a
          className={
            route.pathname === "/movie" ? styles.active : styles.inActive
          }
        >
          Movie app
        </a>
      </Link>
    </nav>
  );
}
