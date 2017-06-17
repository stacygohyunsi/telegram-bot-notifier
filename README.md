# Telegram-bot-notifier
Telegram Bot Notifier allows you to be notified of certain changes within your environment through Telegram. It is a bot which can send you notifications/messages. I use this in my CI/CD pipeline to let me know which stage the build process is at.

# Usage
For more details on how to use it, look at the folder - example.

**Steps:**

1. Set up a telegram bot

This bot will be the one pushing you nottifications on your environment. 
It is really interesting to set up a telegram bot. Start by searching for the `BotFather` in Telegram and start a chat by typing in `/newbot`.

The BotFather will guide you through the steps of setting up your own bot by giving it a name (or add a profile picture etc). Once done, you will be given a HTTP API token for your bot. 

2. Find out your Telegram chat ID

`npm install --save` the module and require the module in your root server.js file. Then call the module passing 2 arguments, your express server and the HTTP API token you got from the BotFather previously. `TelegramBotNotifier(APP, HTTP_API_TOKEN)` 

```
const TelegramBotNotifier = require('telegram-bot-notifier');
TelegramBotNotifier.getChatId(app, TelegramConfig.BOT_TOKEN);

```
Start your server and navigate to the port you are on with the endpoint `/getChatId`. For e.g., `localhost:1338/getChatId`. Then talk to your bot on Telegram. The bot should respond with `Your chat id is XXXXX`. 


3. Save your Chat Id and make your bot send you notifications!
Save your Chat Id in your configurations as we will need the Id to send us notifications. 

To send notifications, we simply call the `TelegramBotNotifier.notify.sendMessage(MESSAGE, HTTP_API_TOKEN, ChatId) ` function, passing in the message to appear on Telegram, the HTTP API token from the BotFather and the Chat Id from the previous step. 
```
TelegramBotNotifier.notify.sendMessage('Hello, I am being deployed to staging-environment', TelegramConfig.BOT_TOKEN, TelegramConfig.CHAT_ID);
```



