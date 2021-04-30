import fake from "../../styles/fake.module.scss";
import FadeIn from "./FadeIn";
export default function fourth() {
  return (
    <FadeIn className={fake.container}>
      <div className={fake.line}></div>
      <div className={fake.content}>
        <div className={fake.text}>
          <span className={fake.head}>PSA on fake news</span>
          <p>I made this film as a part of my final year Journalism project.</p>
          <span>(UnderGraduate)</span>
          <p>It portrays the downsides of Fake News, portrayed from a child's perspective.</p>
        </div>
        <div className={fake.video}>
          <div className={fake.ratio}>
            <iframe
              src="https://www.youtube.com/embed/tntA-cLKObc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
        <div className={fake.linemobile}></div>
      </div>
      <img src="4th-lines.svg" alt="lines" />
    </FadeIn>
  );
}
