import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
      <h1>Contact Me</h1>
        <div className="contact-form">
          <span>
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Who are you?" />
          </span>
          <span>
            <label for="email">E-Mail</label>
            <input type="text" id="email" placeholder="What's YOUR email?" />
          </span>
          <span>
            <label for="subject">Subject</label>
            <input type="text" id="subject" placeholder="What is the offer?" />
          </span>
          <span>
            <label for="message">Message</label>
            <input type="t" id="message" placeholder="YES!" />
          </span>
        </div>
      </div>
    );
  }
}
export default Contact;
