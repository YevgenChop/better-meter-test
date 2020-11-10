import { StatisticsCardItem } from './StatisticsCard';
import useStyles from './styles';

const useEventsData = (): StatisticsCardItem[] => {
	const styles = useStyles();

	return [
		{
			name: 'DK',
			title: 'Drawkit',
			value: '56,156',
			color: styles.orange
		},
		{
			name: '4/10',
			title: 'Yesterday',
			value: '1,374',
			color: styles.lightBlue
		},
		{
			name: '1-7',
			title: 'Last Week',
			value: '20,748',
			color: styles.lightGreen
		},
		{
			name: 'SEP',
			title: 'Last Month',
			value: '32,884',
			color: styles.gray
		},
		{
			name: '2019',
			title: 'Last Year',
			value: '182,874',
			color: styles.lightGreen
		}
	]
}

export default useEventsData
