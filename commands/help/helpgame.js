const {MessageEmbed, Message} = require('discord.js');
const config = require('../../config.json');
const fs = require('fs');

module.exports = {
    name: 'helpgame',
    aliases: ['help<game'],
    run: async ( client , message , arg ) => {
        const embed = new MessageEmbed()
        .setTitle('**📝Danh sách lệnh bot discord📝**')
        .setDescription('***👋welcome Bro👋 ***')
        .setThumbnail(`https://greenbiomix.com/wp-content/uploads/2020/07/08e7ec0f84233b37ac26e920bc60ec57.gif`)
        .addField('**🎮Game🎮**' , 
        `Cách loại game như | Chess | poker | baytrayal | Fishing | youtube | `)
        .addField('**Cảm ơn các bạn đã sử dụng bot của Bee🙏**' , '**Chúc bạn 1 ngày mới vui vẻ và đầy sức khoẻ❤**')
        .setFooter('📢Bot thuộc quyền sở hữu bởi Bee✔️')
        .setAuthor(message.author.tag , message.member.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('RANDOM')
        return message.channel.send(embed);
    }
}