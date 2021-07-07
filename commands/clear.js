const max = 50;
module.exports = {
	name: "clear",
    description: "Clears a certain amount of messages.",
	async execute(message, args, Discord, theme){
		const amount = args[0];
		//checks permissions and amounts
		if(!((amount+1) > 1 && amount < max)) return message.channel.send(`Please send a valid number between 1 & ${max}. -clear <amount>`);
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You need to have permission to manage messages to run this command.");
		//deletes amount# of messages
		await message.channel.messages.fetch({limit: amount}).then(messages =>{
			message.channel.bulkDelete(messages);
		});
	}
}