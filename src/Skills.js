import React, { Component } from "react";
import javascript from "./assets/javascript.png";
import react from "./assets/react.png";
import redux from "./assets/redux.png";
import css3 from "./assets/css3.png";
import html5 from "./assets/html.png";
import node from "./assets/node.png";
import postman from "./assets/postman.png";
import git from "./assets/githubpng.png";
import express from "./assets/express.png";
import auth0 from "./assets/auth0.png";
import sass from "./assets/sass.png";
import sql from "./assets/sql.png";
class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="skills">
          <span className="skill">
            <img src={javascript} alt="JS" />
            <p>Javascript</p>
          </span>
          <span className="skill">
            <img src={react} alt="react" />
            <p>React</p>
          </span>
          <span className="skill">
            <img src={redux} alt="redux" />
            <p>Redux</p>
          </span>
          <span className="skill">
            <img src={css3} alt="css3" />
            <p>CSS3</p>
          </span>
          <span className="skill">
            <img src={html5} alt="html5" />
            <p>HTML5</p>
          </span>
          <span className="skill">
            <img src={node} alt="node.js" />
            <p>Node.js</p>
          </span>
          <span className="skill">
            <img src={postman} alt="postman" />
            <p>Postman</p>
          </span>
          <span className="skill">
            <img src={git} alt="git" />
            <p>Git</p>
          </span>
          <span className="skill">
            <img src={express} alt="express" />
            <p>Express</p>
          </span>
          <span className="skill">
            <img src={auth0} alt="autho0" />
            <p>Auth0</p>
          </span>
          <span className="skill">
            <img src={sass} alt="sass" />
            <p>SASS</p>
          </span>
          <span className="skill">
            <img src={sql} alt="sql" />
            <p>SQL</p>
          </span>
        </div>
      </div>
    );
  }
}
export default Skills;
