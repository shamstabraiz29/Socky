import React from 'react';
import './index.css';
import Carousel from 'react-bootstrap/Carousel';
import Item from '../../Components/carousel';
import Footer from "../../Components/footer"

const Dao = () => {
	return (
		<div className='Redeemed'>
			<Carousel  indicators={false}>
				<Carousel.Item>
					<div className='item'>
						<Item />
						<Item className='double-slide' />
						<Item className='double-slide' />
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className='item'>
						<Item />
						<Item className='double-slide' />
						<Item className='double-slide' />
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className='item'>
						<Item />
						<Item className='double-slide' />
						<Item className='double-slide' />
					</div>
				</Carousel.Item>
			</Carousel>
			<div className='footer-div'>
			<Footer/>
			</div>
		</div>
	);
};
export default Dao;
