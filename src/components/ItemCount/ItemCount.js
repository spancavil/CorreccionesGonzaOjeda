import React from 'react'
import CustomButton from '../CustomButton/CustomButton';

export default function ItemCount({ quantity, modifyQuantity, stock}) {
  
  const onIncrement = () => {
    if (quantity < stock && quantity >= 1) {
      modifyQuantity(quantity + 1);
    }
  };

  const onDecrement = () => {
    if (quantity > 1) {
      modifyQuantity(quantity - 1);
    }
  };

  return (
    <div className="m-1 d-flex justify-content-start align-items-center item-count-container">
      <CustomButton
        textButton={"-"}
        handleClick={onDecrement}
        disabled={quantity ===1}
      />

      <span>{quantity}</span>

      <CustomButton
        textButton={"+"}
        handleClick={onIncrement}
        disabled={quantity === stock}
      />
    </div>
  );
}
