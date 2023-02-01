import Navbar from "@/components/navbar/Navbar";
import styles from "./styles.module.scss";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className={styles.contentDiv}>{children}</div>
    </div>
  );
}
