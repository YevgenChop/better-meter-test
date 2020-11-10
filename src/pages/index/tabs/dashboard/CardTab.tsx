import React from 'react';
import Tab from '@material-ui/core/Tab';
import withStyles from '@material-ui/core/styles/withStyles';
import { createStyles, TabProps, Theme } from '@material-ui/core';

export default withStyles((theme: Theme) =>
	createStyles({
		root: {
			minWidth: '120px',
			minHeight: '120px',

			textTransform: 'none',

			padding: '6px 30px',

			backgroundColor: '#F6F6F6',
			color: theme.palette.text.secondary,
			borderRight:' 1px solid #E5E5E5',

			'&$selected': {
				borderWidth: '0px',
				borderRadius: '20px 20px 0px 0px',
				backgroundColor: theme.palette.background.paper,
			},
		},
		wrapper: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		selected: {},
	}),
)((props: TabProps) => <Tab disableRipple {...props} />);
