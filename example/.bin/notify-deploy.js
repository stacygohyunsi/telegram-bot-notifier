const TelegramBotNotifier = require('../../index');
const TelegramConfig = require('../config/telegram');

TelegramBotNotifier.notify.sendMessage('Hello, I am being deployed to staging-environment', TelegramConfig.BOT_TOKEN, TelegramConfig.CHAT_ID);
