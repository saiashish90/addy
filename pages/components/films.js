import films from "../../styles/films.module.scss";
import FadeIn from "./FadeIn";
export default function third() {
  return (
    <FadeIn className={films.container}>
      <span>Films</span>
      <div>
        <span>Earliest to</span>
        <span> current</span>
      </div>
      <img src="3rd-films.svg" alt="line" />
    </FadeIn>
  );
}
