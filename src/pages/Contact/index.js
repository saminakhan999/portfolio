import React from "react";

function Contact() {
  return (
    <section id="contact" className="contactContainer">
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="realContactContainer">
        <div className="contactTop">
          <h1 className="contactTitle">Contact Me</h1>
          <p className="contactPara">
            Thank you so much for visiting my page! Please feel free to contact
            me about anything, I look forward to hearing from you!
          </p>
          <br></br>
          <br></br>
          <h1>
            Connect with me on Linkedin!
            <a href="https://www.linkedin.com/in/samina-khan1997/">
              <img
                className="contactIcon"
                src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
              ></img>
            </a>
          </h1>
          <br></br>
          <h1>
            Check out my projects on Github!
            <a href="https://github.com/saminakhan999">
              <img
                className="contactIcon"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              />
            </a>
          </h1>
          <br></br>
          <h1>
            Feel free to drop me an email!
            <a href="mailto:samina.khan9999@gmail.com? subject=HTML link">
              <img
                className="contactIcon"
                src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              ></img>
            </a>
          </h1>
          <br></br>
          <h1>
            You're welcome to send me a message using the form below and I'll
            get back to you within 24 hours!
          </h1>
          <br></br>
          <form
            action="mailto:samina.khan9999@gmail.com"
            method="POST"
            enctype="multipart/form-data"
            name="EmailForm"
          >
            <label htmlFor="name"> Name: </label>
            <input id="name" type="text" size="19" name="ContactName"></input>
            <br></br>
            <label htmlFor="email"> Email: </label>
            <input id="email" type="email" size="19" name="ContactName"></input>
            <br></br>
            <label htmlFor="message"> Message: </label>
            <textarea id="message" name="ContactCommentt" rows="6" cols="20"></textarea> <br></br>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
