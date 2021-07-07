module.exports = {
    name: 'kick',
    description: 'Kicks the specified person.',
    execute(message, args, Discord){
        //Checks permissions
        const mention = message.guild.member(message.mentions.users.first());
        if(mention == undefined) return message.channel.send("Please mention a valid user. -kick <@user>");
        if(!message.member.hasPermission("KICK_MEMBERS") || mention.kickable == false) return message.channel.send("Unable to kick mentioned user.");
        const memberID = message.guild.members.cache.get(mention.id);
        //Kicks user
        memberID.kick();
        message.channel.send("User has been kicked.");
    }
}