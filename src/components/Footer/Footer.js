import React from "react";
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <section className="emailSection border">
          <div className="inner-container">
            <h1>Interested in doing projects together?</h1>
            <a
              href="mailto:ravikumar.pilla479@gmail.com"
              className="btnEmail"
            >
              Email Me <span className="arrow-right">→</span>
            </a>
          </div>
        </section>
        <footer className="border">
          <p>
            <b>
              Ravi Kumar &copy;{" "}
              <span id="footer-date">{new Date().getFullYear()}</span>
            </b>
          </p>
          <p>
            <span className="inspiredText">Inspired from <a href="https://benadam.me/" target="blank">Ben Adam</a></span>
          </p>
        </footer>
      </div>
    );
  }
}
