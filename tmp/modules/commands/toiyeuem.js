const fs = require("fs");
module.exports.config = {
	name: "tôi yêu em",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "yeu em",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("toi yeu em")==0 || (event.body.indexOf("Toi yeu em")==0)) {
		var msg = {
				body: "yeu em vpt<3",
				attachment: fs.createReadStream(__dirname + `/noprefix/toiyeuem.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}