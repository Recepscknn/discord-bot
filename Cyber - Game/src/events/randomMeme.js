import { EmbedBuilder } from "discord.js"

export default client => {

    let p1 = "https://i.imgur.com/4Eta9k7.png"
    let p2 = "https://i.imgur.com/t33cEAi.png"
    let p3 = "https://i.imgur.com/fgjQ4ys.png"
    let p4 = "https://i.imgur.com/0lpbRQ3.png"
    let p5 = "https://i.imgur.com/tOgO1c0.png"
    let p6 = "https://i.imgur.com/lAOLwuG.png"
    let p7 = "https://i.imgur.com/mXHy3Ad.png"
    let p8 = "https://i.imgur.com/Uk8JVSI.png"
    let p9 = "https://i.imgur.com/Cp353NP.png"
    let p10 = "https://i.imgur.com/bTH9veq.png"
    let p11 = "https://i.imgur.com/ixvEuME.png"
    let p12 = "https://i.imgur.com/Bq9Dv6F.png"
    let p13 = "https://i.imgur.com/TVm6rHe.png"
    let p14 = "https://i.imgur.com/sploEEs.png"
    let p15 = "https://i.imgur.com/Q4IpZfC.png"
    let p16 = "https://i.imgur.com/KXk3omP.png"
    let p17 = "https://i.imgur.com/db4awuq.png"
    let p18 = "https://i.imgur.com/SWA7Bu5.png"
    let p19 = "https://i.imgur.com/i7o2vfq.png"
    let p20 = "https://i.imgur.com/GLnShA5.png"
    let p21 = "https://i.imgur.com/w2kOkBw.png"

    

    client.on('messageCreate', message => {

        if ( message.content === "./meme" ) {
            
            const memes = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21]
            let randomMemes = Math.floor(Math.random()*memes.length)
            let randomMeme =  memes[randomMemes]

            const request = new EmbedBuilder()
                .setImage(randomMeme)
                .setColor("Blue")

                message.channel.send({embeds: [request]})
        }

    })

}