import Box from '@material-ui/core/Box';
import React, { FC } from 'react';
import { Menu, Search } from '@material-ui/icons';
import { Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton/IconButton';
import NotificationIcon from '../../components/icons/NotificationIcon';

// Components
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
// Assets
import logo from '../../assets/images/logo.svg';
import profileImage from '../../assets/images/profile.png';
// Styles
import useStyles from './components/styles';

export interface DashboardLayoutProps {
	children: React.ReactElement
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
	const styles = useStyles();

	return (
		<>
			<Header>
				<IconButton color="default" className={styles.menuButton} aria-label="menu" component="span">
					<Menu />
				</IconButton>
				<img src={logo} className={styles.logo} alt="BetterMeter logo" />
				<Box ml="auto" className={styles.actions}>
					<span><Search /></span>
					<span><NotificationIcon/></span>
				</Box>
				<Profile fullName="Adrian Villa" image={profileImage} />
			</Header>
			<Container className={styles.container}>
				{children}
			</Container>
		</>
	);
};

export default DashboardLayout;
