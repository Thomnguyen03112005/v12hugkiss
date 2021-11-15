/*const {MessageEmbed, Message} = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'help<tts',
    aliases: ['help<tts'],
    run: async ( client , message , arg ) => {
        const embed = new MessageEmbed()
        .setTitle('**📝Danh sách lệnh bot discord📝**')
        .setDescription('***👋welcome Bro👋 ***')
        .setThumbnail(`https://i.pinimg.com/originals/52/1a/ed/521aed14dc21738b7e4124a11aad266b.gif`)
        .addField('**🎤Lệnh Text to speak**' , ' \`Dùng lệnh [ .t ( nhập thứ cần cho bot nói ) ]\` ')
        .addField('**Cảm ơn các bạn đã sử dụng bot của Bee🙏**' , '**Chúc bạn 1 ngày mới vui vẻ và đầy sức khoẻ❤**')
        .setFooter('📢Bot thuộc quyền sở hữu bởi Bee✔️')
        .setAuthor(message.author.tag , message.member.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('RANDOM')
        return message.channel.send(embed);
    }
}*/