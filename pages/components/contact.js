import contact from "../../styles/contact.module.scss";
export default function eleventh() {
  return (
    <div className={contact.container}>
      <div className={contact.text}>
        <span className={contact.h1}>Work with me</span>
        <span className={contact.h2}>Email</span>
        <span>adithi.chandrashekar@flame.edu.in</span>
        <span className={contact.h3}>Mobile</span>
        <span>+91 9110289347</span>
        <button>
          <span className={contact.but}>Contact Me!</span>
        </button>
      </div>
      <div className={contact.picture}>
        <div className={contact.vectop}>
          <img src="8th-lines.svg" alt="lines" />
          <img src="8th-lines.svg" alt="lines" />
        </div>
        <img src="11th-addy.jpeg" alt="adithi chandrashekar" />
        <div className={contact.vecbottom}>
          <img src="8th-lines.svg" alt="lines" />
          <img src="8th-lines.svg" alt="lines" />
        </div>
      </div>
    </div>
  );
}
