import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		alignItems: 'center',

		height: '24px',
		borderRadius: '12px',

		padding: '5px 7px',

		fontFamily: 'DM Mono',
		fontWeight: 500,
		fontSize: '14px',

		textAlign: 'center',
	},

	success: {
		background: '#BEEDC0',
		color: '#01653B',
	},
	error: {
		background: '#FED1D1',
		color: '#EC0C0C',
	},
}));

export default useStyles;
