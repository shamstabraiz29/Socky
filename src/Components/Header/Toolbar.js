import React from 'react';
import DrawerToggleButton from './MenuButton';
import { NavLink } from 'react-router-dom';
import './index.css';

import Logo from '../../assets/logo.png';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';

const ToolBar = (props) => {
	return (
		<header className='toolbar'>
			<nav className='toolbar__navigation'>
				<div className='toolbar-head'>
					<div>
						<NavLink
							exact
							to='/'
							activeClassName='active'
							className='nav-links home'
						>
							<img className='toolbar__logo' src={Logo} alt='' />
						</NavLink>
					</div>
					<div className='toolbar__toggle-button'>
						<DrawerToggleButton click={props.handleDrawerToggleClick} />
					</div>
				</div>
				<div className='spacer' />
				<div className='toolbar_nav-items'>
					<ul className='  nav-menu  '>
						<li className='nav-item fist'>
							<NavLink
								exact
								to='/'
								activeClassName='active'
								className='nav-links home'
							>
								Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								exact
								to='/Faq'
								activeClassName='active'
								className='nav-links Faq'
							>
								FAQ
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								exact
								to='/Dao'
								activeClassName='active '
								className='nav-links Dao'
							>
								Dao
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								exact
								to='/Skateing'
								activeClassName='active'
								className='nav-links'
							>
								Stakeing
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								exact
								to='/LitePaper'
								activeClassName='active'
								className='nav-links'
							>
								LitePaper
							</NavLink>
						</li>
						<li className='one'>
							<NavLink to='/Redeemed'>
								<button className='nav-btn one'>
									<img alt='' src={icon1} className='icon' />
									Redeemed
								</button>
							</NavLink>
						</li>
						<li>
							<NavLink to='/Redeemed'>
								<button className='nav-btn one'>
									{' '}
									<img alt='' src={icon2} className='icon' />
									0x822cFCaacea2..
								</button>
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default ToolBar;
