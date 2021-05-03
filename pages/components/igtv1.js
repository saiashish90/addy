import igtv from "../../styles/igtv1.module.scss";
import FadeIn from "./FadeIn";
export default function eight() {
  return (
    <div className={igtv.container}>
      <FadeIn>
        <span>Promotional video for IGTV</span>
      </FadeIn>
      <FadeIn className={igtv.video}>
        <img width="90px" height="100px" src="8th-lines.svg" alt="lines" />
        <video src="videos/igtv1.mp4" controls loading="lazy" />
        <div className={igtv.line}></div>
      </FadeIn>
      <FadeIn className={igtv.p}>
        <p>
          A Promotional Video created for a youTube video on IGTV. The video was for a brand named
          SLANT. The main objective of the video was to reveal the release date.
        </p>
      </FadeIn>
    </div>
  );
}
