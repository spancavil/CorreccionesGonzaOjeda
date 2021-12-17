import React from "react";

export default function CustomButton({ textButton, disabled = false, handleClick }) {
  return (
    <>
      <button
        className="btn-custom m-1 rounded btn-dark"
        disabled={disabled}
        onClick={handleClick}
      >
        {textButton}
      </button>
    </>
  );
}