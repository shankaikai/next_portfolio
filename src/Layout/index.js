import Head from "next/head";
import Navbar from "../components/Navbar";
import { Content } from "./LayoutStyles";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Shan Kai&#39;s Portfolio</title>
      </Head>
      <Navbar />
      <Content>{children}</Content>
    </div>
  );
}
