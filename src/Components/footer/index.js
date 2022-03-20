import React from 'react';
import telegram from '../../assets/telegram.png';
import icon from '../../assets/footerIcon1.png';
import git from '../../assets/git.png';
import twitter from '../../assets/twitter.png';
import './index.css';

const Footer = () => {
	const icons = [
		{
			name: icon,
		},
		{
			name: git,
		},
		{
			name: twitter,
		},
		{
			name: telegram,
		},
	];
	return (
		<div className='footer-main'>
			{icons.map((e, index) => {
				return <img alt='' key={index} src={e.name} />;
			})}
			<div className='footerbottom'>
			<p className='footer-para'>© 2021 Solsocks All Right Reserved</p>
			<p className='Powered'>Powered by <span className='SOLANA'>SOLANA</span></p>
			</div>
		</div>
	);
};
export default Footer;
