import { useState } from "react";
import contact from "./contact.module.scss";
import FadeIn from "../FadeIn";
import Modal from "./modal";

export default function eleventh() {
  const [isOpen, setIsOpen] = useState(false);
  const [flash, setFlash] = useState(0);
  let flashmessage;
  if (flash == 200) {
    flashmessage = <FadeIn className={contact.flash}>Message Sent</FadeIn>;
  } else if (flash == 0) {
    flashmessage = null;
  } else {
    flashmessage = <FadeIn className={contact.flash}>Failed to send</FadeIn>;
  }
  const displayFlash = (status) => {
    setFlash(200);
    setTimeout(() => {
      setFlash(0);
    }, 2000);
  };
  return (
    <FadeIn className={contact.container}>
      <div className={contact.text}>
        <span className={contact.h1}>Work with me</span>
        <span className={contact.h2}>Email</span>
        <span>adithi.chandrashekar@flame.edu.in</span>
        <span className={contact.h3}>Mobile</span>
        <span>+91 9110289347</span>
        <button onClick={() => setIsOpen(true)}>
          <span className={contact.but}>Contact Me!</span>
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
        flash={displayFlash}
      />
      <div className={contact.picture}>
        <div className={contact.vectop}>
          <img width="90px" height="100px" src="8th-lines.svg" alt="lines" loading="lazy" />
          <img width="90px" height="100px" src="8th-lines.svg" alt="lines" loading="lazy" />
        </div>
        <img
          width="802.567px"
          height="451.167px"
          src="11th-addy.jpeg"
          alt="adithi chandrashekar"
          loading="lazy"
        />
        <div className={contact.vecbottom}>
          <img width="90px" height="100px" src="8th-lines.svg" alt="lines" loading="lazy" />
          <img width="90px" height="100px" src="8th-lines.svg" alt="lines" loading="lazy" />
        </div>
      </div>
      {flashmessage}
    </FadeIn>
  );
}
