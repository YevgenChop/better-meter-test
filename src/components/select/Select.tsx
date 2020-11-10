import React, { FC } from 'react';

export interface SelectProps {
	children: React.ReactElement | React.ReactElement[]
}

const Select: FC<SelectProps> = ({ children }) => {
	return (
		<div>
			{children}
		</div>
	);
};

export default Select;
