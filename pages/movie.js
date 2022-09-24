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
      //console.log(results);
      setMovies(results);
    })();
  }, []);
  return (
    <>
      <main className={styles.main}>
        <Seo title="Home" />
        <div className="movieWrap">
          {!movies
            ? null
            : movies.map((movie) => (
                <div className="movie" key={movie.id}>
                  <h3>{movie.original_title}</h3>
                  <img
                    className="poster"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                  <h4>{movie.overview}</h4>
                </div>
              ))}
        </div>
      </main>
      <style jsx>{`
        .movieWrap {
          display: flex;
          overflow-x: hidden;
          overflow-x: auto;
          width: 80vw;
          scroll-snap-type: x mandatory;
        }

        .movieWrap::-webkit-scrollbar {
          display: none;
          cursor: grab;
        }
        .movie {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.7);
          margin: 20px;
          scroll-snap-align: start;
          min-width: 300px;
          cursor: grab;
        }
        h3 {
          margin: 10 0;
        }
        .poster {
          width: 100%;
          object-fit: cover;
        }
        h4 {
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
