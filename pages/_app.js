import "../styles/globals.css";
import LayOut from "./components/layOut";

function MyApp({ Component, pageProps }) {
  return (
    <LayOut>
      <Component {...pageProps} />
    </LayOut>
  );
}

export default MyApp;
