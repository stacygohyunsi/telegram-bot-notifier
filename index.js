const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const TelegramBotNotifier = {};
TelegramBotNotifier.getChatId = require('./components/Chat');
TelegramBotNotifier.notify = require('./components/Notify');

server.listen(process.env.PORT || 1337, function () {
	console.log('Server listening on port 1337');
});

module.exports = TelegramBotNotifier;