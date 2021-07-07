module.exports = {
    name: 'invite',
    description: 'Invites the specified person.',
    async execute(message, args, Discord){
        //reads custom information
        if(!((amount+1) > 1)) return message.channel.send("Please enter an amount of uses to your invite. -invite <uses allowed>");
        //makes and sends invite
        let invite = await message.channel.createInvite({maxAge: 10 * 60000, maxUses: args[0]});
        message.channel.send(`Here is your invite: \n ${invite}`);
    }
}