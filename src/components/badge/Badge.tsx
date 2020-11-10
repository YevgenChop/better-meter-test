import React, { FC } from 'react';

// Styles
import useStyles from './styles';

export interface BadgeProps {
	variant?: 'success' | 'error',
	children: string;
}

const Badge: FC<BadgeProps> = ({ variant = 'success', children }) => {
	const styles = useStyles();

	return (
		<div className={`${styles.root} ${styles[variant]}`}>{children}</div>
	);
};

export default Badge;
