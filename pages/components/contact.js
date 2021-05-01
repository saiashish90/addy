import contact from "../../styles/contact.module.scss";
export default function eleventh() {
  return (
    <div className={contact.container}>
      <div className={contact.text}>
        <h1>Work with me</h1>
        <h2>Email</h2>
        <span>adithi.chandrashekar@flame.edu.in</span>
        <h2>Mobile</h2>
        <span>+91 9110289347</span>
        <button>Contact Me</button>
      </div>
      <div className={contact.picture}>
        <div className={contact.line} />
        <img src="11th-addy.jpeg" alt="adithi chandrashekar" />
      </div>
    </div>
  );
}
