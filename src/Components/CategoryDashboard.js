import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoryDashboard.css';

const CategoryDashboard = () => {

  const [categories, setCategories] = useState([
    { id: 1, title: 'Hijab & Shawls', link: '/hijab-shawls' },
    { id: 2, title: 'Under-Hijabs & Bonnets', link: '/under-hijabs-bonnets' },
    { id: 3, title: 'Jilbab Khimar & Prayer Dresses', link: '/jilbab-khimar-prayer-dresses' },
    { id: 4, title: 'Sets', link: '/sets' },
    { id: 5, title: 'Hijab Bride', link: '/hijab-bride' },
    { id: 6, title: 'Evening Dress', link: '/evening-dress' },
  ]);

  
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([
        ...categories,
        { id: categories.length + 1, title: newCategory, link: `/${newCategory.toLowerCase().replace(/\s+/g, '-')}` },
      ]);
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  const handleEditCategory = (id, newTitle) => {
    const updatedCategories = categories.map(category => 
      category.id === id ? { ...category, title: newTitle } : category
    );
    setCategories(updatedCategories);
  };

  return (
    <div>
      <h1 id="h1">Category Dashboard</h1>

      <section className="Cat" id="Cat">

        <div className="add-category">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Enter new category"

          />
          <button onClick={handleAddCategory}>Add Category</button>
        </div>

        <div className="box-container">
          {categories.map((category) => (
            <div key={category.id} className="box">
              <Link to={category.link} className="btnM">{category.title}</Link>

            
              <button onClick={() => {
                const newTitle = prompt('Enter new category name:', category.title);
                if (newTitle) handleEditCategory(category.id, newTitle);
              }}>
                Edit
              </button>

              
              <button onClick={() => handleDeleteCategory(category.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CategoryDashboard;
