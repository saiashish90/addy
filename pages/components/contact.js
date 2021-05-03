import { useState } from "react";
import contact from "../../styles/contact.module.scss";
import Modal from "./modal";

export default function eleventh() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={[contact.container]}>
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
        }}></Modal>
      <div className={contact.picture}>
        <div className={contact.vectop}>
          <img src="8th-lines.svg" alt="lines" loading="lazy" />
          <img src="8th-lines.svg" alt="lines" loading="lazy" />
        </div>
        <img src="11th-addy.jpeg" alt="adithi chandrashekar" loading="lazy" />
        <div className={contact.vecbottom}>
          <img src="8th-lines.svg" alt="lines" loading="lazy" />
          <img src="8th-lines.svg" alt="lines" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
