import React, { FC } from 'react';
import { Box } from '@material-ui/core';

// Components
import { Tabs, Tab } from '../../components';
import AnalyticsIcon from '../../components/icons/AnalyticsIcon';
import CampaignsIcon from '../../components/icons/CampaignsIcon';
import GlobeIcon from '../../components/icons/GlobeIcon';
import OrganisationsIcon from '../../components/icons/OrganisationsIcon';
import PreviewIcon from '../../components/icons/PreviewIcon';
import SettingsIcon from '../../components/icons/SettingsIcon';
import UsersIcon from '../../components/icons/UsersIcon';
import Dashboard from './tabs/dashboard/Dashboard';
import TabItem from '../../components/tabs/TabItem';
// Icons
import DashboardIcon from '../../components/icons/DashboardIcon';
// Styles
import useStyles from './index-page.styles';

const IndexPage: FC = () => {
	const styles = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
				<Tab label="Dashboard" icon={<DashboardIcon />}/>
				<Tab label="Sites" icon={<GlobeIcon />}/>
				<Tab label="Campaigns" icon={<CampaignsIcon />}/>
				<Tab label="Analytics" icon={<AnalyticsIcon />}/>
				<Tab label="Live View" icon={<PreviewIcon />}/>
				<Tab label="Users" icon={<UsersIcon />}/>
				<Tab label="Organisations" icon={<OrganisationsIcon />}/>
				<Tab label="Settings" icon={<SettingsIcon />}/>
			</Tabs>
			<Box className={styles.content}>
				<TabItem name={0} activeName={value}>
					<Dashboard />
				</TabItem>
			</Box>
		</>
	);
};

export default IndexPage;
