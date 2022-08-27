export function About() {
  return (
    <section className="about">
      <h1 className="about-title">
        Meet Our <span className="blue">Team</span>
      </h1>

      <div className="about-team">
        <div className="bar">
          <div className="image-container">
            <img src="./assets/img/bar.jpeg" alt="" />
          </div>
          <div className="text-container">
            <h3 className="name">Bar Ohayon</h3>
            <h5 className="age">28 Years Old</h5>
            <div className="divider"></div>
            <h4 className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, harum vitae quas impedit quos dignissimos.
            </h4>
          </div>
        </div>
        <div className="yasmin">
          <div className="image-container">
            <img src="./assets/img/bar.jpeg" alt="" />
          </div>
          <div className="text-container">
            <h3 className="name">Yasmin Gudha</h3>
            <h5 className="age">22 Years Old</h5>
            <div className="divider"></div>
            <h4 className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              saepe mollitia sapiente, deserunt sint iusto.
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}
