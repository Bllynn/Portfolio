import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Contact from "./Contact";
import pillars from "./pillars_of_creation-t2.jpg";
import pinwheel from "./pinwheel_galaxy.jpg";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="background-image1" backgroundImage={pillars}>
          <Navbar />
          <div className="intro">
            <h1>Brandon Griffith</h1>
            <p>
              I need to write a chunk of text that actually demonstrates what
              actual text on a page might look like. With proper spacing and
              indentation, we can see that the words flow on the page a certain
              way.
              {/* I am driven by my love of learning, and strive to better myself on
              a daily basis. I have been recognized for my excellent customer
              service, and ability to help people solve problems. I strive to
              make myself a valuable asset to the team through hard work, while
              maintaining positive energy with great communication skills. */}
            </p>
          </div>
        </div>
        <div className="background-image2">
          <div className="projects-container">
            <div className="project1">
              <h1>Project1</h1>
            </div>
            <div className="project2">
              <h1>Project2</h1>
            </div>
            <div className="project3">
              <h1>Project3</h1>
            </div>
          </div>
        </div>
        <div className="background-image3">
          <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills">
              <p>I have a lot of skills</p>
            </div>
          </div>
        </div>
        <Contact />
        <div className="footer">
          <ul className="footer-links">
            <li>github</li>
            <li>linkedin</li>
          </ul>
          <p>copyright Brandon Griffith 2019</p>
        </div>
      </div>
    );
  }
}

export default App;
