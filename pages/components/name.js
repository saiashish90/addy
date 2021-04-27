import name from "../../styles/name.module.scss";
export default function home() {
  return (
    <section>
      <div>
        <div className={name.container}>
          <div className={name.name}>
            <span>
              Adithi
              <br />
              Chandrashekar
            </span>
          </div>
          <div className={name.graphic}>
            <div className={name.showreel}>showreel</div>
            <div>
              <img className={name.vector} src="a.svg" alt="svg" />
              <div className={name.year}>2021</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
