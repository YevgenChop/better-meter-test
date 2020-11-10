import React, { FC } from 'react';
import { Avatar } from '@material-ui/core';
import { DoubleArrow } from '@material-ui/icons';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

export interface ListItemProps {
	firstColor: string;
	nextColor: string;
	name: string;
	value: string;
}

const ListItem: FC<ListItemProps> = ({ firstColor, nextColor, name, value }) => (
	<li>
		<AvatarGroup max={2}>
			<Avatar className={firstColor}>{name}</Avatar>
			<Avatar className={nextColor}><DoubleArrow /></Avatar>
		</AvatarGroup>
		{value}
	</li>
);

export default ListItem;
