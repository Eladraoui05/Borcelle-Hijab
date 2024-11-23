import React from 'react';
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 id='h1'> contact us </h1>

      <div className="row">
      <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17009.97479742932!2d-7.589943103156994!3d33.58930800847738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131b59e343074eef%3A0x8010ee25662b3e36!2sHassan%202%20University%20of%20Casablanca!5e0!3m2!1sen!2smr!4v1678971732614!5m2!1sen!2smr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <form>
          <h3>get in touch</h3>
          <div className="inputBox">
            <span className="fas fa-user"></span>
            <input type="text" placeholder="name"  required/>
          </div>
          <div className="inputBox">
            <span className="fas fa-envelope"></span>
            <input type="email" placeholder="email" required />
          </div>
          <div className="inputBox">
            <span className="fas fa-phone"></span>
            <input type="number" placeholder="number" required />
          </div>
          
          <Link to="/">
                        <button className="nav-btn" id="nav-btn" >Send</button>
      </Link>
        </form>
      </div>
    </section>
  );
};

export default Contact;
