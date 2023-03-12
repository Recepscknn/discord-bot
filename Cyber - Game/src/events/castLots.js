export default client => {

    client.on ("messageCreate", message => {

        if (message.author.bot) return;
        if (message.content.startsWith("./kura")) {

            // bize iletilen mesajı virgüllerden ayırıyoruz
            let cmd = message.content.split(",")
            let myArray = cmd

            // arrayin ilk elemanının başında bulunan komutumuzu siliyoruz
            let updateString = myArray[0].substring(5)
            myArray[0] = updateString
            
            // Ranodm character
            let random = Math.floor(Math.random()*myArray.length)
            let kura = myArray[random]

            
            message.reply(`Kazanan${kura}\n..Tebrikler..`)
        }

    })

}