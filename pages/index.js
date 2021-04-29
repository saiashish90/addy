import Name from "./components/name";
import Intro from "./components/intro";
import ReactPageScroller from "react-page-scroller";

export default function Home() {
  return (
    <ReactPageScroller animationTimer={750} animationTimerBuffer={300}>
      <Name />
      <Intro />
      <section style={{ height: "100vh", backgroundColor: "#00ff00" }}></section>
    </ReactPageScroller>
  );
}
