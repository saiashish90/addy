import Name from "./components/name";
import ReactPageScroller from "react-page-scroller";
export default function Home() {
  return (
    <ReactPageScroller>
      <Name></Name>
      <section style={{ height: "100vh", backgroundColor: "#000000" }}></section>
    </ReactPageScroller>
  );
}
