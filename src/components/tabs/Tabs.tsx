import { Tabs, Theme } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles((theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.primary.light,
	},
	indicator: {
		display: 'none',
	},
}))(Tabs);
