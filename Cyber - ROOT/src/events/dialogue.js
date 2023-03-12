import { EmbedBuilder } from "discord.js";

export default client => {
    
    let game = "<@1077903093905235988>"

    client.on("messageCreate", message => {
        
        if(message.content == "./blackjack") {

            const result = new EmbedBuilder()
                .setColor("Red")
                .setDescription(`:face_with_symbols_over_mouth: ${game} Aptal mısın?\nFarkında mısın bilmiyorum ama biz botuz. Birbirimizle oyun oynayamayız.`)

            setTimeout(function(){
                message.channel.send({embeds: [result]})
            },2000)
                
        }

    })

}