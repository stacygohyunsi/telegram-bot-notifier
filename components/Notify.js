const TelegramBot = require('node-telegram-bot-api');

const Notify = {
	sendMessage: function(message, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID) {
		(!message) && (() => { throw new Error("Expected message cannot be found") })();
		(!TELEGRAM_BOT_TOKEN) && (() => { throw new Error("Expected TELEGRAM_BOT_TOKEN cannot be found") })();	
		(!TELEGRAM_CHAT_ID) && (() => { throw new Error("Expected TELEGRAM_CHAT_ID cannot be found") })();	
			
		const telegram = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: false });
		telegram.sendMessage(TELEGRAM_CHAT_ID, message);
	}
};

module.exports = Notify;

