import name from "../../styles/name.module.scss";
import FadeIn from "./FadeIn";
export default function home() {
  return (
    <div className={name.container}>
      <FadeIn className={name.name}>
        <h1>
          Adithi
          <br />
          Chandrashekar
        </h1>
      </FadeIn>
      <FadeIn className={name.graphic}>
        <span className={name.showreel}>showreel</span>
        <div>
          <img
            width="100px"
            height="15.32px"
            className={name.vector}
            src="1st-lines.svg"
            alt="svg"
          />
          <span className={name.year}>2021</span>
        </div>
      </FadeIn>
    </div>
  );
}
