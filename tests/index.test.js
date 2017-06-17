const { expect } = require('chai');
const path = require('path');

describe('Telegram Bot Notifier', () => {
	it('Chat component is located in the right position', () => {
		expect(() => {
			require(path.join(__dirname, '../components/Chat.js'))
		}).to.not.throw();
	})
	it('Notify component is located in the right position', () => {
		expect(() => {
			require(path.join(__dirname, '../components/Notify.js'))
		}).to.not.throw();
	})	
})