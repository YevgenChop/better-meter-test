import { Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { FC } from 'react';

export interface HeaderProps {
	children: React.ReactElement | React.ReactElement[]
}

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		width: '100%',
		height: '60px',

		display: 'flex',
		alignItems: 'center',

		padding: '0 30px',

		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.primary.contrastText,

		[theme.breakpoints.down('xs')]: {
			padding: '0 20px',

			height: '48px',
			justifyContent: 'center'
		},
	},
}));


const Header: FC<HeaderProps> = ({ children }) => {
	const styles = useStyles();

	return (
		<div className={styles.container}>
			{children}
		</div>
	);
};

export default Header;
