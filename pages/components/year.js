import year from "../../styles/year.module.scss";
import FadeIn from "./FadeIn";
export default function sixth() {
  return (
    <FadeIn className={year.container}>
      <div className={year.video}>
        <img className={year.img_top} src="1st-lines.svg" alt="lines" />
        <div className={year.ratio}>
          <iframe
            src="https://drive.google.com/file/d/1UxCGhQgTg56Rw-8UGRVU6xV2yeG2bAjt/preview"
            frameborder="0"
          />
        </div>
        <img className={year.img_bottom} src="1st-lines.svg" alt="lines" />
      </div>
      <div className={year.text}>
        <div className={year.line}></div>
        <span>
          I filmed 1 second
          <br /> everyday for a year.
        </span>
        <p>
          This was a long-term personal project. I shot 1 second every day for a year. Its intention
          was to slow changes that occur over a period of time.
        </p>
        <p>
          It was also significant as everyday seemed monotonous and tiring, but the documentation
          helped in differentiating it.
        </p>
      </div>
    </FadeIn>
  );
}
