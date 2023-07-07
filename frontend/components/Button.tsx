import React, { useState } from 'react';

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-midnight text-light-gray py-2 px-4 rounded rotated-button"
      onClick={onClick}
    >
      Details
    </button>
  );
};

export default Button;
