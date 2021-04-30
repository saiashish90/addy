import Name from "./components/name";
import Intro from "./components/intro";
import Films from "./components/films";
import Fake from "./components/fake";
import ReactPageScroller from "react-page-scroller";

export default function Home() {
  return (
    <ReactPageScroller animationTimer={750} animationTimerBuffer={500}>
      <Name />
      <Intro />
      <Films />
      <Fake />
    </ReactPageScroller>
  );
}
