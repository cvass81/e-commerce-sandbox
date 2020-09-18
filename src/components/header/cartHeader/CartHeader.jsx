import React, { useState, useEffect, useRef } from 'react';
import CartButton from './components/button';
import Dropdown from './components/dropdown';

const CartHeader = () => {
  const anchorRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setAnchorEl(anchorRef.current);
  }, []);

  return (
    <div ref={anchorRef}>
      <CartButton />
      <Dropdown anchorEl={anchorEl} />
    </div>
  );
};

export default CartHeader;
