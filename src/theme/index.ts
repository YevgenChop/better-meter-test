import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#0C172E',
			dark: '#101010',
			light: '#FFFFFF',
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#FFFFFF',
		},
		text: {
			primary: '#000000',
			secondary: '#5D6677',
			hint: '#84868A'
		},
		background: {
			default: '#E5E5E5',
			paper: '#FFFFFF'
		},
	},
	typography: {

		fontFamily: [
			'DM Sans'
		].join(','),
	},
	overrides: {
		MuiTooltip: {
			tooltip: {
				padding: '14px',

				backgroundColor: '#0C172E',
				color: '#84868A',

				fontFamily: 'DM Sans',
				fontWeight: 500,
				fontSize: '12px',
				lineHeight: '13px',
			},
			arrow: {
				color: '#0C172E',
			}
		},
		MuiAvatar: {
			root: {
				fontSize: '15px !important',
				border: '2px solid #FFFFFF !important'
			}
		},
		MuiContainer: {
			root: {
				margin: 0,
				maxWidth: '100% !important'
			}
		}
	}
});

export default theme;
