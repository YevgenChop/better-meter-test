import React from 'react';
import Tab from '@material-ui/core/Tab';
import withStyles from '@material-ui/core/styles/withStyles';
import { createStyles, TabProps, Theme } from '@material-ui/core';

export default withStyles((theme: Theme) =>
	createStyles({
		root: {
			minWidth: '72px',

			fontWeight: 500,
			textTransform: 'none',

			borderRight: '1px solid #E5E5E5',

			color: theme.palette.text.secondary,
			backgroundColor: theme.palette.primary.light,

			'&$selected': {
				fontWeight: 700,

				color: theme.palette.primary.dark,
				backgroundColor: theme.palette.background.default,
			},
		},
		wrapper: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',

			'& > svg': {
				marginRight: '12px',
				marginBottom: '0 !important'
			}
		},
		labelIcon: {
			minHeight: '60px'
		},
		selected: {},
	}),
)((props: TabProps) => <Tab disableRipple {...props} />);
