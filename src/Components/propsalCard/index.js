import React from 'react';
import './index.css';

const ProposalCard = ({ subTitle, title, ago }) => {
	return (
		<div className='ProposalCard'>
			<div className='ProposalCard-Content'>
				<h1>{title}</h1>
				<p>{subTitle}</p>
				<h2>{ago}</h2>
			</div>
			<div className='ProposalCard-btns'>
				<button className='yesbtn'>YES</button>
				<button className='nobtn '>NO</button>
			</div>
		</div>
	);
};
export default ProposalCard;
