import Footer from "./footer";
import NavBar from "./navBar";

export default function LayOut({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
