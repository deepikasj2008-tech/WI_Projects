function Contact() {
  return (
    <section className="page">
      <h1>Contact Me</h1>

      <p className="page-intro">
        Have a project idea or want to connect? Feel free to contact me.
      </p>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Let's Connect</h2>

          <p>
            I am always interested in learning new technologies and working
            on creative projects.
          </p>

          <div className="contact-item">
            <strong>Email</strong>
            <p>deepika@example.com</p>
          </div>

          <div className="contact-item">
            <strong>Location</strong>
            <p>Tamil Nadu, India</p>
          </div>

          <div className="contact-item">
            <strong>GitHub</strong>
            <p>github.com/deepikasj2008-tech</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <input type="text" placeholder="Subject" />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;