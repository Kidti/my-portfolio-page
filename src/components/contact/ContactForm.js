import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
        <h3 style={{color:"var(--lightseagreen)"}}>Feel free to contact me &#128522;</h3><br/>
      <form action="https://formsubmit.co/kitti.deb@gmail.com" method="POST">
        <input type="hidden" name="_subject" value="New e-mail from website!" />
        <input type="text" name="name" placeholder="Name" required />
        <input type="hidden" name="_next" value="http://localhost:3000/" />
        <input type="email" name="email" placeholder="Enter your e-mail" required />
        <textarea type="text" name="message" placeholder="Your message" maxLength="300" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
