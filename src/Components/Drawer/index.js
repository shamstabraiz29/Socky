import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/menu.png';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import close from '../../assets/cross.png';
import './index.css';

const SideDrawer = (props) => {
	console.log(props, 'dad');
	let drawerClasses = 'side-drawer';

	if (props.show) {
		drawerClasses = 'side-drawer open';
	}

	return (
		<nav className={drawerClasses}>
			<div className='drawer-head'>
				<NavLink exact to='/'>
					<div className='drawer-head-logo'>
						<img alt='' src={logo} />
					</div>
				</NavLink>
				<div onClick={props.handleBackdropClick}>
					<img alt='' src={close} />
				</div>
			</div>
			<div className='menu-headig'>
				<h1>Menu</h1>
			</div>
			<div className='nav-container'>
				<ul>
					<li>
						<NavLink
							exact
							to='/'
							activeClassName='active'
							onClick={props.handleBackdropClick}
						>
							Home
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink
							exact
							to='/Faq'
							activeClassName='active'
							onClick={props.handleBackdropClick}
						>
							FAQ
						</NavLink>
					</li>
					<li>
						<NavLink
							exact
							to='/Dao'
							activeClassName='active'
							onClick={props.handleBackdropClick}
						>
							Dao
						</NavLink>
					</li>
					<li>
						<NavLink
							exact
							to='/Skateing'
							activeClassName='active'
							className='nav-links'
							onClick={props.handleBackdropClick}
						>
							Skateing
						</NavLink>
					</li>
					<li>
						<NavLink
							exact
							to='/LitePaper'
							activeClassName='active'
							onClick={props.handleBackdropClick}
						>
							LitePaper
						</NavLink>
					</li>
					<li className='Redeemed-btn1'>
						<NavLink to='/Redeemed' onClick={props.handleBackdropClick}>
							<img alt='' src={icon1} className='icon' />
							<button>Redeemed</button>
						</NavLink>
					</li>
					<li>
						<NavLink to='/Redeemed' onClick={props.handleBackdropClick}>
							{' '}
							<img alt='' src={icon2} className='icon' />
							<button>0x822cFCaacea2..</button>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default SideDrawer;
