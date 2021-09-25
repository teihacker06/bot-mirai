const fs = require("fs");
module.exports.config = {
	name: "ny ad",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Bảo", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yêu bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ny ad")==0 || (event.body.indexOf("ny ad")==0)) {
		var msg = {
				body: "Cục vàng của bot đây nhé\nhttps://www.facebook.com/profile.php?id=100035387603689",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}