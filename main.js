//writing and preparing variables
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const theme = "#7289da";
const rolename = ':video_game:PARTICIPANTS🖦';
const fs = require('fs');
require('dotenv').config();
//read commands
const directFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
client.directcmds = new Discord.Collection();
for(const file of directFiles){
	const command = require(`./commands/${file}`);
	client.directcmds.set(command.name, command);
};
//read server-only commands
const serverFiles = fs.readdirSync('./commands/server/').filter(file => file.endsWith('.js'));
client.servercmds = new Discord.Collection();
for(const file of serverFiles){
	const command = require(`./commands/server/${file}`);
	client.servercmds.set(command.name, command);
};
//ready message
client.once('ready', () => {
	console.log("DBOT ONLINE!");
});
//default roles
client.on('guildMemberAdd', (guildMember) => {
	guildMember.roles.add(guildMember.guild.roles.cache.find(role => role.name === rolename));
});
//command handler
client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	//handles commands
	if (message.guild == undefined){
		if(client.directcmds.get(command) == undefined) return;
		client.directcmds.get(command).execute(message, args, Discord, theme);
	}else{
		//handles server commands
		if(client.directcmds.get(command) != undefined){
			client.directcmds.get(command).execute(message, args, Discord, theme);
		}else{
			if(client.servercmds.get(command) == undefined) return;
			client.servercmds.get(command).execute(message, args, Discord);
		}
	}
});
client.login(process.env.DISCORD_TOKEN);