import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Radio from '@material-ui/core/Radio';
import { Tooltip } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Tooltip as RechartsTooltip, LineChart, XAxis, YAxis, Line, ResponsiveContainer } from 'recharts';

// Icons
import TimeIcon from '../../../../components/icons/TimeIcon';
import InfoBadge from '../../../../components/icons/InfoBadge';
import ChartIcon from '../../../../components/icons/ChartIcon';

// Components
import NewCard from './NewCard';
import CardTab from './CardTab';
import CardTabs from './CardTabs';
import StatisticsCard from './StatisticsCard';
import ListItem, { ListItemProps } from './ListItem';
import Badge from '../../../../components/badge/Badge';
import TabItem from '../../../../components/tabs/TabItem';
// Styles
import useStyles from './styles';
// Data
import useListData from './useListData';
import useEventsData from './useEventsData';
import useActiveSitesData from './useActiveSitesData';
import useVisitedSitesData from './useVisitedSitesData';

// Mock Data
import data from './chardData';

const Dashboard = () => {
	const styles = useStyles();

	// State
	const [value, setValue] = React.useState(0);

	// Data
	const eventsData = useEventsData();
	const list: ListItemProps[] = useListData();
	const activeSitesData = useActiveSitesData();
	const lastVisitedSitesData = useVisitedSitesData();

	// Handlers
	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<Box css={{
				display: 'flex',
			}}>
				<h4 className={styles.heading}>
					Analytics
				</h4>
			</Box>
			<CardTabs value={value} onChange={handleChange} aria-label="simple tabs example">
				<CardTab label={
					<>
						<Tooltip
							classes={{ tooltip: styles.tooltip }}
							title={
								<>
									<span><InfoBadge />Pageviews</span>
									<p>an instance of a user visiting a particular page on a website.</p>
								</>
							}
							placement="top"
							arrow
						>
							<span className={styles.tabHint}>Pageviews <InfoBadge /></span>
						</Tooltip>
						<div className={styles.tabValue}><ChartIcon />223.5k <Badge>+15%</Badge></div>
					</>
				} />

				<CardTab label={
					<>
						<Tooltip
							classes={{ tooltip: styles.tooltip }}
							title={
								<>
									<span><InfoBadge />Pageviews</span>
									<p>an instance of a user visiting a particular page on a website.</p>
								</>
							}
							placement="top"
							arrow
						>
							<span className={styles.tabHint}>Unique Users <InfoBadge /></span>
						</Tooltip>
						<div className={styles.tabValue}><ChartIcon />74.858 <Badge variant="error">-15%</Badge></div>
					</>
				} />

				<CardTab label={
					<>
						<Tooltip
							classes={{ tooltip: styles.tooltip }}
							title={
								<>
									<span><InfoBadge />Pageviews</span>
									<p>an instance of a user visiting a particular page on a website.</p>
								</>
							}
							placement="top"
							arrow
						>
							<span className={styles.tabHint}>Average visit time <InfoBadge /></span>
						</Tooltip>
						<div className={styles.tabValue}><TimeIcon />01:45 <Badge>+15%</Badge></div>
					</>
				} />

				<CardTab label={
					<>
						<Tooltip
							classes={{ tooltip: styles.tooltip }}
							title={
								<>
									<span><InfoBadge />Pageviews</span>
									<p>an instance of a user visiting a particular page on a website.</p>
								</>
							}
							placement="top"
							arrow
						>
							<span className={styles.tabHint}>Bounce Rate <InfoBadge /></span>
						</Tooltip>
						<div className={styles.tabValue}><ChartIcon />25.7%<Badge variant="error">-15%</Badge></div>
					</>
				} />
			</CardTabs>
			<Box>
				<TabItem name={0} activeName={value}>
					<Card className={styles.analyticsCard} raised={false}>
						<ul className={styles.cardList}>
							{
								list.map((props) => (
										<ListItem {...props} key={props.value} />
									),
								)
							}
						</ul>
						<span className={styles.action}>See all <ChevronRight /></span>
						<div className={styles.chartSection}>
							<RadioGroup row>
								<FormControlLabel color="secondary" label="DrawKit" control={<Radio />} value="Female" />
								<FormControlLabel color="secondary" label="DesignStripe" control={<Radio />} value="Male" />
								<FormControlLabel color="secondary" label="Glyphy.io" control={<Radio />} value="Other" />
								<FormControlLabel color="secondary" label="Designvalley.club" control={<Radio />} value="Other" />
								<FormControlLabel color="secondary" label="Neubel" control={<Radio />} value="Other" />
							</RadioGroup>
							<ResponsiveContainer>
								<LineChart
									width={500}
									height={300}
									data={data}
								>
									<XAxis tickLine={false} axisLine={false} dataKey="name" type="category" />
									<YAxis tickLine={false} axisLine={false} dataKey="pv" orientation="right" />
									<RechartsTooltip />
									<Line dataKey="pv" stroke="#FF9900" />
								</LineChart>
							</ResponsiveContainer>
						</div>
					</Card>
					<Box display="flex" flexWrap="wrap" alignItems="flex-start">
						<StatisticsCard title="Most Active Sites" items={activeSitesData} />
						<StatisticsCard title="Most Visited Sites" items={lastVisitedSitesData} />
						<StatisticsCard title="Top Events" items={eventsData} />
						<NewCard />
					</Box>
				</TabItem>

				<TabItem name={1} activeName={value}>
					<Card className={styles.analyticsCard} raised={false}>
						Unique Users
					</Card>
				</TabItem>

				<TabItem name={2} activeName={value}>
					<Card className={styles.analyticsCard} raised={false}>
						Avarage visit time
					</Card>
				</TabItem>

				<TabItem name={3} activeName={value}>
					<Card className={styles.analyticsCard} raised={false}>
						Bounce Rate
					</Card>
				</TabItem>
			</Box>
		</>
	);
};

export default Dashboard;
