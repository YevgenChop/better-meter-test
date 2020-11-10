import React from 'react';

// Layouts
import DashboardLayout from './layouts/dashboard/DashboardLayout';
// Pages
import IndexPage from './pages/index/IndexPage';

function App() {
	return (
		<DashboardLayout>
			<IndexPage />
		</DashboardLayout>
	);
}

export default App;
