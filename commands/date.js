module.exports = {
	name: 'date',
	description: "Returns the date.",
	execute(message, args, Discord, theme){
		//writes a few lists to convert date into words
		const date = new Date();
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		//formats and sends finished date
		message.channel.send(`Today's date is ${days[date.getDay()].concat(", ",months[date.getMonth()]," ",date.getDate())}.`);
	}
}