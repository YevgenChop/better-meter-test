import { useMemo } from 'react';
import { ListItemProps } from './ListItem';
import useStyles from './styles';

const useListData = (): ListItemProps[] => {
	const styles = useStyles();

	return useMemo(() => ([
		{
			firstColor: styles.orange,
			nextColor: styles.lightGreen,
			name: 'GL',
			value: '264,738',
		},
		{
			firstColor: styles.blue,
			nextColor: styles.gray,
			name: 'DS',
			value: '64,738',
		},
		{
			firstColor: styles.orange,
			nextColor: styles.lightGreen,
			name: 'GL',
			value: '23,738',
		},
		{
			firstColor: styles.ocean,
			nextColor: styles.gray,
			name: 'DK',
			value: '8,837',
		},
		{
			firstColor: styles.blue,
			nextColor: styles.gray,
			name: 'DS',
			value: '5,375',
		},
		{
			firstColor: styles.darkGray,
			nextColor: styles.lightGreen,
			name: 'NB',
			value: '3,923',
		},
	]), [styles]);
};

export default useListData;
