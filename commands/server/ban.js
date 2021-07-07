module.exports = {
    name: 'ban',
    description: 'Bans the specified person.',
    execute(message, args, Discord){
        //Checks permissions
        const mention = message.guild.member(message.mentions.users.first());
        if(mention == undefined)return message.channel.send("Please mention a valid user. -ban <@user>");
        if(!message.member.hasPermission("BAN_MEMBERS") || mention.bannable == false) return message.channel.send("Unable to ban mentioned user.");
        const memberID = message.guild.members.cache.get(mention.id);
        //Bans user
        memberID.ban();
        message.channel.send("User has been banned.");
    }
}