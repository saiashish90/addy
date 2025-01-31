import intro from "./intro.module.scss";
import FadeIn from "../FadeIn";
import Image from "next/image";
export default function second() {
  return (
    <section className={intro.section}>
      <div className={intro.container}>
        <FadeIn className={intro.picture}>
          <div className={intro.line}></div>
          <Image src="/2nd-addy.jpg" alt="adithi" width={500} height={600} layout="intrinsic" />
        </FadeIn>
        <FadeIn className={intro.info}>
          <span>
            Adithi&nbsp;
            <br />
            Chandrashekar
          </span>
          <span>Video Editor</span>
          <span>About me</span>
          <p>
            I study and create to be able to tell stories better. I am a student of communication
            and a video editor, both by passion.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
