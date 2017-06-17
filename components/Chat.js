const TelegramBot = require('node-telegram-bot-api');

const Chat = function(app, TELEGRAM_BOT_TOKEN){
	app.get('/getChatId', function(req, res, next) {
		telegram = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });
		telegram.on('text', (message) => {
			telegram.sendMessage(message.chat.id, 'Your chat id is ' + message.chat.id).catch((error) => {
				(error) && (() => {throw new Error(error.response.body)})();
			});
		});
	})
}
module.exports = Chat;