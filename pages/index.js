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
import Contact from "./components/contact.js";
// Packages needs
import { isMobile } from "react-device-detect";
import Smooth from "./components/SmoothScroll";
// Index
// PLEASE CHANGE THIS LATER IS YOU ARE NT IMPLEMENTING FULLPAGEJS
export default function Home() {
  const Wrapper = ({ children, condition, wrapper1, wrapper2 }) =>
    condition ? wrapper1(children) : wrapper2(children);
  const desktop = (children) => <Smooth>{children}</Smooth>;
  const mobile = (children) => <Smooth ease={0.5}>{children}</Smooth>;
  return (
    <>
      <Head>
        <title>Adithi Chandrashekar</title>
        <meta name="description" content="My portfolio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, archive" />
      </Head>
      <Wrapper condition={isMobile} wrapper1={mobile} wrapper2={desktop}>
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
      </Wrapper>
    </>
  );
}
