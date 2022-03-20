import React from 'react';
import open from '../../assets/open.png';
import './index.css';

const DrawerToggleButton = (props) => {
	return (
		<div>
			<img
				className='DrawerToggleButton'
				alt=''
				src={open}
				onClick={props.click}
			/>
		</div>
	);
};

export default DrawerToggleButton;
