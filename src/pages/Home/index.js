import React from 'react';
import card from '../../assets/card.png';
import './index.css';
import arrow from '../../assets/arrow.png';
import Footer from '../../Components/footer';

const Home = () => {
	return (
		<div className='home-main'>
			<div className='card-home'>
				<img src={card} alt='' />
			</div>
			<div className='home-content'>
				<h1>
					Extraordinary
					<span className='home-heading'> SOCKS</span> you”ll{' '}
					<span className='home-heading'>love</span>
				</h1>
				<p className='home-subtitle'>
					Mathematically priced collection of 3D rendered wearables hiding as
					SPL tokens on the Solana blockchain.
				</p>
				<button className='Home-btn'>
					Get Socks
					<span className='arrow'>
						<img alt='' src={arrow} />
					</span>
				</button>
			</div>
			<div className='home-footer'>
			<Footer/>
			</div>
		</div>
	);
};
export default Home;
