import React from 'react';

const Footer = () => {
  const socialLinks = [
    { href: '#', iconClass: 'fab fa-facebook-f' },
    { href: '#', iconClass: 'fab fa-twitter' },
    { href: '#', iconClass: 'fab fa-instagram' },
    { href: '#', iconClass: 'fab fa-linkedin' },
    { href: '#', iconClass: 'fab fa-pinterest' },
  ];

  const navLinks = ['home', 'about', 'menu', 'products', 'review', 'contact'];

  return (
    <footer>
      <div className="footer">
      
        <div id="footer">
          <div className="info">
          <a href="#" className="logo">
        <img
          src="images/hijab logo.png"
          alt="Logo"
          style={{ borderRadius: "50px", width: "77px" }}
        />
      </a>
            <h3 id="tit">Borcelle Hijab</h3>
            <p id="dark">
              At Borcelle Hijab, we celebrate timeless beauty and subtle elegance. Our creations blend tradition
              with  modernity, empowering women to express themselves with grace and confidence.
            </p>
          </div>

          
          <div>
            <h3 id="tit">Categories</h3>
            <ul className="info">
              <li id='esp'>Hijab and Shawls</li>
              <li id='esp'>Under-Hijab & Bonnets</li>
              <li id='esp'>Jilbab Khimar & Prayer Dresses</li>
              <li id='esp'>Sets</li>
              <li id='esp'>Hijab Bride</li>
              <li id='esp'>Evening dress</li>
            </ul>
          </div>

          
          <div>
            <h3 id="tit">Contact Us</h3>
            <ul className="info">
              <li>
                <img id="icon" src="images/loc icon.png" alt="" style={{ borderRadius: "50px", width: "35px" }}/>
                <span id='sp'>Casa voyageurs Casablanca, Maroc</span>
              </li>
              <li>
                <img id="icon" src="images/email icon.png" alt="" style={{ borderRadius: "50px", width: "35px" }} />
                <span id='sp'>contact@BorcelleHijab.com</span>
              </li>
              <li>
                <img id="icon" src="images/telephone icon.png" alt="" style={{ borderRadius: "50px", width: "35px" }} />
                <span id='sp'>0145934225 - sms 0745976290 </span>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="share">
          {socialLinks.map((link, index) => (
            <a href={link.href} key={index} className={link.iconClass}></a>
          ))}
        </div>

        
        <div className="links">
          {navLinks.map((link, index) => (
            <a href="#" key={index}>
              {link}
            </a>
          ))}
        </div>

        
        <div className="credit">
          created by <span id='cl'>Meriem Eadraoui</span> all rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
