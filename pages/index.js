// Components
import Name from "./components/name";
import Intro from "./components/intro";
import Films from "./components/films";
import Fake from "./components/fake";
import Painting from "./components/convo1";
import Year from "./components/year";
// Packages needs
import { isMobile } from "react-device-detect";
import Smooth from "./components/SmoothScroll";
// Index
export default function Home() {
  const Wrapper = ({ children, condition, wrapper1, wrapper2 }) =>
    condition ? wrapper1(children) : wrapper2(children);
  const desktop = (children) => <Smooth>{children}</Smooth>;
  const mobile = (children) => <Smooth ease={0.5}>{children}</Smooth>;
  return (
    <Wrapper condition={isMobile} wrapper1={mobile} wrapper2={desktop}>
      <Name />
      <Intro />
      <Films />
      <Fake />
      <Painting />
      <Year />
    </Wrapper>
  );
}
