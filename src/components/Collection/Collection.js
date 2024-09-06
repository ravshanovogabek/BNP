import React, { useState } from 'react';
import './collection.css';


// Example products
const products = [
  { id: 1, season: 'Qish', name: 'Kvadratchalar', price: '$25', image: 'https://bnpfabrik.vercel.app/assets/kvadrat-Cmu75VqI.jpg', description: 'Modern geometric patterns perfect for winter.' },
  { id: 2, season: 'Qish', name: 'Ikat', price: '$30', image: 'https://bnpfabrik.vercel.app/assets/ikat-CQZ-Qy2u.jpg', description: 'Traditional Ikat style with a winter twist.' },
  { id: 3, season: 'Qish', name: 'Davralar', price: '$22', image: 'https://bnpfabrik.vercel.app/assets/davralar-J4ZKXgSr.jpg', description: 'Circular patterns in a winter-themed color palette.' },
  { id: 4, season: 'Qish', name: 'Geometriya kok', price: '$28', image: 'https://bnpfabrik.vercel.app/assets/geometriya-CSNEnk_7.jpg', description: 'Blue geometric designs with a winter vibe.' },
  { id: 5, season: 'Qish', name: 'Tropik Barglar', price: '$35', image: 'https://bnpfabrik.vercel.app/assets/tropik-DwuQOop4.jpg', description: 'Tropical leaves in a cool winter palette.' },
  { id: 6, season: 'Qish', name: 'Bambi', price: '$20', image: 'https://bnpfabrik.vercel.app/assets/bambi-KdA38_2S.jpg', description: 'Cute Bambi design perfect for the colder months.' },
  { id: 7, season: 'Qish', name: 'Vizantiya', price: '$27', image: 'https://bnpfabrik.vercel.app/assets/vizant-BYxF_mM0.jpg', description: 'Byzantine-inspired patterns for winter.' },
  { id: 8, season: 'Qish', name: 'Kechki Bog', price: '$40', image: 'https://bnpfabrik.vercel.app/assets/kechki-bog-_qV9ES4-.jpg', description: 'Evening garden theme in winter colors.' },
  { id: 9, season: 'Qish', name: 'Pat Markiz', price: '$32', image: 'https://bnpfabrik.vercel.app/assets/markiz-CtouN3PL.jpg', description: 'Elegant pattern fit for a winter Marquis.' },
  { id: 10, season: 'Qish', name: 'Lavanda atirgullari', price: '$26', image: 'https://bnpfabrik.vercel.app/assets/logo15-ZjzY2vX3.jpg', description: 'Lavender roses in a delicate winter design.' },
  { id: 11, season: 'Kuz', name: 'Safari', price: '$24', image: 'https://bnpfabrik.vercel.app/assets/safari-DrcxBVvc.jpg', description: 'Autumn safari-inspired prints.' },
  { id: 12, season: 'Kuz', name: 'Koprangli ametist', price: '$29', image: 'https://bnpfabrik.vercel.app/assets/ametist-CPTKVyOc.jpg', description: 'Amethyst colors blended with autumn tones.' },
  { id: 13, season: 'Kuz', name: 'Shivali bezak', price: '$31', image: 'https://bnpfabrik.vercel.app/assets/shivali-BZAnCCJl.jpg', description: 'Intricate autumn decorations in Shivali style.' },
  { id: 14, season: 'Kuz', name: 'Zumrad', price: '$30', image: 'https://bnpfabrik.vercel.app/assets/zumrad-CNsYuEZU.jpg', description: 'Emerald greens for the fall season.' },
  { id: 15, season: 'Kuz', name: 'Malaxit qutisi', price: '$33', image: 'https://bnpfabrik.vercel.app/assets/malxit-CQ6YjTi_.jpg', description: 'Malachite box design in autumn tones.' },
  { id: 16, season: 'Kuz', name: 'Bahorning hidlari', price: '$25', image: 'https://bnpfabrik.vercel.app/assets/bahor-hid-WBi-IA65.jpg', description: 'Spring fragrances captured in fall colors.' },
  { id: 17, season: 'Kuz', name: 'Kuzgi barglar tushishi', price: '$28', image: 'https://bnpfabrik.vercel.app/assets/Kuzgi-CbyWItoT.jpg', description: 'Falling autumn leaves design.' },
  { id: 18, season: 'Kuz', name: 'Moviy Shabada (AB)', price: '$35', image: 'https://bnpfabrik.vercel.app/assets/moviy-shab-DsQR-jk1.jpg', description: 'Blue breeze theme for autumn.' },
  { id: 19, season: 'Kuz', name: 'Moviy suv (AB)', price: '$38', image: 'https://bnpfabrik.vercel.app/assets/moviy-suv-DLTMaTXk.jpg', description: 'Deep blue water patterns for autumn.' },
  { id: 20, season: 'Kuz', name: 'Plaid', price: '$40', image: 'https://bnpfabrik.vercel.app/assets/plaid-BqAYr5-k.jpg', description: 'Classic plaid designs in fall colors.' },
  { id: 21, season: 'Yozgi', name: 'Vintage uslubi', price: '$42', image: 'https://bnpfabrik.vercel.app/assets/vintage-DBsnYrAb.jpg', description: 'Vintage styles perfect for summer.' },
  { id: 22, season: 'Yozgi', name: 'Koprangli ametist', price: '$34', image: 'https://bnpfabrik.vercel.app/assets/ametist-CPTKVyOc.jpg', description: 'Amethyst tones for the summer season.' },
  { id: 23, season: 'Yozgi', name: 'Fransuz Riviera', price: '$50', image: 'https://bnpfabrik.vercel.app/assets/fransuz-CKkLs_qZ.jpg', description: 'French Riviera inspired designs for summer.' },
  { id: 24, season: 'Yozgi', name: 'Qoy Dolli', price: '$45', image: 'https://bnpfabrik.vercel.app/assets/qoy-dolli-ic22Rpbk.jpg', description: 'Dolly sheep theme perfect for a summer day.' },
  { id: 25, season: 'Yozgi', name: 'Alp toglari osimliklari', price: '$36', image: 'https://bnpfabrik.vercel.app/assets/alp-tog-uGTG4qjD.jpg', description: 'Alpine flora captured in summer colors.' },
  { id: 26, season: 'Yozgi', name: 'Ilhomlantiruvchi', price: '$38', image: 'https://bnpfabrik.vercel.app/assets/ilhomlantiruvchi-TBRZKPn0.jpg', description: 'Inspiring summer designs.' },
  { id: 27, season: 'Yozgi', name: 'Yashil lotus', price: '$41', image: 'https://bnpfabrik.vercel.app/assets/yashil-C_l_b14D.jpg', description: 'Green lotus designs for the summer season.' },
  { id: 28, season: 'Yozgi', name: 'Togli makkajoxori', price: '$39', image: 'https://bnpfabrik.vercel.app/assets/makka-CLa72Pku.jpg', description: 'Mountain corn patterns in summer colors.' },
  { id: 29, season: 'Yozgi', name: 'Sakura filiali', price: '$43', image: 'https://bnpfabrik.vercel.app/assets/Sakura-B5Tfvmwd.jpg', description: 'Sakura branch design perfect for summer.' },
  { id: 30, season: 'Yozgi', name: 'Zaytun novdasi', price: '$47', image: 'https://bnpfabrik.vercel.app/assets/Zaytun-CC6OlZne.jpg', description: 'Olive branch designs with a summer vibe.' },
  // Add more products as needed
];

const Collection = () => {
  const [selectedSeason, setSelectedSeason] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [basket, setBasket] = useState([]);
  const [showBasket, setShowBasket] = useState(false);

  const handleFilterChange = (season) => {
    setSelectedSeason(season);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddToBasket = (product) => {
    setBasket([...basket, product]);
  };

  const handleRemoveFromBasket = (productId) => {
    setBasket(basket.filter(item => item.id !== productId));
  };

  const handlePurchase = () => {
    alert(`You have purchased ${basket.length} items!`);
    setBasket([]);
  };

  const handleToggleBasket = () => {
    setShowBasket(!showBasket);
  };

  const filteredProducts = products
    .filter(
      (product) =>
        (selectedSeason === 'All' || product.season === selectedSeason) &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="collection-container">
      <div className="filter-section">
        <button onClick={() => handleFilterChange('All')}>
          <i className="fas fa-th"></i> All
        </button>
        <button onClick={() => handleFilterChange('Qish')}>
          <i className="fas fa-snowflake"></i> Qish
        </button>
        <button onClick={() => handleFilterChange('Kuz')}>
          <i className="fas fa-leaf"></i> Kuz
        </button>
        <button onClick={() => handleFilterChange('Yozgi')}>
          <i className="fas fa-sun"></i> Yozgi
        </button>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="basket-toggle" onClick={handleToggleBasket}>
          <i className="fas fa-shopping-basket"></i> Basket: {basket.length} items
        </button>
      </div>

      <div className={`basket-sidebar ${showBasket ? 'show' : ''}`}>
        <button className="basket-close" onClick={handleToggleBasket}>
          <i className="fas fa-times"></i>
        </button>
        <h2>Your Basket</h2>
        <ul>
          {basket.length > 0 ? (
            basket.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} className="basket-item-image" />
                <div className="basket-item-info">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <button className="remove-button" onClick={() => handleRemoveFromBasket(item.id)}>
                    <i className="fas fa-trash"></i> Remove
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>No items in the basket.</p>
          )}
        </ul>
        <button className="purchase-button" onClick={handlePurchase} disabled={basket.length === 0}>
          <i className="fas fa-credit-card"></i> Purchase
        </button>
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <button className="add-to-basket-button" onClick={() => handleAddToBasket(product)}>
                  <i className="fas fa-cart-plus"></i> Add to Basket
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Collection;