import React, { useEffect, useState } from 'react';

import './Bonnets.css';

function Bonnets({ addToCart }) { 
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('/bonnets.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);


    return (
        <div className="container py-5">
            <h1 className="text-center" id='text-center'>Dernière chance ! Produits en fin de série</h1>
            <p className="text-center">
                Dépêchez-vous de saisir cette dernière chance ! Nos produits en fin de série
                offrent des réductions incroyables sur des articles de qualité dans nos bonnets.
                Stock limité !
            </p>
            <h3 className="text-center" id="promo">For Under-Hijabs & Bonnets</h3>
            <div className="product-list">
                {products.map(product => (
                    <div className="card" key={product.id}>
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="card-img-top" 
                        />
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: '#623dac' }}>{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                        </div>
                        <div className="d-flex justify-content-around mb-5">
                            <h3 style={{ marginTop: '10px' }}>{product.price} MAD</h3>
                            <button
                                id='btn '
                                style={{ height: '35px', borderRadius: '50px', color: '#623dac' }}
                                onClick={() => addToCart(product)} 
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bonnets;
