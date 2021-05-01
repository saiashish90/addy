import igtv from "../../styles/igtv1.module.scss";
export default function eight() {
  return (
    <div className={igtv.container}>
      <span>Promotional video for IGTV</span>
      <div className={igtv.video}>
        <img src="8th-lines.svg" alt="lines" />
        <video src="videos/igtv1.mp4" controls />
        <div className={igtv.line}></div>
      </div>
      <p>
        A Promotional Video created for a youTube video on IGTV. The video was for a brand named
        SLANT. The main objective of the video was to reveal the release date.
      </p>
    </div>
  );
}
