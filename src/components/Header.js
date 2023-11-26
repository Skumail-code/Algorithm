import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="header">

      <div className="header-center">
        <div className="header-logo">Comparison Sorting Algorithms</div>
      </div>
      
    </div>
  )
}

export default Header;