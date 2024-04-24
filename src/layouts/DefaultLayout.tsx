import React from 'react';
import Main from '../components/Layout/Main';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

export interface DefaultLayoutProps {
	children?: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
	return (
		<div className="flex min-h-screen flex-col">
			<div className="mx-auto w-full max-w-screen-lg p-4">
				<Navbar />
			</div>
			<div className="flex-1">
				<Main>{children}</Main>
			</div>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
