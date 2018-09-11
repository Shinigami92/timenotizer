const { app, BrowserWindow, Menu, Tray } = require('electron');

let url;
if (process.env.NODE_ENV === 'DEV') {
	url = 'http://localhost:8081/';
} else {
	url = `file://${process.cwd()}/dist/index.html`;
}

let mainWindow;
let mainWindowPresent = false;
let icon = 'src/assets/alarm-clock-32.png';

function createWindow() {
	mainWindow = new BrowserWindow({
		// width: 800,
		// height: 600,
		autoHideMenuBar: true,
		icon,
		skipTaskbar: false,
		useContentSize: true
	});
	mainWindow.loadURL(url);
	mainWindowPresent = true;
}

let tray;
app.on('ready', () => {
	tray = new Tray(icon);
	const contextMenu = Menu.buildFromTemplate([
		{
			label: 'Open',
			click() {
				if (mainWindowPresent === false) {
					createWindow();
				}
			}
		},
		{
			label: 'Quit TimeNotizer',
			click() {
				// Program can be closed via tray -> quit
				tray = null;
				mainWindow = null;
				mainWindowPresent = null;
				icon = null;
				app.quit();
			}
		}
	]);
	tray.setToolTip('TimeNotizer');
	tray.setContextMenu(contextMenu);
	tray.on('click', (event, bounds, position) => {
		console.log({ event, bounds, position });
		console.log({ mainWindow });
		if (mainWindowPresent === false) {
			createWindow();
		}
	});

	createWindow();
});

app.on('window-all-closed', (event) => {
	console.log({ event });
	// Program should not close on exit
	event.preventDefault();
	mainWindowPresent = false;
});
