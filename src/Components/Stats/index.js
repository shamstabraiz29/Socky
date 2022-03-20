import React from 'react';
import './index.css';

const Stats = ({ subTitle, title, logo }) => {
	return (
		<div className='Stats'>
			<div className='Stats-icon'>
				<img className='Stats-logo' alt='' src={logo} />
			</div>
			<div className='Stats-content'>
				<h1>{title}</h1>
				<p>{subTitle}</p>
			</div>
		</div>
	);
};
export default Stats;
