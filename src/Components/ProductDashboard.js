import React, { useState, useEffect } from "react";
import './ProductDashboard.css'

function ProductDashboard() {
  const [productsList, setProductsList] = useState([]);
  const [formProduct, setFormProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const jsonFiles = [
      { file: "/sets.json", category: "Sets" },
      { file: "/products.json", category: "Products" },
      { file: "/khimar.json", category: "Khimar" },
      { file: "/bride.json", category: "Bride" },
      { file: "/event.json", category: "Event" },
      { file: "/bonnets.json", category: "Bonnets" },
    ];

    const loadProducts = async () => {
      try {
        const productsData = await Promise.all(
          jsonFiles.map(async (fileObj) => {
            const response = await fetch(fileObj.file);
            const data = await response.json();
            return data.map((product) => ({
              ...product,
              category: fileObj.category,
            }));
          })
        );
        setProductsList(productsData.flat());
      } catch (error) {
        console.error("Erreur lors du chargement des produits", error);
      }
    };

    loadProducts();
  }, []);

  const handleDelete = (id) => {
    setProductsList((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const handleEdit = (product) => {
    setFormProduct(product);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setProductsList((prevProducts) =>
      prevProducts.map((product) =>
        product.id === formProduct.id ? formProduct : product
      )
    );
    setFormProduct(null);
    setIsEditing(false);
  };

  const handleAddProduct = () => {
    const newProduct = { ...formProduct, id: Date.now() };
    setProductsList((prevProducts) => [newProduct, ...prevProducts]);
    setFormProduct(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  return (
    <div className="product-dashboard">
      <h1>Gestion des Produits</h1>
      {formProduct && (
        <div className="form-container">
          <h2>{isEditing ? "Modifier un Produit" : "Ajouter un Produit"}</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              isEditing ? handleSaveEdit() : handleAddProduct();
            }}
          >
            <input
              type="text"
              name="title"
              placeholder="Nom du produit"
              value={formProduct.title}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formProduct.description}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Prix"
              value={formProduct.price}
              onChange={handleChange}
              required
            />
            <select
              name="category"
              value={formProduct.category || ""}
              onChange={handleChange}
              required
            >
              <option value="">Choisissez une catégorie</option>
              <option value="Sets">Sets</option>
              <option value="Products">Products</option>
              <option value="Khimar">Khimar</option>
              <option value="Bride">Bride</option>
              <option value="Event">Event</option>
              <option value="Bonnets">Bonnets</option>
            </select>
            <input
              type="file"
              name="image"
              onChange={(e) =>
                setFormProduct((prev) => ({
                  ...prev,
                  image: URL.createObjectURL(e.target.files[0]),
                }))
              }
              required
            />
            <div className="form-buttons">
              <button type="submit">{isEditing ? "Sauvegarder" : "Ajouter"}</button>
              <button type="button" onClick={() => setFormProduct(null)}>Annuler</button>
            </div>
          </form>
        </div>
      )}

      <button onClick={() => setFormProduct({ title: "", description: "", price: "", image: "", category: "" })}>
        Ajouter un Produit
      </button>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Catégorie</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} style={{ width: "50px", height: "50px" }} />
              </td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price} MAD</td>
              <td>{product.category}</td>
              <td>
                
                <button onClick={() => handleEdit(product)}>Modifier</button>
                <button onClick={() => handleDelete(product.id)}>Supprimer</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductDashboard;
