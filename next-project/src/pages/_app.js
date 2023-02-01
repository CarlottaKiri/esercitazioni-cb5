import "@/styles/globals.css";
import MainLayout from "@/layout/MainLayout/MainLayout";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
