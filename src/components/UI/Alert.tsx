import React, { FC } from 'react';

const Alert: FC = ({ children }) => {
	return (
		<div className="flex items-center gap-4 rounded-r-md border-l-8 border-red-800 bg-red-50 p-4 text-red-800">
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
					<path
						fillRule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
			<div className="flex-1">
				<p className="break-all">{children}</p>
			</div>
		</div>
	);
};

export default Alert;
