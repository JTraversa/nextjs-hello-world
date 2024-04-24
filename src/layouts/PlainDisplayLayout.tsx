import Main from '../components/Layout/Main';
import React from 'react';

export interface PlainDisplayLayoutProps {
	children?: React.ReactNode;
}

const PlainDisplayLayout: React.FC<PlainDisplayLayoutProps> = ({ children }) => {
	return (
		<>
			<div className="z-0 flex h-screen w-full flex-col items-center">
				<Main>{children}</Main>
			</div>
		</>
	);
};

export default PlainDisplayLayout;
