import Name from "./components/name";
import Intro from "./components/intro";
import Films from "./components/films";
import Fake from "./components/fake";
import Painting from "./components/convo1";
import ReactPageScroller from "react-page-scroller";
import { isMobile } from "react-device-detect";
export default function Home() {
  const Wrapper = ({ children, condition, wrapper1, wrapper2 }) =>
    condition ? wrapper1(children) : wrapper2(children);
  const desktop = (children) => (
    <ReactPageScroller animationTimer={750} animationTimerBuffer={750}>
      {children}
    </ReactPageScroller>
  );
  const mobile = (children) => <>{children}</>;
  return (
    <Wrapper condition={isMobile} wrapper1={mobile} wrapper2={desktop}>
      <Name />
      <Intro />
      <Films />
      <Fake />
      <Painting />
    </Wrapper>
  );
}
