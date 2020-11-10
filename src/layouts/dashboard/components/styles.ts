import { Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		padding: 0,
	},
	logo: {
		marginTop: '5px',

		[theme.breakpoints.down('xs')]: {
			width: '147px',
			height: '15px',
			marginRight: 'auto',
		},
	},
	menuButton: {
		display: 'none',

		marginRight: 'auto',

		padding: 0,

		'& path': {
			fill: theme.palette.primary.light,
		},

		[theme.breakpoints.down('xs')]: {
			display: 'block',
		},
	},
	actions: {
		height: '100%',

		'&>*':{
			width: '60px',

			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',

			height: '100%',
			padding: '0 12px',
			borderLeft: '1px solid #333333',

			'&:last-of-type': {
				borderRight: '1px solid #333333',
			}
		}
	}
}));

export default useStyles;
