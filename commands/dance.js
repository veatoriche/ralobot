module.exports = {
	name: '춤',
	description: '쿵짝쿵짝',
	execute(msg) {
        Promise.all([
            msg.react('🍎'),
            msg.react('🍊'),
            msg.react('🍇')
        ]).catch(() => console.error('One of the emojis failed to react.'));
        
        msg.channel.send('https://www.youtube.com/watch?v=iSw5EJUI4Fw')
    },
};