module.exports = {
	name: 'poll',
	description: "Launches a poll.",
	async execute(message, args, Discord, theme){
        //does setup and preparation
        if(!args[0]) return message.channel.send("Please enter a statment to poll. -poll <question>");
        let question = message.content.slice(6);
        let embed = new Discord.MessageEmbed()
        .setColor(theme)
        .setTitle(question)
        .setFooter(`Requested by ${message.author.username}.`, message.author.displayAvatarURL());
        //async sends & reacts to message
        let botmessage = await message.channel.send(embed);
        await botmessage.react("👍");
        await botmessage.react("👎");
	}
}