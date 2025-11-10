const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    'width': 1600,
    'height': 900,
    'webPreferences': {
      'nodeIntegration': true,
      'contextIsolation': false
    }
  });
  mainWindow.maximize()
  mainWindow.loadFile('index.html')
});
