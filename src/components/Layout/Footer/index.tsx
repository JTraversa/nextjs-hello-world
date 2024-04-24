import React from 'react';

const Footer: React.FC = () => {
	return (
		// Docs,Etherscan,Github,Twitter
		<footer className="pt-12">
			<div className="mx-auto w-full max-w-screen-lg border-t border-gray-700 px-4 py-12">
				<div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
					<p className="text-sm text-gray-500">&copy; 2024, Warlock Labs. All rights reserved.</p>
					<div className="flex gap-4 text-gray-600">
						<a
							className="transition-colors hover:text-[#818CF8] hover:underline hover:shadow-inherit"
							href="https://docs.warlock.xyz/"
							target="_blank"
							rel="noreferrer"
						>
							Docs
						</a>
						<a
							className="transition-colors hover:text-[#818CF8] hover:underline hover:shadow-inherit"
							href="/litepaper"
						>
							Litepaper
						</a>
						<a
							className="transition-colors hover:text-[#818CF8] hover:underline hover:shadow-inherit"
							href="https://twitter.com/warlock_xyz"
							target="_blank"
							rel="noreferrer"
						>
							Twitter
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
