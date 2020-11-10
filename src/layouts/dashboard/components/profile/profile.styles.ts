import { Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: '15px',

		[theme.breakpoints.down('xs')]: {
			marginLeft: 'unset',
		},
	},
	avatar: {
		width: '36px',
		height: '36px',
		borderRadius: '50%',

		[theme.breakpoints.down('xs')]: {
			width: '33px',
			height: '33px',
		},
	},
	name: {
		color: theme.palette.primary.contrastText,

		marginLeft: '10px',

		fontFamily: 'DM Sans',
		fontWeight: 500,
		fontSize: '17px',
		lineHeight: '22px',

		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	menuButton: {
		'& path': {
			fill: theme.palette.primary.light,
		},

		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
}));

export default useStyles;
