module.exports.config = {
	name: "outall",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HungCho",
	description: "Gửi tin nhắn tới các nhóm!",
	commandCategory: "Admin",
	usages: "sendnoti [Text]",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "bot đang trục trặc nên out\nai cần thì liên hệ https://www.facebook.com/pdt206\nđể nhận bot lại",
			type: 'bot đang trục trặc nên out\nai cần thì liên hệ https://www.facebook.com/pdt206\nđể nhận bot lại',
			example: 'Hello Em'
		}
	]
};

module.exports.run = async ({ api, event, args }) => {
	return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
		api.sendMessage(' Đã out toàn bộ nhóm thành công', event.threadID);
	});
}