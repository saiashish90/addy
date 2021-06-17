import fake from "./fake.module.scss";
import FadeIn from "../FadeIn";
export default function fourth() {
  return (
    <div className={fake.container}>
      <FadeIn className={fake.line}></FadeIn>
      <FadeIn className={fake.content}>
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
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
        <div className={fake.linemobile}></div>
      </FadeIn>
      <FadeIn className={fake.img}>
        <img width="180px" height="100px" src="4th-lines.svg" alt="lines" />
      </FadeIn>
    </div>
  );
}
