import Head from "next/head";
// Components
import Name from "./components/name";
import Intro from "./components/intro";
import Films from "./components/films";
import Fake from "./components/fake";
import Painting from "./components/convo1";
import Year from "./components/year";
import Pooja from "./components/convo2";
import IGTV1 from "./components/igtv1";
import IGTV2 from "./components/igtv2";
import Slant from "./components/slant";
import Contact from "./components/contact";
// css
import Index from "../styles/index.module.scss";
export default function Home() {
  return (
    <>
      <Head>
        <title>Adithi Chandrashekar</title>
        <meta name="description" content="My portfolio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, archive" />
      </Head>

      <div className={Index.container}>
        <Name />
        <Intro />
        <Films />
        <Fake />
        <Painting />
        <Year />
        <Pooja />
        <IGTV1 />
        <IGTV2 />
        <Slant />
        <Contact />
      </div>
    </>
  );
}
