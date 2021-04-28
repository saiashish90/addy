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
            <span className={name.showreel}>showreel</span>
            <div> 
              <img className={name.vector} src="a.svg" alt="svg" />
              <span className={name.year}>2021</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
