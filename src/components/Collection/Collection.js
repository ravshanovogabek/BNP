import React, { useState } from 'react';
import './collection.css';

const products = [
  { id: 1, season: 'Qish', name: 'Kvadratchalar', image: 'https://bnpfabrik.vercel.app/assets/kvadrat-Cmu75VqI.jpg' },
  { id: 2, season: 'Qish', name: 'Ikat', image: 'https://bnpfabrik.vercel.app/assets/ikat-CQZ-Qy2u.jpg' },
  { id: 3, season: 'Qish', name: 'Davralar', image: 'https://bnpfabrik.vercel.app/assets/davralar-J4ZKXgSr.jpg' },
  { id: 4, season: 'Qish', name: 'Geometriya ko`k', image: 'https://bnpfabrik.vercel.app/assets/geometriya-CSNEnk_7.jpg' },
  { id: 5, season: 'Qish', name: 'Tropik Barglar', image: 'https://bnpfabrik.vercel.app/assets/tropik-DwuQOop4.jpg' },
  { id: 6, season: 'Qish', name: 'Bambi', image: 'https://bnpfabrik.vercel.app/assets/bambi-KdA38_2S.jpg' },
  { id: 7, season: 'Qish', name: 'Vizantiya', image: 'https://bnpfabrik.vercel.app/assets/vizant-BYxF_mM0.jpg' },
  { id: 8, season: 'Qish', name: 'Kechki Bog`', image: 'https://bnpfabrik.vercel.app/assets/kechki-bog-_qV9ES4-.jpg' },
  { id: 9, season: 'Qish', name: 'Pat Markiz', image: 'https://bnpfabrik.vercel.app/assets/markiz-CtouN3PL.jpg' },
  { id: 10, season: 'Qish', name: 'Lavanda atirgullari', image: 'https://bnpfabrik.vercel.app/assets/logo15-ZjzY2vX3.jpg' },
  { id: 11, season: 'Kuz', name: 'Safari', image: 'https://bnpfabrik.vercel.app/assets/safari-DrcxBVvc.jpg' },
  { id: 12, season: 'Kuz', name: 'Ko`prangli ametist', image: 'https://bnpfabrik.vercel.app/assets/ametist-CPTKVyOc.jpg' },
  { id: 13, season: 'Kuz', name: 'Shivali bezak', image: 'https://bnpfabrik.vercel.app/assets/shivali-BZAnCCJl.jpg' },
  { id: 14, season: 'Kuz', name: 'Zumrad', image: 'https://bnpfabrik.vercel.app/assets/zumrad-CNsYuEZU.jpg' },
  { id: 15, season: 'Kuz', name: 'Malaxit qutisi', image: 'https://bnpfabrik.vercel.app/assets/malxit-CQ6YjTi_.jpg' },
  { id: 16, season: 'Kuz', name: 'Bahorning hidlari', image: 'https://bnpfabrik.vercel.app/assets/bahor-hid-WBi-IA65.jpg' },
  { id: 17, season: 'Kuz', name: 'Kuzgi barglar tushishi', image: 'https://bnpfabrik.vercel.app/assets/Kuzgi-CbyWItoT.jpg' },
  { id: 18, season: 'Kuz', name: 'Moviy Shabada (AB)', image: 'https://bnpfabrik.vercel.app/assets/moviy-shab-DsQR-jk1.jpg' },
  { id: 19, season: 'Kuz', name: 'Moviy suv (AB)', image: 'https://bnpfabrik.vercel.app/assets/moviy-suv-DLTMaTXk.jpg' },
  { id: 20, season: 'Kuz', name: 'Plaid', image: 'https://bnpfabrik.vercel.app/assets/plaid-BqAYr5-k.jpg' },
  { id: 21, season: 'Yozgi', name: 'Vintage uslubi', image: 'https://bnpfabrik.vercel.app/assets/vintage-DBsnYrAb.jpg' },
  { id: 22, season: 'Yozgi', name: 'Ko`prangli ametist', image: 'https://bnpfabrik.vercel.app/assets/ametist-CPTKVyOc.jpg' },
  { id: 23, season: 'Yozgi', name: 'Fransuz Riviera', image: 'https://bnpfabrik.vercel.app/assets/fransuz-CKkLs_qZ.jpg' },
  { id: 24, season: 'Yozgi', name: 'Qoy Dolli', image: 'https://bnpfabrik.vercel.app/assets/qoy-dolli-ic22Rpbk.jpg' },
  { id: 25, season: 'Yozgi', name: 'Alp tog`lari o`simliklari', image: 'https://bnpfabrik.vercel.app/assets/alp-tog-uGTG4qjD.jpg' },
  { id: 26, season: 'Yozgi', name: 'Ilhomlantiruvchi', image: 'https://bnpfabrik.vercel.app/assets/ilhomlantiruvchi-TBRZKPn0.jpg' },
  { id: 27, season: 'Yozgi', name: 'Yashil lotus', image: 'https://bnpfabrik.vercel.app/assets/yashil-C_l_b14D.jpg' },
  { id: 28, season: 'Yozgi', name: 'Tog`li makkajo`xori', image: 'https://bnpfabrik.vercel.app/assets/makka-CLa72Pku.jpg' },
  { id: 29, season: 'Yozgi', name: 'Sakura filiali', image: 'https://bnpfabrik.vercel.app/assets/Sakura-B5Tfvmwd.jpg' },
  { id: 30, season: 'Yozgi', name: 'Zaytun novdasi', image: 'https://bnpfabrik.vercel.app/assets/Zaytun-CC6OlZne.jpg' },
];

const Collection = () => {
  const [selectedSeason, setSelectedSeason] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (season) => {
    setSelectedSeason(season);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products
    .filter(product => selectedSeason === 'All' || product.season === selectedSeason)
    .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="collection">
      <div className="collection-container">
        <input
          type="text"
          placeholder="Search products..."
          className="collection-input"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="season-links">
        <h2>Seasons</h2>
        <button
          className={selectedSeason === 'All' ? 'active' : ''}
          onClick={() => handleFilterChange('All')}
        >
          All
        </button>
        <div className="season-buttons">
          <button
            className={selectedSeason === 'Qish' ? 'active' : ''}
            onClick={() => handleFilterChange('Qish')}
          >
            Qish
          </button>
          <button
            className={selectedSeason === 'Kuz' ? 'active' : ''}
            onClick={() => handleFilterChange('Kuz')}
          >
            Kuz
          </button>
          <button
            className={selectedSeason === 'Yozgi' ? 'active' : ''}
            onClick={() => handleFilterChange('Yozgi')}
          >
            Yozgi
          </button>
          <button
            className={selectedSeason === 'Bahorgi' ? 'active' : ''}
            onClick={() => handleFilterChange('Bahorgi')}
          >
            Bahorgi
          </button>
        </div>
      </div>
      <div className="category-container">
        <ul className="product-list">
          {filteredProducts.map(product => (
            <li key={product.id} className="product-item">
              <a href={`/product/${product.season}/${product.id}`}>
                <img
                  src={product.image}
                  alt={`${product.name} tasviri`}
                  className="product-image"
                />
                <p className="product-text">{product.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Collection;