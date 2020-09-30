import React from "react";
import "./About.css";

export default class About extends React.Component {
  // Function to render FE
  renderFE() {
    return (
      <div data-aos="fade-bottom">
        <h3>{`Services:`}</h3>
        <h4>{`FRONT END ENGINEERING`}</h4>
        <p>
          Front End Development is about building visual elements that users see
          and interact with in a web/mobile application. Using HTML, CSS and
          Javascript, I build fast, responsive user interfaces. This includes
          all API integrations, token and security management <b>etc.</b> for
          the application to be up and running. Building beautiful user
          interfaces makes me happy.
        </p>
        <section className="toolSetContainer" data-aos="fade-up">
          <h5>{`Essentials:`}</h5>
          <div className="bar flex">
            <div className="bar fill" style={{ width: "80%" }}>
              <div className="tag bold flex">HTML</div>
            </div>
            <span>80%</span>
          </div>
          <div className="bar flex">
            <div className="bar fill" style={{ width: "70%" }}>
              <div className="tag bold flex">CSS</div>
            </div>
            <span>70%</span>
          </div>
          <div className="bar flex">
            <div className="bar fill" style={{ width: "70%" }}>
              <div className="tag bold flex">JavaScript</div>
            </div>
            <span>70%</span>
          </div>
          <h5>{`FrameWorks and Architecture:`}</h5>
          <div className="bar flex">
            <div className="bar fill" style={{ width: "80%" }}>
              <div className="tag bold flex">React Native</div>
            </div>
            <span>80%</span>
          </div>
          <div className="bar flex">
            <div className="bar fill" style={{ width: "80%" }}>
              <div className="tag bold flex">Redux</div>
            </div>
            <span>80%</span>
          </div>
          <div className="bar flex">
            <div className="bar fill" style={{ width: "60%" }}>
              <div className="tag bold flex">React</div>
            </div>
            <span>60%</span>
          </div>
          <div className="bar flex">
            <div className="bar fill" style={{ width: "50%" }}>
              <div className="tag bold flex">Angular</div>
            </div>
            <span>50%</span>
          </div>
        </section>
      </div>
    );
  }

  // Function to return BE
  renderBE() {
    return (
      <div style={{ marginTop: 50 }} data-aos="fade-bottom">
        <h4>{`BACK END ENGINEERING`}</h4>
        <p>
          Back End Development is what powers the web. It is the code that
          connects the web to a database, manages user connections and powers
          the web application. Building RESTful services and documenting plays
          an important role in any web/mobile application using REST endpoints.
          Modeling Schemas for the database and managing dependencies is an art.
          Automating Cloud Infrastructure, load balancing and managing access is
          a must for a cloud native application.
        </p>
        <section className="toolSetContainer" data-aos="fade-up">
          <h5>{`Essentials:`}</h5>
          <div className="bar flex">
            <div className="bar fill" style={{ width: "70%" }}>
              <div className="tag bold flex">Java</div>
            </div>
            <span>70%</span>
          </div>
          <div className="bar flex">
            <div className="bar fill" style={{ width: "30%" }}>
              <div className="tag bold flex">Python</div>
            </div>
            <span>30%</span>
          </div>
          <div className="bar flex">
            <div className="bar fill" style={{ width: "70%" }}>
              <div className="tag bold flex">SQL</div>
            </div>
            <span>70%</span>
          </div>
          <div className="bar flex">
            <div className="bar fill" style={{ width: "60%" }}>
              <div className="tag bold flex">Mongo</div>
            </div>
            <span>60%</span>
          </div>
          <h5>{`FrameWorks, RTE and Cloud:`}</h5>
          <div className="bar flex">
            <div className="bar fill" style={{ width: "80%" }}>
              <div className="tag bold flex">NodeJS</div>
            </div>
            <span>80%</span>
          </div>
          <div className="bar flex">
            <div className="bar fill" style={{ width: "60%" }}>
              <div className="tag bold flex">Spring</div>
            </div>
            <span>60%</span>
          </div>
          <div className="bar flex">
            <div className="bar fill" style={{ width: "40%" }}>
              <div className="tag bold flex">AWS</div>
            </div>
            <span>40%</span>
          </div>
          <div className="bar flex">
            <div className="bar fill" style={{ width: "40%" }}>
              <div className="tag bold flex">Terraform</div>
            </div>
            <span>40%</span>
          </div>
        </section>
      </div>
    );
  }

  // Function to render About
  renderAbout() {
    return (
      <div>
        <p>
          Hello, my name is Ravi Kumar. I am a Full Stack Developer living in
          Boston, MA. I am currently pursuing my Masters in{" "}
          <a
            href="https://www.northeastern.edu/graduate/program/master-of-science-in-computer-systems-engineering-14807/"
            target="blank"
          >
            <span className="splMention">Software Engineering</span>
          </a>{" "}
          at Northeastern University. I come from{" "}
          <a href="https://en.wikipedia.org/wiki/India" target="blank">
            <span className="splMention">India</span>
          </a>{" "}
          where I had an experience of working for{" "}
          <a href="https://www.infosys.com/" target="blank">
            <span className="splMention">Infosys</span>
          </a>{" "}
          on several internal as well as client projects. See my work history on{" "}
          <a href="https://www.linkedin.com/in/ravi-kumar-pilla" target="blank">
            <span className="splMention">LinkedIn</span>
          </a>{" "}
          . I am open to Software Developer opportunities starting May 2021.
        </p>
      </div>
    );
  }

  // Main render
  render() {
    return (
      <div className="fade-in">
        <div className="avatarContainer">
          <img
            className="avatar"
            src={require("../../assets/myAvatar.JPG")}
            alt="RK"
          ></img>
        </div>
        <section className="introContainer">
          {`FULL-STACK SOFTWARE ENGINEER`}
        </section>
        <section className="networkContainer">
        <a href="https://www.linkedin.com/in/ravi-kumar-pilla" target="blank"><img className="networkAvatar" src={require("../../assets/linkedIn.png")} alt="linkedIn"></img></a>
        <a href="https://github.com/479BetaCoder" target="blank"><img className="networkAvatar" src={require("../../assets/gitHub.png")} alt="GitHub"></img></a>
        </section>
        <section className="aboutContainer" data-aos="fade-in">
          <h3>{`About:`}</h3>
          {this.renderAbout()}
          {this.renderFE()}
          {this.renderBE()}
        </section>
      </div>
    );
  }
}
