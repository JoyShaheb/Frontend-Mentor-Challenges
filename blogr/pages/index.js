import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section_2 from "../components/Section_2";
import Section_3 from "../components/Section_3";
import Section_4 from "../components/Section_4";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="images/favicon-32x32.png"
        />

        <title>Frontend Mentor | [Blogr]</title>
      </Head>

      <Header />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Footer />
    </div>
  );
}