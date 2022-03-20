import React from 'react';
import './index.css';
import img from '../../assets/stake.png';

const StakeCard = ({ subTitle, title, amount }) => {
	return (
		<div className='StakeCard'>
			<div className='StakeCard-content'>
				<h1> {title}</h1>
				<p>{subTitle}</p>
				<h2>{amount}</h2>
			</div>
			<div>
				<img alt='' className='StakeCard-img' src={img} />
			</div>
		</div>
	);
};
export default StakeCard;
