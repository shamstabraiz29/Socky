import React from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/footer';

const App = () => {
	return (
		<div className='content'>
			<div className='main'>
				<Header />
				{/* <Footer /> */}
			</div>
		</div>
	);
};
export default App;
