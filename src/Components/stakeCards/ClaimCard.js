import React from 'react';
import './index.css';
import img from '../../assets/Frame.png';

const ClaimCard = ({ title, amount, button, className, icon }) => {
	return (
		<div className='ClaimCard'>
			<div className='ClaimCard-content'>
				<h1> {title}</h1>
				<p>{amount}</p>
				<div className='icon-main'>
					<button className={className}>{button}</button>
					<img className='ClaimCardIcon' alt='' src={icon} />
				</div>
			</div>
			<div>
				<img alt='' className='ClaimCard-img' src={img} />
			</div>
		</div>
	);
};
export default ClaimCard;
