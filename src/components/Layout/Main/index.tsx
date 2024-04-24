import React from 'react';

export interface MainProps {
	children?: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
	return <>{children}</>;
};

export default Main;
