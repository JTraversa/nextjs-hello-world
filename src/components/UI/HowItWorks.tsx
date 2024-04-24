import React from 'react';

const HowItWorks: React.FC = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold">How it works</h2>
			<p className="pt-4">
				Permissionlessly swap between Goo and Gobblers, or maximize your Goo production by depositing in our emission optimized pool.
				Utilizing an amalgoomatation of Uniswap V2's bonding curve math and an EIP-4626 yield-bearing vault, Goober incentivizes that an
				optimal balance of Goo and Gobbler multiplier is maintained across market conditions - making it the most efficient tank in the
				Gobblerverse.
			</p>
			<p className="pt-2">
				Read more{' '}
				<a href="https://docs.goober.xyz/" className="text-goober-goo underline" target="_blank" rel="noreferrer">
					here
				</a>
				.
			</p>
		</div>
	);
};

export default HowItWorks;
