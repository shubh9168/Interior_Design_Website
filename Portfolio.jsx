import React, { useState } from 'react';
import './Portfolio.css';

function Portfolio() {
  const designs = [
    {
      id: 1,
      name: 'Modern Kitchen',
      price: 15000,
      package: 'Basic',
      img: 'https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      name: 'Luxury Living Room',
      price: 38000,
      package: 'Standard',
      img: 'https://images.unsplash.com/photo-1633109870201-318921e3f992?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      name: 'Premium Bedroom',
      price: 50000,
      package: 'Premium',
      img: 'https://images.unsplash.com/photo-1663811397302-8268848ca312?q=80&w=2080&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Elegant Bathroom',
      price: 19000,
      package: 'Basic',
      img: 'https://images.unsplash.com/photo-1642755622887-6aef7cbe0725?q=80&w=1964&auto=format&fit=crop'
    }
  ];

  const [selectedPackage, setSelectedPackage] = useState('All');

  const filteredDesigns = selectedPackage === 'All'
    ? designs
    : designs.filter(d => d.package === selectedPackage);

  const designSections = ['Basic', 'Standard', 'Premium'];

  return (
    <div className="portfolio-container">
        <h2 id="heading">Our Designs</h2>
           <div className="filter-bar">
        <label>Filter by Package:</label>
        <select onChange={(e) => setSelectedPackage(e.target.value)}>
          <option value="All">All</option>
          <option value="Basic">Basic (₹10k–₹20k)</option>
          <option value="Standard">Standard (₹21k–₹40k)</option>
          <option value="Premium">Premium (₹41k+)</option>
        </select>
      </div>

      <div className="design-sections">
        {designSections.map((section) => (
          <div className={`design-section ${section.toLowerCase()}`} key={section}>
            <h3>{section} Designs</h3>
            <div className="design-grid">
              {filteredDesigns
                .filter(design => design.package === section || selectedPackage === 'All')
                .map(design => (
                  <div className="design-card" key={design.id}>
                    <img src={design.img} alt={design.name} />
                    <h3 className="design-name">{design.name}</h3>
                    <p>Package: {design.package}</p>
                    <p>Price: ₹{design.price.toLocaleString()}</p>
                    <button>Choose Design</button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
