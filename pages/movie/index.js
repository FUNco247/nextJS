import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Seo from "../components/seo";

export default function Movie({ results }) {
  /* const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch("api/movie")).json();
      setMovies(results);
    })();
  }, []); */
  const ref = useRef();
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
    decayRate: 0.5,
  });
  return (
    <>
      <main>
        <Seo title="Movie" />
        <div
          className="movieWrap flex space-x-3 py-3 overflow-x-scroll scrollbar-hide"
          {...events}
          ref={ref}
        >
          {results
            ? results.map((movie) => (
                <div className="movie" key={movie.id}>
                  <h3>{movie.original_title}</h3>
                  <img
                    className="poster"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                  <h4>{movie.overview}</h4>
                </div>
              ))
            : ""}
        </div>
      </main>
      <style jsx>{`
        main {
          min-height: 100vh;
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .movieWrap {
          display: flex;
          overflow-x: scroll;
          width: 80vw;
          //scroll-snap-type: x mandatory;
        }

        .movieWrap::-webkit-scrollbar {
          display: none;
        }
        .movie {
          flex: none
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.7);
          margin: 20px;
          //scroll-snap-align: start;
          min-width: 300px;
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

export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movie")
  ).json();
  return {
    props: { results },
  };
}
