const fs = require("fs");
module.exports.config = {
	name: "Yêu Thùy",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yêu bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yêu thùy")==0 || (event.body.indexOf("Yêu Thùy")==0)) {
		var msg = {
				body: "Chỉ mình em thôi và chỉ một\nMình em ngự trị nơi trái tim anh",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}