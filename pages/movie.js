import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Seo from "./components/seo";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=66dca24d08fd3a306a6425e77a96eb22"
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <main className={styles.main}>
      <Seo title="Home" />
      {!movies
        ? null
        : movies.map((movie) => (
            <div key={movie.id}>
              <h3>{movie.original_title}</h3>
            </div>
          ))}
    </main>
  );
}
