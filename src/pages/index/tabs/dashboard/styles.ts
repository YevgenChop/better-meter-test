import { Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
	heading: {
		fontFamily: 'DM Sans',
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: '36px',
		lineHeight: '100%',

		margin: 0,

		color: theme.palette.text.primary,
	},
	analyticsCard: {
		display: 'flex',
		flexWrap: 'wrap',

		borderRadius: '0px 20px 20px 20px',

		boxShadow: 'none',

		position: 'relative',
	},
	tooltip: {
		'& span:first-of-type': {
			display: 'flex',
			alignItems: 'center',

			color: 'white',

			'& > svg': {
				marginRight: '5px',
			},
		},

		width: '176px',
	},

	tabHint: {
		display: 'flex',
		alignItems: 'center',

		marginBottom: '5px',

		color: '#84868A',

		'& > svg': {
			marginTop: '3px',

			'& > path': {
				stroke: '#84868A',
			},

			marginLeft: '5px',
		},
	},
	tabValue: {
		display: 'flex',
		alignItems: 'center',

		fontFamily: 'DM Mono',
		fontWeight: 500,
		fontSize: '36px',
		lineHeight: '100%',
		color: '#000000',

		'& > svg': {
			marginRight: '20px',
		},

		'& > div:last-of-type': {
			marginLeft: '10px',
		},
	},

	cardList: {
		width: '400px',

		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: '0 50px',
		borderRight: '1px solid #E5E5E5',

		'& > li': {
			width: '100%',

			display: 'flex',
			justifyContent: 'space-between',

			padding: '15px 0',

			listStyleType: 'none',
			borderBottom: '1px solid #E5E5E5',

			fontFamily: 'DM Mono',
			fontWeight: 500,
			fontSize: '28px',
		},
	},

	action: {
		display: 'flex',
		alignItems: 'center',

		position: 'absolute',
		bottom: '27px',
		left: '290px',

		fontFamily: 'DM Sans',
		fontWeight: 500,
		fontSize: '16px',

		color: '#84868A',

		'& > svg': {
			path: {
				fill: '#84868A'
			}
		}
	},
	orange: {
		color: '#FFFFFF',
		backgroundColor: '#FF9900',
	},
	lightGreen: {
		color: '#2E3D5B',
		backgroundColor: '#BEEDC0',
	},
	ocean: {
		color: '#FFFFFF',
		backgroundColor: '#3DDDAA',
	},
	gray: {
		color: '#2E3D5B',
		backgroundColor: '#FAF8F3',
	},
	darkGray: {
		color: '#FFFFFF',
		backgroundColor: '#84868A',
	},
	red: {
		color: '#FFFFFF',
		backgroundColor: '#F73859',
	},
	blue: {
		color: '#FFFFFF',
		backgroundColor: '#127BF5',
	},
	lightBlue: {
		color: '#2E3D5B',
		backgroundColor: '#E6F5FA',
	},
	chartSection: {
		display: 'flex',

		width: 'calc(100% - 400px)',

		flexDirection: 'row',
		flexWrap: 'wrap',
		flexGrow: 1,

		height: '600px',

		padding: '40px 20px 70px 50px'
	}
}));

export default useStyles;
