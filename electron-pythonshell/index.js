const { app, BrowserWindow } = require("electron");
const { PythonShell } = require("python-shell");

const pyshell = new PythonShell("./python/sample.py");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });
  mainWindow.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
  //Pythonのバージョン取得
  pyshell.send("");
});

pyshell.on("message", function (data) {
  console.log(data);
});
