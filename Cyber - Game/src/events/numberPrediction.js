export default client => {

    // emojis
    
    let monocle = ":face_with_monocle:"
    let thinking = ':thinking:'
    let scream = ":scream:"
    let disguised = ":disguised_face:"
    let partyface = ":partying_face:"
    let handface = ":face_with_hand_over_mouth:"
    let yum = ":yum:"
    let zany = ":zany_face:"
    let grin = ":grin:"
    let sunglasses = ":sunglasses:"
    let smirk = ":smirk:"
    let peekeye = ":face_with_peeking_eye:"
    let flushed = ":flushed:"

    
    const prefix = "./";

    client.on("messageCreate", async (message) => {
        if (message.author.bot || !message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const cmd = args.shift().toLowerCase();

        if (cmd === "numbergame") {

            // doesn't start with bot or exclamation point
            const myNumber = Math.floor(Math.random() * 100 + 1);
            message.reply(`Hadi Başlayalım ${thinking}\nBir Sayı Girmelisin.. (0 - 100)`);

            // save user ip address
            const filter = (m) => m.author.id === message.author.id;
            const collector = message.channel.createMessageCollector({ filter });

            collector.on("collect", (msg) => {

                // Random Emojis
                let emojis = [monocle, thinking, disguised, handface, yum, zany, grin, sunglasses, smirk, peekeye, flushed]
                let randomEmoji = Math.floor(Math.random()*emojis.length)
                let randomEmojis = emojis[randomEmoji]
                
                // game stop command
                if (msg.content == "./stop") {
                    collector.stop()
                }else if (isNaN(msg.content)) {
                    // throws an error if string expression is used
                    msg.reply(`${msg.content} bir sayı değil.`);
                    return;
                }

                const guess = Number(msg.content);
                
                // game content
                if (guess > 100 || guess < 0) {
                    msg.reply(`${scream} 0 ile 100 arasında bir değer girmelisin.`);
                } else if (guess > myNumber) {
                    msg.reply(`Benim sayım daha düşük. ${randomEmojis}`);
                } else if (guess < myNumber) {
                    msg.reply(`Benim sayım daha büyük. ${randomEmojis}`);
                } else {
                    msg.reply(`${partyface} BAŞARDIN ${partyface}\n\nBenim sayım : ${myNumber}\n\nHadi tekrar oynayalım`);
                    collector.stop();
                }
        });
    }
    });
}

