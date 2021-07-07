module.exports = {
	name: 'help',
	description: "Gives a list of bot commands",
	execute(message, args, Discord, theme){
		//writes embeds
		const embed = new Discord.MessageEmbed()
		.setColor(theme)
		.setTitle(':tools: DBot Commands List :tools:')
		.addFields(
		{name:'`-help`',value:'Gives a list of bot commands', inline: true},
		{name:'`-date`', value:"Returns today's date.", inline: true},
		{name:'`-about`', value:"Returns information about DBot.", inline: true},
		{name:'`-poll <question>`',value:'Starts a poll on the specified question.', inline: true},
		{name:'`-clear <amount>`',value:'Clears a certain amount of messages.', inline: true},
		{name:'\u200B',value:"\u200B", inline: true},
		{name: "SERVER-ONLY COMMANDS:",value: "The following commands will not work in DM's."},
		{name:'`-invite <uses>`',value:'Generates an invite.', inline: true},
		{name:'`-kick <@user>`',value:"Kick specified user.", inline: true},
		{name:'`-ban <@user>`',value:"Bans specified user.", inline: true})
		//finishes and sends message
		.setTimestamp()
		.setFooter('Page 1 of 1', message.author.displayAvatarURL());
		message.channel.send(embed);
	}
}