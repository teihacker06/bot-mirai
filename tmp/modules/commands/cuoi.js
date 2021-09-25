const fs = require("fs");
module.exports.config = {
	name: "cụ ơi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "bắn cung",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Cụ ơi")==0 || (event.body.indexOf("cụ ơi")==0)) {
		var msg = {
				body: "hết nhạc cụ về",
				attachment: fs.createReadStream(__dirname + `/noprefix/cuquay.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}