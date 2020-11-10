import React, { FC } from 'react';
import { ExpandMore } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton/IconButton';

// Styles
import useStyles from './profile.styles';

export interface ProfileProps {
	fullName: string
	image: string
}

const Profile: FC<ProfileProps> = ({ fullName, image }) => {
	const styles = useStyles();

	return (
		<div className={styles.container}>
			<img src={image} className={styles.avatar} alt={fullName} />

			<span className={styles.name}>{fullName}</span>

			<IconButton color="default" className={styles.menuButton} aria-label="menu" component="span">
				<ExpandMore />
			</IconButton>
		</div>
	);
};

export default Profile;
