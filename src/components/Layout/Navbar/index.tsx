/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
import { ConnectButton } from '@rainbow-me/rainbowkit';
import SlippageDropdown from '../../UI/SlippageDropdown';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
	return (
		<header className="flex items-center rounded-3xl px-4 py-2">
			<div className="flex items-center gap-2 left-100 ">
				<div className="mx-48">
					<Link href="/">
						<a>
							<img className="w-32" src="warlock-logo.png" alt="Warlock icon" />
						</a>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
