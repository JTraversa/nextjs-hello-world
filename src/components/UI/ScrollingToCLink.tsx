import React from 'react';

export interface ScrollingToCLinkProps {
	id: string;
	text: string;
}

const ScrollingToCLink: React.FC<ScrollingToCLinkProps> = ({ id, text }) => {
	const scrollTo = () => {
		const el = document.getElementById(id);
		el?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<span onClick={scrollTo} className="cursor-pointer text-xs leading-5 text-paradigm-toc brightness-[.8] hover:brightness-100">
			{text}
		</span>
	);
};

export default ScrollingToCLink;
