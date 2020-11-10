import { Tabs, Theme } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles((theme: Theme) => ({
	root: {

		marginTop: '80px',
		width: 'max-content',
		borderRadius: '20px 20px 0px 0px',
		backgroundColor: '#F6F6F6',
	},
	indicator: {
		display: 'none',
	},
}))(Tabs);
