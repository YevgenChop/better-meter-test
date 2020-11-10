import { Avatar, Card, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MoreVert } from '@material-ui/icons';
import React, { FC } from 'react';

export interface StatisticsCardItem {
	name: string;
	title: string;
	value: string;
	color: string;
}

export interface StatisticsCardProps {
	title: string;
	items: StatisticsCardItem[],
	children?: React.ReactElement | React.ReactElement[]
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		position: 'relative',

		width: '445px',
		height: 'max-content',

		borderRadius: '20px',
		padding: '30px',

		boxShadow: 'none',

		marginTop: '40px',
		marginRight: '40px',

		'&>svg': {
			position: 'absolute',
			right: '20px',
			top: '35px',

			'& path': {
				fill: '#84868A'
			}
		},
	},
	actions: {
		margin: '40px 0'
	},
	heading: {
		fontSize: '24px',
		fontWeight: 'bold',

		margin: 0,
	},
	item: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',

		padding: '15px 0',

		borderBottom: '1px solid #E5E5E5',

		fontFamily: 'DM Sans',
		fontWeight: 500,
		fontSize: '20px',

		color: theme.palette.text.primary,

		'&:last-of-type': {
			borderBottom: 'none',
		},

		'&>div': {
			display: 'flex',
			alignItems: 'center',

			'&>span': {
				marginLeft: '20px',
			},
		},
	},
}));

const StatisticsCard: FC<StatisticsCardProps> = ({ title, items, children }) => {
	const styles = useStyles();

	return (
		<Card className={styles.root} raised={false}>
			<MoreVert />
			<h4 className={styles.heading}>{title}</h4>
			<div className={styles.actions}>
				{children}
			</div>
			{
				items.map(({
										 name,
										 title,
										 value,
										 color,
									 }) => (
					<div key={value} className={styles.item}>
						<div>
							<Avatar className={color}>{name}</Avatar>
							<span>{title}</span>
						</div>
						<span>{value}</span>
					</div>
				))
			}
		</Card>
	);
};

export default StatisticsCard;
