import React from 'react';
import { Menu } from 'antd';
import './index.css';
import Footer from "../../Components/footer"

const Faq = () => {
	const { SubMenu } = Menu;
	const handleClick = (e) => {
		console.log('click ', e);
	};

	return (
		<>
		<div className='menu'>
			<div>
				<h1>FAQ</h1>
				<Menu
					onClick={handleClick}
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode='inline'
					className='menuItems'
				>
					<SubMenu key='sub1' title='What is Socksy?'>
						<Menu.ItemGroup
							key='g1'
							title='We have a token representation of the Socksy NFT, named $SOXS, and we will issue 2000 Socksy Token, 1 Socksy Token can be claimed by holding 1 Socksy NFT during the snapshot.The $SOXS token is tradeable on any exchange
						and storable on any wallet that has adopted the SPL token standard'
						></Menu.ItemGroup>
					</SubMenu>
					<SubMenu key='sub2' title='What are Socksy (SOXS) Token?'>
						<Menu.ItemGroup key='g1' title='Item 1'></Menu.ItemGroup>
					</SubMenu>
					<SubMenu key='sub3' title='How many SOCKSY will be available? '>
						<Menu.ItemGroup key='g1' title='Item 1'></Menu.ItemGroup>
					</SubMenu>
					<SubMenu key='sub4' title='When will I be able to mint a Socks?'>
						<Menu.ItemGroup key='g1' title='Item 1'></Menu.ItemGroup>
					</SubMenu>
					<SubMenu key='sub5' title='How much will a Socks cost?'>
						<Menu.ItemGroup key='g1' title='Item 1'></Menu.ItemGroup>
					</SubMenu>
					<SubMenu key='sub6' title='What are your secondary royality fees?'>
						<Menu.ItemGroup key='g1' title='Item 1'></Menu.ItemGroup>
					</SubMenu>
					<SubMenu key='sub7' title='Any Roadmap?'>
						<Menu.ItemGroup key='g1' title='Item 1'></Menu.ItemGroup>
					</SubMenu>
					<SubMenu key='sub8' title='Any upcoming Contest or Giveaway??'>
						<Menu.ItemGroup key='g1' title='Item 1'></Menu.ItemGroup>
					</SubMenu>
				</Menu>
			</div>
		</div>
			<Footer/>
			</>
	);
};
export default Faq;
