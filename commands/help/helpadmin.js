const {MessageEmbed, Message} = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'helpadmin',
    aliases: ['help<admin'],
    run: async ( client , message , arg ) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("❌\`Bạn nên có quyền quản trị để sử dụng lệnh này!\`")
          }
        const embed = new MessageEmbed()
        .setTitle('**📝Danh sách lệnh bot discord📝**')
        .setDescription('***👋welcome Bro👋 ***')
        .setThumbnail(`https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif`)
        .addField('**👑Lệnh Admin**' , `
    \`|mute: [@user] [ lý do ]
|unmute: [@user]
|tmute: [@user] [Time]
|send: [@user]
|say: [tin nhắn]
|kick: [@user]
|ban: [@user]
|stats: [ Hiện thị cấu hình sever]
|unban: [Id ngườI dùng]
|banlist: [ xem tên và id người dùng bị ban]
|reload: [Chạy lại tất cả lệnh trong bot]\``)
        .addField('**Cảm ơn các bạn đã sử dụng bot của Bee🙏**' , '**Chúc bạn 1 ngày mới vui vẻ và đầy sức khoẻ❤**')
        .setFooter('📢Bot thuộc quyền sở hữu bởi Bee✔️')
        .setAuthor(message.author.tag , message.member.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('RANDOM')
        return message.channel.send(embed);
    }
}