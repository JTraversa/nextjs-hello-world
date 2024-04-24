import React from 'react';

const Footer: React.FC = () => {
	return (
		// Docs,Etherscan,Github,Twitter
		<footer className="pt-12">
			<div className="mx-auto w-full max-w-screen-lg border-t border-gray-700 px-4 py-12">
				<div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
					<p className="text-sm text-gray-500">&copy; 2022, Goober. All rights reserved.</p>
					<div className="flex gap-4 text-gray-600">
						<a className="hover:text-[#8EF42E] hover:underline" href="https://docs.goober.xyz/" target="_blank" rel="noreferrer">
							Docs
						</a>
						<a
							className="hover:text-[#8EF42E] hover:underline"
							href="https://etherscan.io/address/0x2275d4937b6bfd3c75823744d3efbf6c3a8de473"
							target="_blank"
							rel="noreferrer"
						>
							Etherscan
						</a>
						<a
							className="transition-colors hover:text-[#8EF42E] hover:underline"
							href="https://github.com/gooberxyz/goobervault"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
						<a
							className="transition-colors hover:text-[#8EF42E] hover:underline"
							href="https://twitter.com/goober_xyz"
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
