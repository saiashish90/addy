import convo from "../../styles/convo2.module.scss";
export default function seventh() {
  return (
    <div className={convo.container}>
      <div className={convo.line}></div>
      <div className={convo.text}>
        <span>
          <span className={convo.inner}>CONVO 2</span> Ft. Pooja Nagraj
        </span>
        <p>
          This is the 2nd film of the CONVO series. It tries to explore the behind-the-scenes
          process and the insecurities in the mind of a singer/ content creator. It majorly looks at
          this digitalized world from the point of view of an artist.
        </p>
      </div>
      <div className={convo.video}>
        <div className={convo.ratio}>
          <iframe
            src="https://drive.google.com/file/d/1VcDmGLx850xF5oKrFI9XJPfq4gAy64Zt/preview"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}
