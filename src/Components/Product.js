import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import './product.css'

const products = [
  { id: 1, name: "Hijab Floral", image: "images/khimar4.jpg", new_price: 20.99, old_price: 25.99 },
  { id: 4, name: "Silk Bonnet", image: "images/bonnet2.jpg", new_price: 22.99, old_price: 27.99 },
  { id: 5, name: "Prayer Dress Blue", image: "images/bride1.jpg", new_price: 35.99, old_price: 40.99 },
  { id: 7, name: "Set Casual", image: "images/ens1.jpg", new_price: 55.99, old_price: 60.99 },
  { id: 11, name: "Evening Dress Gold", image: "images/event2.jpg", new_price: 85.99, old_price: 90.99 },
];

const Products = () => {
  return (
    <div >
      <h1 id='h1'>See What's New</h1>
      <div className="popular">
      <hr />
      <div className="popular-item">
        {products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <Link to="/hijab-shawls">
                        <button className="View">View ALL</button>
      </Link>
    </div>
    </div>
  );
};

export default Products;
