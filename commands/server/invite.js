module.exports = {
    name: 'invite',
    description: 'Generates an invite',
    async execute(message, args, Discord){
        //makes and sends invite
        let invite = await message.channel.createInvite({maxAge: 10 * 60000, maxUses:1});
        message.channel.send(`Here is your invite: \n ${invite}`);
    }
}