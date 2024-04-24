/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
import { ConnectButton } from '@rainbow-me/rainbowkit';
import SlippageDropdown from '../../UI/SlippageDropdown';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
	return (
		<header className="flex items-center rounded-3xl bg-gray-700 px-4 py-2">
			<div className="flex-1">
				<Link href="/">
					<a>
						<img className="w-28" src="/goober-thin.png" alt="Goober icon" />
					</a>
				</Link>
			</div>
			<div className="flex items-center gap-2">
				<ConnectButton showBalance={false} />
				<SlippageDropdown />
			</div>
		</header>
	);
};

export default Navbar;
