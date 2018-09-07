const { app, BrowserWindow } = require('electron');

let url;
if (process.env.NODE_ENV === 'DEV') {
	url = 'http://localhost:8081/';
} else {
	url = `file://${process.cwd()}/dist/index.html`;
}

app.on('ready', () => {
	let window = new BrowserWindow({
		width: 800,
		height: 600,
		autoHideMenuBar: true,
		skipTaskbar: true
	});
	window.loadURL(url);
});

// const { app, BrowserWindow } = require('electron');

// let mainWindow;

// function createWindow() {
// 	mainWindow = new BrowserWindow({
// 		width: 800,
// 		height: 600,
// 		autoHideMenuBar: true,
// 		skipTaskbar: true
// 	});

// 	mainWindow.loadFile('index.html');

// 	mainWindow.on('closed', function() {
// 		mainWindow = null;
// 	});
// }

// app.on('ready', createWindow);

// app.on('window-all-closed', function() {
// 	if (process.platform !== 'darwin') {
// 		app.quit();
// 	}
// });

// app.on('activate', function() {
// 	if (mainWindow === null) {
// 		createWindow();
// 	}
// });
