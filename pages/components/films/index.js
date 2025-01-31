import films from "./films.module.scss";
import FadeIn from "../FadeIn";
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
        <img width="102.96px" height="10px" className={films.img} src="3rd-films.svg" alt="line" />
      </FadeIn>
    </div>
  );
}
