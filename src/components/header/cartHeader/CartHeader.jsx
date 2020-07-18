import React, { useState, useEffect, useRef } from 'react';
import CartIcon from '../cartIcon';
import CartDropdown from '../cartDropdown';

const CartHeader = () => {
  const anchorRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setAnchorEl(anchorRef.current);
  }, []);

  return (
    <>
      <CartIcon ref={anchorRef} />
      <CartDropdown anchorEl={anchorEl} />
    </>
  );
};

export default CartHeader;
