import { StatisticsCardItem } from './StatisticsCard';
import useStyles from './styles';

const useActiveSitesData = (): StatisticsCardItem[] => {
	const styles = useStyles();

	return [
		{
			name: 'GL',
			title: 'Glyphy',
			value: '6,640',
			color: styles.orange
		},
		{
			name: 'DS',
			title: 'DesignStripe',
			value: '1,374',
			color: styles.blue
		},
		{
			name: 'DV',
			title: 'DesignValley',
			value: '20,748',
			color: styles.red
		},
		{
			name: 'DK',
			title: 'Neueubel',
			value: '32,884',
			color: styles.ocean
		},
		{
			name: 'DS',
			title: 'Last Year',
			value: '182,874',
			color: styles.blue
		}
	]
}

export default useActiveSitesData
