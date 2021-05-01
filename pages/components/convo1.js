import convo from "../../styles/convo1.module.scss";
import FadeIn from "./FadeIn";
export default function fifth() {
  return (
    <div className={convo.container}>
      <FadeIn className={convo.container}>
        <span>CONVO 1: Ft Krittika Chillal </span>
        <div className={convo.video}>
          <img src="5th-lines.svg" alt="lines" />
          <iframe
            title="drive video player for convo"
            src="https://drive.google.com/file/d/1qoLWYhcvh_LiDJKb9F8EWG7LX4hrZoOD/preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
          />
          <div className={convo.line}></div>
        </div>
        <p>
          This is a personal project that I took up during the initial stages of the pandemic. The
          intention was to document conversations with close friends, a process that lacked during
          the pandemic.{" "}
        </p>
      </FadeIn>
    </div>
  );
}
