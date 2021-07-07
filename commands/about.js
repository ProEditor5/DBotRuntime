module.exports = {
	name: 'about',
	description: "Gives information on DBot.",
	execute(message, args, Discord, theme){
        //writes embed
        let embed = new Discord.MessageEmbed()
        .setColor(theme)
        .setTitle(":information_source: About DBot :information_source:")
        .addFields(
        {name: "What is DBot?", value: "DBot is a minimal discord bot designed with helpful tweaks to your server."}, 
        {name: "How do I use DBot?", value: "You can use this link to invite DBot to your server: https://bit.ly/3jTWIin"},
        {name: "What are some features of DBot?", value: "DBot contains 8 commands, use -help to list them."},
        {name: "Is DBot safe?", value: "DBot's entire code is available using the following link: "},
        {name: "Where do I report bugs for DBot?", value: "You can join DBot's feedback server here: https://discord.gg/C8csuDKvnp"})
        //finishes and sends embed
        .setFooter(`Page requested by ${message.author.username}.`, message.author.displayAvatarURL());
        message.channel.send(embed);
    }
}