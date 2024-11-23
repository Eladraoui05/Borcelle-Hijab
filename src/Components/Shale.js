import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Shale.css';

function Shale({ addToCart }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container py-5">
       <h1 className="text-center" id="text-center">Dernière chance ! Produits en fin de série</h1>
            <p className="text-center">
                Dépêchez-vous de saisir cette dernière chance ! Nos produits
                en fin de série offrent des réductions incroyables sur des articles de qualité dans nos challes. Stock Limitée !
            </p>
            <h3  id="promo">For Hijab & Shawls</h3>
      <div className="product-grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} className="card-img-top" style={{ height: "300px", objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
            </div>
            <div className="d-flex justify-content-around mb-5">
              <h3>{product.price} MAD</h3>
              <button className="btn btn-dark" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shale;
