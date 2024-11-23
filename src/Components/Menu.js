import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <h1  id='h1'>Our category</h1>
    <section className="menu" id="menu">
      
      
      <div className="box-container">

        <div className="box" id='boxA'>
          <Link to="/hijab-shawls" className="btnM">  Shawls</Link>
        </div>

        <div className="box" id='boxB'>
          
          
          <Link to="/under-hijabs-bonnets" className="btnM"> Bonnets </Link>
        </div>

        <div className="box" id='boxC'>
        <Link to="/sets" className="btnM">Sets</Link>
        </div>

        <div className="box" id='boxC'>
        <Link to="/jilbab-khimar-prayer-dresses" className="btnM">Prayer Dresses</Link>
          
          
        </div>

        <div className="box" id='boxA'>
          
          
          <Link to="/hijab-bride" className="btnM"> Bride Dress</Link>
        </div>

        <div className="box" id='boxB'>
          <Link to="/evening-dress" className="btnM">Evening Dress</Link>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Menu;
