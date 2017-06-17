const express = require('express');
const http = require('http');
const TelegramBotNotifier = require('../index');
const bodyParser = require('body-parser');
const TelegramConfig = require('./config/telegram');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
TelegramBotNotifier.getChatId(app, TelegramConfig.BOT_TOKEN);

const server = http.createServer(app);

server.listen(process.env.PORT || 1338, function () {
	console.log('Server listening on port 1338');
});

module.exports = server;