import React, { useState } from 'react';

const About = () => {
  const [isReversed, setIsReversed] = useState(false); 
  const [videoSrc, setVideoSrc] = useState("../videos/hijabVed.mp4"); 
  const [textContent, setTextContent] = useState("Borcelle Hijab is a brand dedicated to offering clothing that blends elegance with modesty. The collection includes hijab dresses, sets, shawls, and khimars, all meticulously crafted to provide style and comfort. The goal is to provide garments that help every woman feel beautiful while honoring her values. Choosing Borcelle Hijab means opting for modern designs that respect tradition."); 

  const handleFlip = (event) => {
    event.preventDefault();
    
    
    setIsReversed(!isReversed);

    if (!isReversed) {
      setVideoSrc("../videos/colis.mp4"); 
      setTextContent("Borcelle Hijab offers elegant, modest clothing, including hijab dresses, sets, shawls, and khimars, designed for style and comfort. Our goal is to help every woman feel beautiful while honoring her values. Choosing Borcelle Hijab means embracing modern designs with respect for tradition.We ensure that every order is carefully handled, with parcels arriving neatly packaged and organized for a pleasant unboxing experience.");
    } else {
      setVideoSrc("../videos/hijabVed.mp4"); 
      setTextContent("Borcelle Hijab is a brand dedicated to offering clothing that blends elegance with modesty. The collection includes hijab dresses, sets, shawls, and khimars, all meticulously crafted to provide style and comfort. The goal is to provide garments that help every woman feel beautiful while honoring her values. Choosing Borcelle Hijab means opting for modern designs that respect tradition.");
    }
  };

  return (
    <section className="about" id="about">
      <h1 id='h1'>about us</h1>
      <div className={`row ${isReversed ? 'reverse' : ''}`}>
        <div className="image">
          <video
            className="image"
            src={videoSrc} 
            autoPlay
            loop
            muted
            style={{ width: '100%', height: '400px', borderRadius: '10px' }}
          ></video>
        </div>
        <div className="content">
          <h3>What is Borcelle Hijab?</h3>
          <p>{textContent}</p> 
          <a href="#" className="btn" onClick={handleFlip}>learn more</a>
        </div>
      </div>
    </section>
  );
}

export default About;
