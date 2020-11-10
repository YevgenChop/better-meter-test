import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	content: {
		padding: '70px 80px',

		[theme.breakpoints.down('xs')]: {
			padding: '56px 20px',
		},
	},
}));

export default useStyles;

