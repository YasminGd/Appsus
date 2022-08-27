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
                            I work very well under pressure, love to face challenges and reach
                            new heights.
                        </h4>
                    </div>
                </div>
                <div className="yasmin">
                    <div className="image-container">
                        <img src="./assets/img/yasmin.png" alt="" />
                    </div>
                    <div className="text-container">
                        <h3 className="name">Yasmin Gudha</h3>
                        <h5 className="age">22 Years Old</h5>
                        <div className="divider"></div>
                        <h4 className="txt">
                            Fast learner and curios by nature, Always loves to learn about new things.
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
