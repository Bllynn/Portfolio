import React, { Component } from "react";

class Contact extends Component {
  state = { form: {} };

  handleSubmit = event => {
    const { name, email, subject, message } = this.state.form;
    alert(`${name},${email},${subject},${message}`);
  };
  handleChange = event => {
    let form = this.state.form;
    let name = event.target.name;
    let value = event.target.value;
    form[name] = value;
    this.setState({ form });
  };

  render() {
    return (
      <div className="contact-container">
        <h1>Contact Me</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="contact-form">
            <span>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                onChange={this.handleChange}
                id="name"
                name="name"
                value={this.state.name}
                placeholder="Name"
              />
            </span>
            <span>
              <label htmlFor="email">E-Mail</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                placeholder="Email"
              />
            </span>
            <span>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                onChange={this.handleChange}
                value={this.state.subject}
                placeholder="Subject"
              />
            </span>
            <span>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                onChange={this.handleChange}
                value={this.state.message}
                placeholder="Message"
              />
            </span>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default Contact;
