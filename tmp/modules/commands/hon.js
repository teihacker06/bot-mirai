const fs = require("fs");
module.exports.config = {
	name: "hôn",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "hôn",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Hôn")==0 || (event.body.indexOf("hôn")==0)) {
		var msg = {
				body: "moahhh<3",
				attachment: fs.createReadStream(__dirname + `/noprefix/moahhh.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}