import React, { FC } from 'react';

export interface TabItemProps {
	name: number;
	activeName: number;
	children: React.ReactElement | React.ReactElement[]
}

const TabItem: FC<TabItemProps> = ({
																		 name,
																		 activeName,
																		 children,
																	 }) => <>{name === activeName ? children : null}</>;

export default TabItem;

