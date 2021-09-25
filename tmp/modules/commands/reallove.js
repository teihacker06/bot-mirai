const fs = require("fs");
module.exports.config = {
	name: "real love",
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
	if (event.body.indexOf("Real love")==0 || (event.body.indexOf("real love")==0)) {
		var msg = {
				body: "già cùng nhau là được <3",
				attachment: fs.createReadStream(__dirname + `/noprefix/pdt06.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}