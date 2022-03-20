import React from 'react';
import StakeCard from '../../Components/stakeCards/StakeCard';
import ClaimCard from '../../Components/stakeCards/ClaimCard';
import './index.css';
import icon from '../../assets/btn.png';
import Footer from "../../Components/footer"

const Skateing = () => {
	return (
		<div className='Skateing'>
			<div className='Skateing-top'>
				<div className='Staking-heading'>
					<h1>Staking</h1>
					<p>
						Socksy staking is here. Stake your SOXS Token or NFT to earn more
						rewards.
					</p>
					<button className='stake-now'>Stake Now</button>
					<button className='SOXS'>Buy $SOXS</button>
				</div>
				<StakeCard
					title='APR 0.00%'
					subTitle='Total Amount staked'
					amount='0.00'
				/>
			</div>
			<div className='Skateing-bottom'>
				<ClaimCard
					title='Total Stock Disbutioned'
					amount='$20,000'
					button='Explore'
					className='ClaimCardButton'
					icon={icon}
				></ClaimCard>
				<ClaimCard
					className='ClaimCardButton2'
					title='Staked'
					amount='0.00'
					button='Stake'
				/>
				<ClaimCard
					className='ClaimCardButton2'
					title='Unclaim Rewards'
					amount='0.00'
					button='Claim'
				/>
			</div>
			<Footer/>
		</div>
	);
};
export default Skateing;
