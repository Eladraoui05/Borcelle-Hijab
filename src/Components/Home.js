import React from "react";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        
        <div className="content">
        
          <h3><span id="A">E</span><span id="B">l</span><span id="C">e</span><span id="A">g</span><span id="B">a</span><span id="C">n</span><span id="A">c</span><span id="B">e</span>  <span id="C">a</span><span id="A">n</span><span id="B">d</span> 
          <span id="C">T</span><span id="A">r</span><span id="B">a</span><span id="C">d</span><span id="A">i</span><span id="B">t</span><span id="C">i</span><span id="A">o</span><span id="B">n</span><span id="C">!</span></h3>
          <h1>Redefined for the Modern Woman</h1>
          <p >
            At Borcelle Hijab, we celebrate timeless beauty and subtle elegance. <br />
            Our creations blend tradition with modernity, empowering women to express themselves with grace and confidence.<br />
            Each hijab is carefully crafted to enhance your style while honoring your identity.
          </p>
          
        </div>

        
        <div className="video-container">
          <video
            id="hijab"
            src="../videos/Vedio hijab.mp4"
            autoPlay
            loop
            muted
            className="video-style"
            style={{ width: "456px", height: "456px"}}
          ></video>
        </div>
      </div>
    </section>
    
  );
};

export default Home;
