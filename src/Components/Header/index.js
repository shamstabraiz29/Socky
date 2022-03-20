import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Dao from '../../pages/DAO';
import LitePaper from '../../pages/LitePaper';
import Faq from '../../pages/FAQ';
import Redeemed from '../../pages/Redeemed';
import Skateing from '../../pages/Skateing';
import ToolBar from './Toolbar';
import SideDrawer from '../Drawer';
import Backdrop from '../Backdrop';
import ErrorPage from '../../pages/Error';
import './index.css';

const Header = () => {
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

	const handleDrawerToggleClick = () => {
		setSideDrawerOpen((prevDrawerState) => !prevDrawerState);
	};

	const handleBackdropClick = () => {
		setSideDrawerOpen(false);
	};

	let backdrop;

	if (sideDrawerOpen) {
		backdrop = <Backdrop click={handleBackdropClick} />;
	}

	return (
		<>
			<BrowserRouter>
				<ToolBar handleDrawerToggleClick={handleDrawerToggleClick} />
				<SideDrawer
					show={sideDrawerOpen}
					handleBackdropClick={handleBackdropClick}
				/>
				{backdrop}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Dao' element={<Dao />} />
					<Route path='/Faq' element={<Faq />} />
					<Route path='/LitePaper' element={<LitePaper />} />
					<Route path='/Skateing' element={<Skateing />} />
					<Route path='/Redeemed' element={<Redeemed />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
export default Header;
