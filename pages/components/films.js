import films from "../../styles/films.module.scss";
import FadeIn from "./FadeIn";
export default function third() {
  return (
    <div className={films.container}>
      <FadeIn>
        <span className={films.span}>Films</span>
      </FadeIn>
      <FadeIn>
        <span>Earliest to</span>
        <span> current</span>
      </FadeIn>
      <FadeIn>
        <img className={films.img} src="3rd-films.svg" alt="line" />
      </FadeIn>
    </div>
  );
}
