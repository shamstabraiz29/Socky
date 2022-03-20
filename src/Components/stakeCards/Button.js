import React from 'react';
import './index.css';
import img from '../../assets/Frame.png';

const ClaimCardButton = ({ title, amount, button, bg }) => {
	return (
		<div className='ClaimCard'>
			<button style={{ backgroundColor: { bg } }}>{button}</button>
		</div>
	);
};
export default ClaimCardButton;
