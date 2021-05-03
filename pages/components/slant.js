import slant from "../../styles/slant.module.scss";
import FadeIn from "./FadeIn";
export default function tenth() {
  return (
    <div className={slant.container}>
      <FadeIn className={slant.video}>
        <div className={slant.line} />
        <div className={slant.ratio}>
          <iframe
            src="https://www.youtube.com/embed/qHe6rMYCqpk"
            title="YouTube video player for slant media"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <img width="79.60px" height="100px" src="10th-circles.svg" alt="circles" />
      </FadeIn>
      <FadeIn className={slant.text}>
        <span>
          "Do all Artists think the same"
          <br />
          YouTube Video.
        </span>
        <p>This video was created by interviewing six artists from six diverse fields.</p>
      </FadeIn>
    </div>
  );
}
