const { app, BrowserWindow, Menu, Tray } = require('electron');

let url;
if (process.env.NODE_ENV === 'DEV') {
	url = 'http://localhost:8081/';
} else {
	url = `file://${process.cwd()}/dist/index.html`;
}

let mainWindow;
let mainWindowPresent = false;

function createWindow() {
	mainWindow = new BrowserWindow({
		// width: 800,
		// height: 600,
		useContentSize: true,
		autoHideMenuBar: true,
		skipTaskbar: false
	});
	mainWindow.loadURL(url);
	mainWindowPresent = true;
}

app.on('ready', () => {
	let tray = new Tray('src/assets/logo.png');
	const contextMenu = Menu.buildFromTemplate([
		{
			label: 'Quit TimeNotizer',
			click() {
				// Program can be closed via tray -> quit
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
