const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 1000,
    minHeight: 800,
  });
  mainWindow.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
