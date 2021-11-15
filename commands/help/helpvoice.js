/*const {MessageEmbed, Message} = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'help<voice',
    aliases: ['help<voice'],
    run: async ( client , message , arg ) => {
        const embed = new MessageEmbed()
        .setTitle('**📝Danh sách lệnh bot discord📝**')
        .setDescription('***👋welcome Bro👋 ***')
        .setThumbnail(`https://i.pinimg.com/564x/cf/e5/eb/cfe5eb0464755975917f075821e780f4.jpg`)
        .addField('**🔊Lệnh Voice**' , '\`Dùng lệnh [ .v ( click số để phát mp3 ) ] \`')
        .addField('**Cảm ơn các bạn đã sử dụng bot của Thowm nguyễn🙏**' , '**Chúc bạn 1 ngày mới vui vẻ và đầy sức khoẻ❤**')
        .setFooter('📢Bot thuộc quyền sở hữu bởi Thowm nguyễn✔️')
        .setAuthor(message.author.tag , message.member.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('RANDOM')
        return message.channel.send(embed);
    }
}*/