const fs = require("fs");
module.exports.config = {
	name: "tkb 10a4",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "tkb",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("10a4 tkb")==0 || (event.body.indexOf("10a4 tkb")==0)) {
		var msg = {
				body: "Gắng mà học nhé<3",
				attachment: fs.createReadStream(__dirname + `/noprefix/tkb.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}