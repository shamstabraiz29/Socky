import React from 'react';
import './index.css';

const Backdrop = (props) => {
	return <div className='backdrop' onClick={props.click}></div>;
};

export default Backdrop;
