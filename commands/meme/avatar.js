const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avt',
    aliases:['a', 'avatar', 'ảnh đại diện'],
    category: 'fun',
    usage:".avt < @ người cần xem VD: .avt @thowm>",
    description: "Xem avatar của bạn và bạn bè trong server",
    run: async (client, message, args) => {
        message.delete()
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const URL = member.user.avatarURL({ format: 'jpg', dynamic: true, size: 1024})
        const avatarEmbed = new MessageEmbed()
            .setImage(URL)
            .setURL(URL)
            .setTitle('Download avatar ở đây')
        message.channel.send(avatarEmbed)
    }
}