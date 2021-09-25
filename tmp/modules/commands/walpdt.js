const fs = require("fs");
module.exports.config = {
	name: "wall ad",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "wall ad",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("wall ad")==0 || (event.body.indexOf("Wall ad")==0)) {
		var msg = {
				body: "đây nè",
				attachment: fs.createReadStream(__dirname + `/noprefix/wallpdt.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}