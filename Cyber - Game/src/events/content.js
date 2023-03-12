import { EmbedBuilder } from "discord.js"

export default client => {
    
    client.on("messageCreate", message => {
        
        if(message.content == "./help") {

            const channelID = "1070666216722669628"
            const channel = client.channels.cache.get(channelID).name
            

            const response = new EmbedBuilder()
                .setAuthor({name: '"Cyber - Game" Help Screen', iconURL: client.user.displayAvatarURL(), url: "https://discordapp.com/users/700737093873434664"})

                .setDescription(`Merhaba ${message.author} hoşgeldin. Amacım seni eğlendirmek.\nAşağıdaki komutlarımı kullanarak benimle oyun oynayabilirsin.`)

                .addFields(
                    { name: "**- SOSYAL MEDYA -**", value: "\n", inline: false },
                    { name: "\u200b", value:`[Instagram](https://www.instagram.com/recepp.js/)`, inline: true},
                    { name: "\u200b", value:`[Github](https://github.com/Recepscknn)`, inline: true},
                    { name: "\u200b", value:`[Linkedin](https://www.linkedin.com/in/recep-se%C3%A7kin/)`, inline: true},
                    { name: "\u200b", value:"\n" },
                    { name: "**- KOMUTLAR -**", value:"\n\u200b" },
                    { name: "./help", value: "Yardım menüsünü açar." },
                    { name: "./kura **isim1**, **isim2**, **isim3**", value: "Kura çeker." },
                    { name: "./numbergame", value: "Kelime tahmin oyununu başlatır." },
                    { name: "./stop", value: "Sürekli oyunları durdurur." },
                    { name: "./taş, ./kağıt, ./makas", value: "Taş, Kağıt, Makas oynatır." },
                    { name: "./meme", value: "Random bir meme gönderir" },
                    { name: "./blackjack", value: "Blackjack kart oyununu başlatır."},
                    { name: "\u200b", value:"\n" }
                )

                .setFooter({text: `Bu oyunlar az mı geldi -- #${channel} kanalından bana yardımcı olabilirsin.\nKanal etiketlemeyi bulamadım. Bulunca düzeltirim (herhalde).`})

                .setColor("Random")

                .setThumbnail("https://i.imgur.com/ziyjqO7.png")

                message.channel.send({embeds: [response]})

        }

    }

)}