import React, { useState, useEffect } from 'react';
import '../style.css';
import './Event.css';

const Event = ({ addToCart }) => { 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/event.json') 
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.log('Error loading products:', error));
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-center" id='text-center'>Dernière chance ! Produits en fin de série</h1>
            <p className="text-center">
                Dépêchez-vous de saisir cette dernière chance ! Nos produits en fin de série
                offrent des réductions incroyables sur des articles de qualité dans nos bonnets.
                Stock limité !
            </p>
            <h3 className="text-center" id="promo">For Evening Dress</h3>
            <div className="product-list">
                {products.map(product => (
                    <div className="col" key={product.id}>
                        <div className="card">
                            <img src={product.image} alt={product.title} className="card-img-top" style={{ 
                                height: '300px',   
                                width: '100%',     
                                objectFit: 'cover' 
                            }}/>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                            </div>
                            <div className="d-flex justify-content-around mb-5">
                                <h3>{product.price} MAD</h3>
                                <button
                                    
                                    style={{ height: '35px', borderRadius: '50px', color: '#623dac' }}
                                    onClick={() => addToCart(product)} 
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
        
    );
};

export default Event;
