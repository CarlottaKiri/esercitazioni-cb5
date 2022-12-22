import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import "./layout.css";

export function Container(props) {
  const { children } = props;

  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
