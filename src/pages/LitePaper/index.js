import React from 'react';
import ProposalCard from '../../Components/propsalCard';
import './index.css';
import Footer from "../../Components/footer"

const LitePaper = () => {
	return (
		<div className='LitePaper'>
			<div className='LitePaper-main'>
				<div className='ProposalCard-area'>
					<h1 className='LitePaper-heading'>Proposals</h1>
					<ProposalCard
						title='Created by 7nte4g1udyYBK8Fn'
						subTitle='Title: List $SOXS Token on a CEX'
						ago='5d 20m 5s'
					/>
					<ProposalCard
						title='Created by 7nte4g1udyYBK8Fn'
						subTitle='Title: List $SOXS Token on a CEX'
						ago='5d 20m 5s'
					/>
				</div>
			</div>
			<div className='footer-div'>
				<Footer/>
			</div>
		</div>
	);
};
export default LitePaper;
