import React, { useState } from 'react';

const Button = ({ setIsModalOpen }) => {
	const openModal = () => {
		setIsModalOpen(true)
	}

	return (
		<button
			className="bg-midnight text-light-gray py-2 px-4 rounded rotated-button"
			onClick={openModal}
		>
			Details
		</button>
  );
};

export default Button;
