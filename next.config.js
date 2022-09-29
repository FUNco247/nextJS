/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/legacymovie",
        destination: "/movie",
        permanent: false, // browser or dearch engiene will remember this redirection
      },
      /**
       * can get url parameter and reuse
      ```javascript
      source: "/legacymovie/:movieId",
      destination: "/movie/:movieId",
      permanent: false, 
      ```

       * can get all rest url path and reuse with "*"
      ```javascript
      source: "/legacymovie/:movieId*",
      destination: "/movie/:movieId*",
      permanent: false, 
      ```
       */
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movie",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
