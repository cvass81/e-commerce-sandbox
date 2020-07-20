import React, { useState, useEffect, useRef } from 'react';
import Button from './components/button';
import CartDropdown from './components/dropdown';

const CartHeader = () => {
  const anchorRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setAnchorEl(anchorRef.current);
  }, []);

  return (
    <>
      <Button ref={anchorRef} />
      <CartDropdown anchorEl={anchorEl} />
    </>
  );
};

export default CartHeader;
