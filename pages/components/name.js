import name from "../../styles/name.module.scss";
import FadeIn from "./FadeIn";
export default function home() {
  return (
    <div className={name.container}>
      <FadeIn className={name.name}>
        <span>
          Adithi
          <br />
          Chandrashekar
        </span>
      </FadeIn>
      <FadeIn className={name.graphic}>
        <span className={name.showreel}>showreel</span>
        <div>
          <img className={name.vector} src="1st-lines.svg" alt="svg" />
          <span className={name.year}>2021</span>
        </div>
      </FadeIn>
    </div>
  );
}
