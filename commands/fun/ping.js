const emoji = require('../../assets/json/emoji.json');

module.exports = {
  name: "ping",
  aliases:["api"],
  usage:".ping",
  description :" hiển thị AIP của bot, độ trễ phản hồi",
  run: async (client, message, args) => {
      message.channel.send(`${emoji.test}\`${client.ws.ping} ms\``)
  }
};
