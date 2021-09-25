const fs = require("fs");
module.exports.config = {
	name: "stk",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Long LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "stk",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("stk")==0 || (event.body.indexOf("stk")==0)) {
		var msg = {
				body: "Mình cho thuê bot với giá 0đ nhưng bạn nào có lòng tốt thì cứ bank qua cho mình nhé <3 iuuu\n\n\n🍖 MOMO: 0349336137 - Phùng Đức Tài 🍖\n🍕 Agribank: 9704053047113690 - Phùng Đức Tài 🍕\n🍉  vpt  🍉",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}