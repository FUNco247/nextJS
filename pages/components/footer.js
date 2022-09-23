export default function Footer() {
  return (
    <footer>
      <h3>
        Check this course on here &rarr;{" "}
        <a
          href="https://nomadcoders.co/nextjs-fundamentals"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ff971b" }}
        >
          NOMAD CODERS
        </a>
      </h3>
      <style jsx>
        {`
          footer {
            width: 100vw;
            display: flex;
            padding: 2rem 0;
            border-top: 1px solid #eaeaea;
            justify-content: center;
            align-items: center;
          }

          footer h3 {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 25px;
          }
        `}
      </style>
    </footer>
  );
}
