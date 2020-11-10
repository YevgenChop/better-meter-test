import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {
		minWidth: '305px',
		maxWidth: '445px',

		minHeight: '400px',

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		alignSelf: 'stretch',

		flexGrow: 1,
		marginTop: '40px',

		opacity: '0.5',
		background: '#F6F6F6',
		borderRadius: '20px',
	},
}));

const NewCard: FC = () => {
	const styles = useStyles();

	return (
		<div className={styles.root}>
			<svg width="76" height="76" viewBox="0 0 76 76" fill="none">
				<path d="M38 2V74M2 38H74" stroke="#84868A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</div>
	);
};

export default NewCard;
