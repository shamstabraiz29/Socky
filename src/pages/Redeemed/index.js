import React from 'react';
import Stats from '../../Components/Stats';
import logo from '../../assets/logo.png';
import drop from '../../assets/icon1.png';
import icon from '../../assets/drop.png';
import Footer from "../../Components/footer"
import './index.css';

const Redeemed = () => {
	return (
		<div className='Dao-main'>
			<h1 className='Dao-heading'>Socksy Stats</h1>
			<p className='Dao-main-para'>
				The price of changes when $SOXS tokens are bought and sold
				<span> Read more</span>
			</p>
			<p></p>
			<div className='Dao-content'>
				<Stats title='1000' subTitle='Total Socksy' logo={logo} />
				<Stats title='0' subTitle='Redeemed socks' logo={drop} />
				<Stats title='0' subTitle='liquidity Pool' logo={icon} />
			</div>
			<div className='footer-div'>
			<Footer/>
			</div>
		</div>
	);
};
export default Redeemed;
