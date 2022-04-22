import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
        <h3 style={{color:"var(--lightseagreen)"}}>In case you want to contact me:</h3>
      <form action="https://formsubmit.co/kitti.deb@gmail.com" method="POST">
        <input type="hidden" name="_subject" value="New e-mail from website!" />
        <input type="text" name="name" placeholder="Name" required />
        <input type="hidden" name="_next" value="http://localhost:3000/" />
        <input type="email" name="email" placeholder="Enter e-mail" required />
        <input type="text" name="message" placeholder="Your message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
