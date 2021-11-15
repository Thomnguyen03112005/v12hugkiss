const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const config = require("../../config.json")

module.exports = {
  name: "kiss",
  usage: "kiss [@User]",
  run: async (client, message, args) => {
      if(message.delete)message.delete();
      let user = message.mentions.users.first();
      if(!user) message.author;
        

        async function work() {
        let owo = (await neko.sfw.kiss());

        const kissembed = new Discord.MessageEmbed()
        .setTitle(user.username + " Bạn đã được hôn!")
        .setDescription((user.toString() + " được hôn bởi " + message.author.toString()))
        .setImage(owo.url)
        .setColor("RANDOM").setFooter(client.user.username, config.AVATARURL)
        .setURL(owo.url);
        message.channel.send(kissembed).then(msg => msg.delete({ timeout: 10000}));

}

      work();
}
};
