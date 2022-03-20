import React from 'react';
import './index.css';
import logo from '../../assets/logo.png';
import icon from '../../assets/icon1.png';

const Carousel = ({ className }) => {
	return (
		<div className={className}>
			<div className='carouselCard'>
				<div className='Socksy-container'>
					<div className='socksy'>
						<img alt='' src={logo} className='card-logo' />
						<h2>Socksy</h2>
					</div>

					<div className='socksy-bottom'>
						<h2 className='socksy-bottom-heading'>0.36 sOL</h2>
						<p>10000/10000 Available</p>
					</div>
				</div>
				<div className='allbtn'>
					<button className='CarouselBtn buyBtn'>Buy</button>
					<div className='cardBtn-container'>
						<div>
							<button className='CarouselBtn  cardBtn2'>Sell</button>
						</div>
						<div>
							<button className='CarouselBtn  cardBtn3'>
								<img alt='' src={icon} className='icon cardBtn3-icons' />
								Redeem
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Carousel;
