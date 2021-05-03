import igtv from "../../styles/igtv2.module.scss";
import FadeIn from "./FadeIn";
export default function ninth() {
  return (
    <div className={igtv.container}>
      <FadeIn className={igtv.text}>
        <div className={igtv.line} />
        <span>Promotional video for IGTV</span>
        <p>
          This video was created for a company named SLANT. I made it to promote their Video release
          on YouTube.
        </p>
      </FadeIn>
      <FadeIn className={igtv.video}>
        <img width="84.29px" height="100px" src="9th-circles.svg" alt="circle" />
        <div className={igtv.ratio}>
          <iframe
            title="drive video player for igtv2"
            src="https://drive.google.com/file/d/1Cv9xUJ4ZudLN_W00tsifh0L9IKeNSXoK/preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            loading="lazy"
          />
        </div>
      </FadeIn>
    </div>
  );
}
