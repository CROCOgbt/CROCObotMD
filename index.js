console.log('✅ Starting.....')
const http = require('http');
const os = require('os');
const port = 8080; //custom ports here, sample: (8080,3000,5000) and others
const express = require('express');
const Cfonts = require ('cfonts')
const app = express();
Cfonts.say('salsaBoTz',{font: 'tiny', align: 'center'})
Cfonts.say('Script by salsaOfficial',{font: 'console', align: 'center'})
Cfonts.say('wa: wa.me/84528059414',{font: 'console', align: 'center'})
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const data = {
    status: 'true',
    message: 'Bot Successfully Activated!',
    author: 'salsaBoTz'
  };

  const result = {
    response: data
  };
  res.send(JSON.stringify(result, null, 2));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


cluster = require("cluster");
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

let isRunning = false;

function start(file) {
  if (isRunning) return;
  isRunning = true;

  const args = [path.join(__dirname, file), ...process.argv.slice(2)];
  const p = spawn(process.argv[0], args, {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  });

  p.on("message", (data) => {
    console.log(`🟢 RECEIVED ${data}`);
    switch (data) {
      case "reset":
        p.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case "uptime":
        p.send(process.uptime());
        break;
    }
  });

  p.on("exit", (code) => {
    isRunning = false;
    console.error(`❎ sistem bot mati dengan kode: ${code}`);

    if (code === 0) return;

    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0]);
      start("main.js");
    });
  });

  p.on("error", (err) => {
    console.error('\x1b[31m%s\x1b[0m', `Error: ${err}`);
    p.kill();
    isRunning = false;
    start("main.js");
  });

  const pluginsFolder = path.join(__dirname, "plugins");

  fs.readdir(pluginsFolder, (err, files) => {
    if (err) {
      console.error(`Error reading plugins folder: ${err}`);
      return;
    }
console.log(`______________________________________`)
    console.log(`✅ Found ${files.length} plugins in folder ${pluginsFolder}`);
    try {
      require.resolve('@adiwajshing/baileys');
      console.log(`✅ Baileys library version ${require('@adiwajshing/baileys/package.json').version} is installed`);
    } catch (e) {
      console.error(`❎ Baileys library is not installed`)
    }
  });
  console.log(`Script Ny Salsa`)
console.log(`______________________________________`)
    
  setInterval(() => {}, 1000);
}

start("main.js");

process.on('unhandledRejection', () => {
  console.error('\x1b[31m%s\x1b[0m', 'Unhandled promise rejection. Script will restart...');
  start('main.js');
});

process.on('exit', (code) => {
  console.error(`Exited with code: ${code}`);
  console.error('Script will restart...');
  start('main.js');
});