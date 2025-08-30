import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Muit() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        Dropdown
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        <li><button className="dropdown-item" type="button">Dropdown item 1</button></li>
        <li><button className="dropdown-item" type="button">Dropdown item 2</button></li>
        <li><button className="dropdown-item" type="button">Dropdown item 3</button></li>
      </ul>
    </div>
  );
}

export default Muit;