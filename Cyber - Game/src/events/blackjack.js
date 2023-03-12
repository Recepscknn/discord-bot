import { ActionRowBuilder, ButtonBuilder, EmbedBuilder } from "discord.js"

export default client => {

    // cards and card types
    const cardType = [":spades:Maça", ":clubs:Sinek", ":hearts:Kupa", ":diamonds:Karo"]
    const card = {"2": 2,"3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 8, "10": 10,"13": "K", "14": "A"}

    const prefix = "./"

    // Cyber - ROOT bot id
    const root = "<@1083742475073630220>"
    
    client.on("messageCreate", message => {
        if (message.author.bot || !message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const cmd = args.shift().toLowerCase();
        
        // We create function to generate random card
        function random () {
            let randomCardTypes = Math.floor(Math.random()*cardType.length)
            let randomCardType = cardType[randomCardTypes]

            let keys = Object.keys(card)
            let randomCards = keys[Math.floor(Math.random()*keys.length)]
            let randomCard = card[randomCards]

            return `${randomCardType} ${randomCard}`
            
        }


        // we create a separate function for the secret card of the safe
        function randomSecret () {
            let randomCardTypes = Math.floor(Math.random()*cardType.length)
            let randomCardType = cardType[randomCardTypes]

            let keys = Object.keys(card)
            let randomCards = keys[Math.floor(Math.random()*keys.length)]
            let randomCard = card[randomCards]

            return `${randomCardType} ${randomCard}`

        }

        /********************************************************* Page1 **********************************************************/
        let ynButtonClicked = false;
        let ckButtonClicked = false;
        let ck1ButtonClicked = false;
        let ck2ButtonClicked = false;
        let ck3ButtonClicked = false;

        if(cmd == "blackjack") {

            // we ask the user if she/he knows the game
            const response = new EmbedBuilder()
                .setDescription(`haha ${message.author}. Sen ciddi misin?\nGördün mü ${root} senden başka bu oyunu bilenler de varmış. Artık seninle oynamak zorunda değilim.`)
                .setColor("Green")

            const result = new EmbedBuilder()
                .setDescription(`:shushing_face: Şşşş! ${message.author} sakın ona söyleme ama biz gizlice oyun oynuyoruz. Bakma böyle triplere girdiğine moderatör olunca çok değişti. Ama ben onun o alttaki varoş kokusunu alırım.\n\u200bHer neyse oyunu biliyorsun değil mi?`)
                .setColor("Green")

            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId("bj_evet")
                        .setLabel("Evet")
                        .setStyle("Primary"),
                    new ButtonBuilder()
                        .setCustomId("bj_hayır")
                        .setLabel("Hayır")
                        .setStyle("Success")
                )

            /********************************************************* Page2 **********************************************************/
                message.channel.send({embeds: [response]})

            setTimeout(function(){
                message.channel.send({embeds: [result], components: [row]}).then(() => {
                    const filter = (interaction) => interaction.isButton() && interaction.customId.startsWith("bj_");
                    const collector = message.channel.createMessageComponentCollector({ filter, time: 30000 });

                    
                    collector.on('collect', async (interaction) => {
                        if (!ynButtonClicked) {
                            ynButtonClicked = true;
                            // Actions to be taken when clicking the button
                                // If the answer is yes, the game begins.
                            if (interaction.customId === "bj_evet") {
                                
                                const yes = new EmbedBuilder()
                                    .setColor("Green")
                                    .addFields(
                                        {name: "O zaman kartları karıyorum.", value:"\n"},
                                        {name: "Kes", value:"\n"},
                                    )

                                // jokes. I'm so funny, aren't I?
                                const kes = new EmbedBuilder()
                                    .setColor("Green")
                                    .addFields({name: "Kestiğini varsayıyorum.", value:"\n"}, {name: "\u200b", value:"\n"})
                                    .setImage("https://i.imgur.com/K2Y54mH.png")
                                
                                // I'm crawling here as I don't know the database

                                let ucard1 = random()
                                let ucard2 = random()
                                let ucard3 = random()
                                let ucard4 = random()
                                let ucard5 = random()
                                let ucard6 = random()
                                let usayi1 = ucard1.split(' ')[1]


                                let fakeToplam;
                                let u1;
                                    if (usayi1 === "K" || usayi1 === "Q" || usayi1 === "J") {
                                        u1 = 10;
                                    }else if (usayi1 === "A") {
                                        u1 = 11
                                    }  else {
                                        u1 = usayi1;
                                    }
                                let usayi2 = ucard2.split(' ')[1]
                                let u2;
                                    if (usayi2 === "K" || usayi2 === "Q" || usayi2 === "J") {
                                        u2 = 10;
                                    }else if (usayi2 === "A") {
                                        fakeToplam = Number(u1) + 11
                                        if(fakeToplam > 21){
                                            u2 = 1
                                        } else {
                                            u2 = 11
                                        }
                                    }  else {
                                        u2 = usayi2;
                                    }
                                let usayi3 = ucard3.split(' ')[1]
                                let u3;
                                    if (usayi3 === "K" || usayi3 === "Q" || usayi3 === "J") {
                                        u3 = 10;
                                    }else if (usayi3 === "A") {
                                        fakeToplam = Number(u1) + Number(u2) + 11
                                        if(fakeToplam > 21){
                                            u3 = 1
                                        } else {
                                            u3 = 11
                                        }
                                    }  else {
                                        u3 = usayi3;
                                    }
                                let usayi4 = ucard4.split(' ')[1]
                                let u4;
                                    if (usayi4 === "K" || usayi4 === "Q" || usayi4 === "J") {
                                        u4 = 10;
                                    }else if (usayi4 === "A") {
                                        fakeToplam = Number(u1) + Number(u2) + Number(u3) + 11
                                        if(fakeToplam > 21){
                                            u4 = 1
                                        } else {
                                            u4 = 11
                                        }
                                    }  else {
                                        u4 = usayi4;
                                    }
                                let usayi5 = ucard5.split(' ')[1]
                                let u5;
                                    if (usayi5 === "K" || usayi5 === "Q" || usayi5 === "J") {
                                        u5 = 10;
                                    }else if (usayi5 === "A") {
                                        fakeToplam = Number(u1) + Number(u2) + Number(u3) + Number(u4) + 11
                                        if(fakeToplam > 21){
                                            u5 = 1
                                        } else {
                                            u5 = 11
                                        }
                                    }  else {
                                        u5 = usayi5;
                                    }
                                let usayi6 = ucard6.split(' ')[1]
                                let u6;
                                    if (usayi6 === "K" || usayi6 === "Q" || usayi6 === "J") {
                                        u6 = 10;
                                    }else if (usayi6 === "A") {
                                        fakeToplam = Number(u1) + Number(u2) + Number(u3) + Number(u4) + Number(u5) + 11
                                        if(fakeToplam > 21){
                                            u6 = 1
                                        } else {
                                            u6 = 11
                                        }
                                    }  else {
                                        u6 = usayi6;
                                    }
                                let utoplam1 = Number(u1) + Number(u2)
                                let utoplam2 = Number(u1) + Number(u2) + Number(u3)
                                let utoplam3 = Number(u1) + Number(u2) + Number(u3) + Number(u4)
                                let utoplam4 = Number(u1) + Number(u2) + Number(u3) + Number(u4) + Number(u5)
                                let utoplam5 = Number(u1) + Number(u2) + Number(u3) + Number(u4) + Number(u5) + Number(u6)

                                
                                let bcard1 = random()
                                let bcard2 = randomSecret()
                                let bcard3 = random()
                                let bcard4 = random()
                                let bcard5 = random()
                                let bcard6 = random()
                                let bsayi1 = bcard1.split(' ')[1]
                                let b1;
                                    if (bsayi1 === "K" || bsayi1 === "Q" || bsayi1 === "J") {
                                        b1 = 10;
                                    }else if (bsayi1 === "A") {
                                        b1 = 11
                                    } else {
                                        b1 = bsayi1;
                                    }
                                let bsayi2 = bcard2.split(' ')[1]
                                let b2;
                                    if (bsayi2 === "K" || bsayi2 === "Q" || bsayi2 === "J") {
                                        b2 = 10;
                                    }else if (bsayi2 === "A") {
                                        fakeToplam = Number(b1) + 11
                                        if(fakeToplam > 21){
                                            b2 = 1
                                        } else {
                                            b2 = 11
                                        }
                                    } else {
                                        b2 = bsayi2;
                                    }
                                let bsayi3 = bcard3.split(' ')[1]
                                let b3;
                                    if (bsayi3 === "K" || bsayi3 === "Q" || bsayi3 === "J") {
                                        b3 = 10;
                                    }else if (bsayi3 === "A") {
                                        fakeToplam = Number(b1) + Number(b2) + 11
                                        if(fakeToplam > 21){
                                            b3 = 1
                                        } else {
                                            b3 = 11
                                        }
                                    } else {
                                        b3 = bsayi3;
                                    }
                                let bsayi4 = bcard4.split(' ')[1]
                                let b4;
                                    if (bsayi4 === "K" || bsayi4 === "Q" || bsayi4 === "J") {
                                        b4 = 10;
                                    }else if (bsayi4 === "A") {
                                        fakeToplam = Number(b1) + Number(b2) + Number(b3) + 11
                                        if(fakeToplam > 21){
                                            b4 = 1
                                        } else {
                                            b4 = 11
                                        }
                                    } else {
                                        b4 = bsayi4;
                                    }
                                let bsayi5 = bcard5.split(' ')[1]
                                let b5;
                                    if (bsayi5 === "K" || bsayi5 === "Q" || bsayi5 === "J") {
                                        b5 = 10;
                                    }else if (bsayi5 === "A") {
                                        fakeToplam = Number(b1) + Number(b2) + Number(b3) + Number(b4) + 11
                                        if(fakeToplam > 21){
                                            b5 = 1
                                        } else {
                                            b5 = 11
                                        }
                                    } else {
                                        b5 = bsayi5;
                                    }
                                let bsayi6 = bcard6.split(' ')[1]
                                let b6;
                                    if (bsayi6 === "K" || bsayi6 === "Q" || bsayi6 === "J") {
                                        b6 = 10;
                                    }else if (bsayi6 === "A") {
                                        fakeToplam = Number(b1) + Number(b2) + Number(b3) + Number(b4) + Number(b5) + 11
                                        if(fakeToplam > 21){
                                            b6 = 1
                                        } else {
                                            b6 = 11
                                        }
                                    } else {
                                        b6 = bsayi6;
                                    }
                                let btoplam1 = Number(b1) + Number(b2)
                                let btoplam2 = Number(b1) + Number(b2) + Number(b3)
                                let btoplam3 = Number(b1) + Number(b2) + Number(b3) + Number(b4)
                                let btoplam4 = Number(b1) + Number(b2) + Number(b3) + Number(b4) + Number(b5)
                                let btoplam5 = Number(b1) + Number(b2) + Number(b3) + Number(b4) + Number(b5) + Number(b6)


                                const firstCards = new EmbedBuilder()
                                    .setColor("Green")
                                    .addFields(
                                        {name: "\u200b", value:"\n"},
                                        {name: "**Senin Kartların**", value: "\n"},
                                        {name: "Kart1", value: `${ucard1}`, inline: true},
                                        {name: "Kart2", value: `${ucard2}`, inline: true},
                                        {name: "Toplam:", value:`${utoplam1}`},
                                        {name: "\u200b", value:"\n"},
                                        {name: "**Benim Kartlarım**", value: "\n"},
                                        {name: "Kart1", value: `${bcard1}`, inline: true},
                                        {name: "Kart2", value: `Kapalı Kart`, inline: true},
                                        {name: "\u200b", value:"\n"},
                                    )

                                    const preference = new ActionRowBuilder()
                                    .addComponents(
                                        new ButtonBuilder()
                                            .setCustomId("bj_cek")
                                            .setLabel("Çek")
                                            .setStyle("Primary"),
                                        new ButtonBuilder()
                                            .setCustomId("bj_kal")
                                            .setLabel("Kal")
                                            .setStyle("Success")
                                    )
                                    const blackjack1 = new EmbedBuilder()
                                            .setColor("Green")
                                            .addFields(
                                                {name: "\u200b", value:"\n"},
                                                {name: "**Senin Kartların**", value: "\n"},
                                                {name: "Kart1", value: `${ucard1}`, inline: true},
                                                {name: "Kart2", value: `${ucard2}`, inline: true},
                                                {name: "Toplam:", value:`${utoplam1}`},
                                                {name: "\u200b", value:"\n"},
                                                {name: "**Benim Kartlarım**", value: "\n"},
                                                {name: "Kart1", value: `${bcard1}`, inline: true},
                                                {name: "Kart2", value: `${bcard2}`, inline: true},
                                                {name: "\u200b", value:"\n"},
                                            )
                                    const blackjack = new EmbedBuilder()
                                            .setColor("Blue")
                                            .setTitle(`BLACKJACK`)
                                            .setDescription(`**Tebrikler** ${message.author} Sen kazandın.\n\u200bAma kimseye söyleme lütfen. Hele ${root}'a asla yoksa dilinden düşmem vallaha`)

                                    const messages = await interaction.message.channel.messages.fetch({ limit: 50 });
                                    interaction.message.channel.bulkDelete(messages);

                                    interaction.channel.send({embeds: [yes]})
                                    setTimeout(async function(){
                                        interaction.channel.send({embeds: [kes]})
                                    },3000)

                                    let gameend;
                                    function gameends () {
                                        if(utoplam1 == 21) {
                                            gameend = interaction.channel.send({embeds: [blackjack1, blackjack]})
                                        } else {
                                            gameend = interaction.channel.send({embeds: [firstCards], components: [preference]})
                                        }
                                    }

                            /********************************************************* Page3 **********************************************************/

                                    setTimeout(function(){
                                        gameends()
                                        gameend.then(() => {
                                            const filter = (interaction) => interaction.isButton() && interaction.customId.startsWith("bj_");
                                            const collector = message.channel.createMessageComponentCollector({ filter, time: 30000 })
                                            
                                            collector.on('collect', async (interaction) => {
                                                    
                                                if (interaction.customId === "bj_cek") {
                                                    const secondCards = new EmbedBuilder()
                                                    .setColor("Green")
                                                    .addFields(
                                                        {name: "\u200b", value:"\n"},
                                                        {name: "**Senin Kartların**", value: "\n"},
                                                        {name: "Kart1", value: `${ucard1}`, inline: true},
                                                        {name: "Kart2", value: `${ucard2}`, inline: true},
                                                        {name: "kart3", value: `${ucard3}`, inline: true},
                                                        {name: "Toplam:", value:`${utoplam2}`},
                                                        {name: "\u200b", value:"\n"},
                                                        {name: "**Benim Kartlarım**", value: "\n"},
                                                        {name: "Kart1", value: `${bcard1}`, inline: true},
                                                        {name: "Kart2", value: `Kapalı Kart`, inline: true},
                                                        {name: "\u200b", value:"\n"},
                                                    )
                    
                                                    const preference = new ActionRowBuilder()
                                                    .addComponents(
                                                        new ButtonBuilder()
                                                            .setCustomId("bj_cek1")
                                                            .setLabel("Çek")
                                                            .setStyle("Primary"),
                                                        new ButtonBuilder()
                                                            .setCustomId("bj_kal1")
                                                            .setLabel("Kal")
                                                            .setStyle("Success")
                                                    )
                                                    const blackjack1 = new EmbedBuilder()
                                                            .setColor("Green")
                                                            .addFields(
                                                                {name: "\u200b", value:"\n"},
                                                                {name: "**Senin Kartların**", value: "\n"},
                                                                {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                {name: "Toplam:", value:`${utoplam2}`},
                                                                {name: "\u200b", value:"\n"},
                                                                {name: "**Benim Kartlarım**", value: "\n"},
                                                                {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                {name: "\u200b", value:"\n"},
                                                            )
                                                    const lose = new EmbedBuilder()
                                                            .setColor("Red")
                                                            .setTitle("Ben kazandım")
                                                            .setDescription("Üzülme kimseye söylemeyeceğim!")
                                                    const blackjack = new EmbedBuilder()
                                                            .setColor("Blue")
                                                            .setTitle(`BLACKJACK`)
                                                            .setDescription(`**Tebrikler** ${message.author} Sen kazandın.\n\u200bAma kimseye söyleme lütfen. Hele ${root}'a asla yoksa dilinden düşmem vallaha`)

                                                    const messages = await interaction.message.channel.messages.fetch({ limit: 50 });
                                                    interaction.message.channel.bulkDelete(messages);
                                                    
                                                    let gameend1;
                                                    function gameends1 () {
                                                        if (utoplam2 == 21) {
                                                            gameend1 = interaction.channel.send({embeds: [blackjack1, blackjack]})
                                                            return collector.stop()
                                                        } else if (utoplam2 > 21) {
                                                            gameend1 = interaction.channel.send({embeds: [blackjack1,lose]})
                                                            return collector.stop()
                                                        } else {
                                                            gameend1 = interaction.channel.send({embeds: [secondCards], components: [preference]})
                                                        }
                                                    }
                                                /********************************************************* Page4 **********************************************************/
                                                    gameends1()
                                                    gameend1.then(() => {
                                                        const filter = (interaction) => interaction.isButton() && interaction.customId.startsWith("bj_");
                                                        const collector = message.channel.createMessageComponentCollector({ filter, time: 30000 })

                                                        collector.on('collect', async (interaction) => {
                                                            if (interaction.customId === "bj_cek1") {
                                                                const secondCards = new EmbedBuilder()
                                                                .setColor("Green")
                                                                .addFields(
                                                                    {name: "\u200b", value:"\n"},
                                                                    {name: "**Senin Kartların**", value: "\n"},
                                                                    {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                    {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                    {name: "kart3", value: `${ucard3}`, inline: true},
                                                                    {name: "kart4", value: `${ucard4}`, inline: true},
                                                                    {name: "Toplam:", value:`${utoplam3}`},
                                                                    {name: "\u200b", value:"\n"},
                                                                    {name: "**Benim Kartlarım**", value: "\n"},
                                                                    {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                    {name: "Kart2", value: `Kapalı Kart`, inline: true},
                                                                    {name: "\u200b", value:"\n"},
                                                                )
                                                                const preference = new ActionRowBuilder()
                                                                .addComponents(
                                                                    new ButtonBuilder()
                                                                        .setCustomId("bj_cek2")
                                                                        .setLabel("Çek")
                                                                        .setStyle("Primary"),
                                                                    new ButtonBuilder()
                                                                        .setCustomId("bj_kal2")
                                                                        .setLabel("Kal")
                                                                        .setStyle("Success")
                                                                )
                                                                const blackjack1 = new EmbedBuilder()
                                                                        .setColor("Green")
                                                                        .addFields(
                                                                            {name: "\u200b", value:"\n"},
                                                                            {name: "**Senin Kartların**", value: "\n"},
                                                                            {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                            {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                            {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                            {name: "Kart4", value: `${ucard4}`, inline: true},
                                                                            {name: "Toplam:", value:`${utoplam3}`},
                                                                            {name: "\u200b", value:"\n"},
                                                                            {name: "**Benim Kartlarım**", value: "\n"},
                                                                            {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                            {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                            {name: "\u200b", value:"\n"},
                                                                        )
                                                                const lose = new EmbedBuilder()
                                                                        .setColor("Red")
                                                                        .setTitle("Ben kazandım")
                                                                        .setDescription("Üzülme kimseye söylemeyeceğim!")
                                                                const blackjack = new EmbedBuilder()
                                                                        .setColor("Blue")
                                                                        .setTitle(`BLACKJACK`)
                                                                        .setDescription(`**Tebrikler** ${message.author} Sen kazandın.\n\u200bAma kimseye söyleme lütfen. Hele ${root}'a asla yoksa dilinden düşmem vallaha`)

                                                                const messages = await interaction.message.channel.messages.fetch({ limit: 50 });
                                                                interaction.message.channel.bulkDelete(messages);
                                                                
                                                                let gameend1;
                                                                function gameends1 () {
                                                                    if (utoplam3 == 21) {
                                                                        gameend1 = interaction.channel.send({embeds: [blackjack1, blackjack]})
                                                                        return collector.stop()
                                                                    }else if (utoplam3 > 21) {
                                                                        gameend1 = interaction.channel.send({embeds: [blackjack1, lose]})
                                                                        return collector.stop()
                                                                    } else {
                                                                        gameend1 = interaction.channel.send({embeds: [secondCards], components: [preference]})
                                                                    }
                                                                }
                                                            /********************************************************* Page4 **********************************************************/
                                                                gameends1()
                                                                gameend1.then(() => {
                                                                    const filter = (interaction) => interaction.isButton() && interaction.customId.startsWith("bj_");
                                                                    const collector = message.channel.createMessageComponentCollector({ filter, time: 30000 })
            
                                                                    collector.on('collect', async (interaction) => {
                                                                        if (interaction.customId === "bj_cek2") {
                                                                            const secondCards = new EmbedBuilder()
                                                                            .setColor("Green")
                                                                            .addFields(
                                                                                {name: "\u200b", value:"\n"},
                                                                                {name: "**Senin Kartların**", value: "\n"},
                                                                                {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                {name: "kart3", value: `${ucard3}`, inline: true},
                                                                                {name: "kart4", value: `${ucard4}`, inline: true},
                                                                                {name: "kart5", value: `${ucard5}`, inline: true},
                                                                                {name: "Toplam:", value:`${utoplam4}`},
                                                                                {name: "\u200b", value:"\n"},
                                                                                {name: "**Benim Kartlarım**", value: "\n"},
                                                                                {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                {name: "Kart2", value: `Kapalı Kart`, inline: true},
                                                                                {name: "\u200b", value:"\n"},
                                                                            )
                                                                            const preference = new ActionRowBuilder()
                                                                            .addComponents(
                                                                                new ButtonBuilder()
                                                                                    .setCustomId("bj_cek3")
                                                                                    .setLabel("Çek")
                                                                                    .setStyle("Primary"),
                                                                                new ButtonBuilder()
                                                                                    .setCustomId("bj_kal3")
                                                                                    .setLabel("Kal")
                                                                                    .setStyle("Success")
                                                                            )
                                                                            const blackjack1 = new EmbedBuilder()
                                                                                    .setColor("Green")
                                                                                    .addFields(
                                                                                        {name: "\u200b", value:"\n"},
                                                                                        {name: "**Senin Kartların**", value: "\n"},
                                                                                        {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                        {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                        {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                                        {name: "Kart4", value: `${ucard4}`, inline: true},
                                                                                        {name: "Kart5", value: `${ucard5}`, inline: true},
                                                                                        {name: "Toplam:", value:`${utoplam4}`},
                                                                                        {name: "\u200b", value:"\n"},
                                                                                        {name: "**Benim Kartlarım**", value: "\n"},
                                                                                        {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                        {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                                        {name: "\u200b", value:"\n"},
                                                                                    )
                                                                            const lose = new EmbedBuilder()
                                                                                    .setColor("Red")
                                                                                    .setTitle("Ben kazandım")
                                                                                    .setDescription("Üzülme kimseye söylemeyeceğim!")
                                                                            const blackjack = new EmbedBuilder()
                                                                                    .setColor("Blue")
                                                                                    .setTitle(`BLACKJACK`)
                                                                                    .setDescription(`**Tebrikler** ${message.author} Sen kazandın.\n\u200bAma kimseye söyleme lütfen. Hele ${root}'a asla yoksa dilinden düşmem vallaha`)
            
                                                                            const messages = await interaction.message.channel.messages.fetch({ limit: 50 });
                                                                            interaction.message.channel.bulkDelete(messages);
                                                                            
                                                                            let gameend1;
                                                                            function gameends1 () {
                                                                                if (utoplam4 == 21) {
                                                                                    gameend1 = interaction.channel.send({embeds: [blackjack1, blackjack]})
                                                                                    return collector.stop()
                                                                                }else if (utoplam4 > 21) {
                                                                                    gameend1 = interaction.channel.send({embeds: [blackjack1, lose]})
                                                                                    return collector.stop()
                                                                                } else {
                                                                                    gameend1 = interaction.channel.send({embeds: [secondCards], components: [preference]})
                                                                                }
                                                                            }
                                                                            gameends1()
                                                                            gameend1.then(() => {
                                                                                const filter = (interaction) => interaction.isButton() && interaction.customId.startsWith("bj_");
                                                                                const collector = message.channel.createMessageComponentCollector({ filter, time: 30000 })
                        
                                                                                collector.on('collect', async (interaction) => {
                                                                                    if (interaction.customId === "bj_cek3") {
                                                                                        const secondCards = new EmbedBuilder()
                                                                                        .setColor("Green")
                                                                                        .addFields(
                                                                                            {name: "\u200b", value:"\n"},
                                                                                            {name: "**Senin Kartların**", value: "\n"},
                                                                                            {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                            {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                            {name: "kart3", value: `${ucard3}`, inline: true},
                                                                                            {name: "kart4", value: `${ucard4}`, inline: true},
                                                                                            {name: "kart5", value: `${ucard5}`, inline: true},
                                                                                            {name: "kart6", value: `${ucard6}`, inline: true},
                                                                                            {name: "Toplam:", value:`${utoplam5}`},
                                                                                            {name: "\u200b", value:"\n"},
                                                                                            {name: "**Benim Kartlarım**", value: "\n"},
                                                                                            {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                            {name: "Kart2", value: `Kapalı Kart`, inline: true},
                                                                                            {name: "\u200b", value:"\n"},
                                                                                        )
                                                                                        const blackjack1 = new EmbedBuilder()
                                                                                                .setColor("Green")
                                                                                                .addFields(
                                                                                                    {name: "\u200b", value:"\n"},
                                                                                                    {name: "**Senin Kartların**", value: "\n"},
                                                                                                    {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                                    {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                                    {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                                                    {name: "Kart4", value: `${ucard4}`, inline: true},
                                                                                                    {name: "Kart5", value: `${ucard5}`, inline: true},
                                                                                                    {name: "Kart6", value: `${ucard6}`, inline: true},
                                                                                                    {name: "Toplam:", value:`${utoplam5}`},
                                                                                                    {name: "\u200b", value:"\n"},
                                                                                                    {name: "**Benim Kartlarım**", value: "\n"},
                                                                                                    {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                                    {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                                                    {name: "\u200b", value:"\n"},
                                                                                                )
                                                                                        const lose = new EmbedBuilder()
                                                                                                .setColor("Red")
                                                                                                .setTitle("Ben kazandım")
                                                                                                .setDescription("Üzülme kimseye söylemeyeceğim!")
                                                                                        const blackjack = new EmbedBuilder()
                                                                                                .setColor("Blue")
                                                                                                .setTitle(`BLACKJACK`)
                                                                                                .setDescription(`**Tebrikler** ${message.author} Sen kazandın.\n\u200bAma kimseye söyleme lütfen. Hele ${root}'a asla yoksa dilinden düşmem vallaha`)
                        
                                                                                        const messages = await interaction.message.channel.messages.fetch({ limit: 50 });
                                                                                        interaction.message.channel.bulkDelete(messages);
                                                                                        
                                                                                        let gameend1;
                                                                                        function gameends1 () {
                                                                                            if (utoplam5 == 21) {
                                                                                                gameend1 = interaction.channel.send({embeds: [blackjack1, blackjack]})
                                                                                                return collector.stop()
                                                                                            }else if (utoplam5 > 21) {
                                                                                                gameend1 = interaction.channel.send({embeds: [blackjack1, lose]})
                                                                                                return collector.stop()
                                                                                            } else {
                                                                                                gameend1 = interaction.channel.send({embeds: [secondCards], components: [preference]})
                                                                                            }
                                                                                        }
                                                                                        gameends1()
                                                                                    } else if (interaction.customId == "bj_kal3") {
                                                                                        const stay = new EmbedBuilder()
                                                                                        .setColor("Blue")
                                                                                        .addFields(
                                                                                            {name: "\u200b", value:"\n"},
                                                                                            {name: "**Senin Kartların**", value: "\n"},
                                                                                            {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                            {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                            {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                                            {name: "Kart4", value: `${ucard4}`, inline: true},
                                                                                            {name: "Kart5", value: `${ucard5}`, inline: true},
                                                                                            {name: "Toplam:", value:`${utoplam3}`},
                                                                                            {name: "\u200b", value:"\n"},
                                                                                            {name: "**Benim Kartlarım**", value: "\n"},
                                                                                            {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                            {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                                            {name: "Toplam:", value:`${btoplam1}`},
                                                                                            {name: "\u200b", value:"\n"},
                                                                                        )
                        
                                                                                    const iwin = new EmbedBuilder()
                                                                                        .setColor("Red")
                                                                                        .setTitle("BEN KAZANDIM")
                                                                                        .setDescription("\n\u200bBunun için üzülme sonuçta ben bir botum ve amacım seni eğlendirmek.\n\u200bTekrar denemeye var mısın?\n\u200b")
                        
                                                                                    const uwin = new EmbedBuilder()
                                                                                        .setColor("Green")
                                                                                        .setTitle("TEBRİKLER SEN KAZANDIN")
                                                                                        .setDescription(`Beni yendiğini istediğine anlatabilirsin ama lütfen ${root}'a söyleme yoksa 40 yıl dilinden düşemem.\n\u200bTekrar oynamaya ne dersin?`)
                        
                                                                                        if(21 >= btoplam1 && btoplam1 >= 17) {
                                                                                            if (btoplam1 > utoplam4) {
                                                                                                console.log("girdim")
                                                                                                return interaction.channel.send({embeds: [stay, iwin]})
                                                                                                
                                                                                            } else if (btoplam1 < utoplam4) {
                                                                                                console.log("girdim")
                                                                                                return interaction.channel.send({embeds: [stay, uwin]})
                                                                                            }
                                                                                        } else {
                                                                                            if (btoplam2 >= 17) {
                                                                                                const less = new EmbedBuilder()
                                                                                                .setColor("Green")
                                                                                                .addFields(
                                                                                                    {name: "\u200b", value:"\n"},
                                                                                                    {name: "**Senin Kartların**", value: "\n"},
                                                                                                    {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                                    {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                                    {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                                                    {name: "Kart4", value: `${ucard4}`, inline: true},
                                                                                                    {name: "Kart5", value: `${ucard5}`, inline: true},
                                                                                                    {name: "Toplam:", value:`${utoplam4}`},
                                                                                                    {name: "\u200b", value:"\n"},
                                                                                                    {name: "**Benim Kartlarım**", value: "\n"},
                                                                                                    {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                                    {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                                                    {name: "Kart3", value: `${bcard3}`, inline: true},
                                                                                                    {name: "Toplam:", value:`${btoplam2}`},
                                                                                                    {name: "\u200b", value:"\n"},
                                                                                                )
                                                                                                if (btoplam2 > utoplam4) {
                                                                                                    return interaction.channel.send({embeds: [less, iwin]})
                                                                                                } else if (btoplam2 < utoplam4) {
                                                                                                    return interaction.channel.send({embeds: [less, uwin]})
                                                                                                }
                                                                                            } else {
                                                                                                if (btoplam3 >= 17) {
                                                                                                    const less = new EmbedBuilder()
                                                                                                    .setColor("Green")
                                                                                                    .addFields(
                                                                                                        {name: "\u200b", value:"\n"},
                                                                                                        {name: "**Senin Kartların**", value: "\n"},
                                                                                                        {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                                        {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                                        {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                                                        {name: "Kart4", value: `${ucard4}`, inline: true},
                                                                                                        {name: "Kart5", value: `${ucard5}`, inline: true},
                                                                                                        {name: "Toplam:", value:`${utoplam4}`},
                                                                                                        {name: "\u200b", value:"\n"},
                                                                                                        {name: "**Benim Kartlarım**", value: "\n"},
                                                                                                        {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                                        {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                                                        {name: "Kart3", value: `${bcard3}`, inline: true},
                                                                                                        {name: "Kart4", value: `${bcard4}`, inline: true},
                                                                                                        {name: "Toplam:", value:`${btoplam3}`},
                                                                                                        {name: "\u200b", value:"\n"},
                                                                                                    )
                                                                                                    if (btoplam3 > utoplam4) {
                                                                                                        return interaction.channel.send({embeds: [less, iwin]})
                                                                                                    } else if (btoplam3 < utoplam4) {
                                                                                                        return interaction.channel.send({embeds: [less, uwin]})
                                                                                                }
                                                                                                } else {
                                                                                                    if(btoplam4 >= 17) {
                                                                                                        const less = new EmbedBuilder()
                                                                                                        .setColor("Green")
                                                                                                        .addFields(
                                                                                                            {name: "\u200b", value:"\n"},
                                                                                                            {name: "**Senin Kartların**", value: "\n"},
                                                                                                            {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                                            {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                                            {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                                                            {name: "Kart4", value: `${ucard4}`, inline: true},
                                                                                                            {name: "Kart5", value: `${ucard5}`, inline: true},
                                                                                                            {name: "Toplam:", value:`${utoplam4}`},
                                                                                                            {name: "\u200b", value:"\n"},
                                                                                                            {name: "**Benim Kartlarım**", value: "\n"},
                                                                                                            {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                                            {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                                                            {name: "Kart3", value: `${bcard3}`, inline: true},
                                                                                                            {name: "Kart4", value: `${bcard4}`, inline: true},
                                                                                                            {name: "Kart5", value: `${bcard5}`, inline: true},
                                                                                                            {name: "Toplam:", value:`${btoplam4}`},
                                                                                                            {name: "\u200b", value:"\n"},
                                                                                                        )
                                                                                                        if (btoplam4 > utoplam4) {
                                                                                                            return interaction.channel.send({embeds: [less, iwin]})
                                                                                                        } else if (btoplam4 < utoplam4) {
                                                                                                            return interaction.channel.send({embeds: [less, uwin]})
                                                                                                    }
                                                                                                    } else {
                                                                                                        if(btoplam5 >= 17) {
                                                                                                            const less = new EmbedBuilder()
                                                                                                            .setColor("Green")
                                                                                                            .addFields(
                                                                                                                {name: "\u200b", value:"\n"},
                                                                                                                {name: "**Senin Kartların**", value: "\n"},
                                                                                                                {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                                                {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                                                {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                                                                {name: "Kart4", value: `${ucard4}`, inline: true},
                                                                                                                {name: "Kart5", value: `${ucard5}`, inline: true},
                                                                                                                {name: "Toplam:", value:`${utoplam4}`},
                                                                                                                {name: "\u200b", value:"\n"},
                                                                                                                {name: "**Benim Kartlarım**", value: "\n"},
                                                                                                                {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                                                {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                                                                {name: "Kart3", value: `${bcard3}`, inline: true},
                                                                                                                {name: "Kart4", value: `${bcard4}`, inline: true},
                                                                                                                {name: "Kart5", value: `${bcard5}`, inline: true},
                                                                                                                {name: "Kart6", value: `${bcard6}`, inline: true},
                                                                                                                {name: "Toplam:", value:`${btoplam5}`},
                                                                                                                {name: "\u200b", value:"\n"},
                                                                                                            )
                                                                                                            if (btoplam5 > utoplam4) {
                                                                                                                return interaction.channel.send({embeds: [less, iwin]})
                                                                                                            } else if (btoplam5 < utoplam4) {
                                                                                                                return interaction.channel.send({embeds: [less, uwin]})
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                }
                                                                            
                                                                    }
                                                                                    
                                                                                })
                                                                                collector.on('end', () => {
                                                                                    if (!ck3ButtonClicked) {
                                                                                        ck3ButtonClicked = true
                                                                                    }
                                                                                })
                                                                            })
                                                                        } else if (interaction.customId == "bj_kal2") {
                                                                            const stay = new EmbedBuilder()
                                                                            .setColor("Blue")
                                                                            .addFields(
                                                                                {name: "\u200b", value:"\n"},
                                                                                {name: "**Senin Kartların**", value: "\n"},
                                                                                {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                                {name: "Kart3", value: `${ucard4}`, inline: true},
                                                                                {name: "Toplam:", value:`${utoplam3}`},
                                                                                {name: "\u200b", value:"\n"},
                                                                                {name: "**Benim Kartlarım**", value: "\n"},
                                                                                {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                                {name: "Toplam:", value:`${btoplam1}`},
                                                                                {name: "\u200b", value:"\n"},
                                                                            )
            
                                                                        const iwin = new EmbedBuilder()
                                                                            .setColor("Red")
                                                                            .setTitle("BEN KAZANDIM")
                                                                            .setDescription("\n\u200bBunun için üzülme sonuçta ben bir botum ve amacım seni eğlendirmek.\n\u200bTekrar denemeye var mısın?\n\u200b")
            
                                                                        const uwin = new EmbedBuilder()
                                                                            .setColor("Green")
                                                                            .setTitle("TEBRİKLER SEN KAZANDIN")
                                                                            .setDescription(`Beni yendiğini istediğine anlatabilirsin ama lütfen ${root}'a söyleme yoksa 40 yıl dilinden düşemem.\n\u200bTekrar oynamaya ne dersin?`)
            
                                                                            if(21 >= btoplam1 && btoplam1 >= 17) {
                                                                                if (btoplam1 > utoplam3) {                                                                                    return interaction.channel.send({embeds: [stay, iwin]})
                                                                                    
                                                                                } else if (btoplam1 < utoplam3) {
                                                                                    return interaction.channel.send({embeds: [stay, uwin]})
                                                                                }
                                                                            } else {
                                                                                if (btoplam2 >= 17) {
                                                                                    const less = new EmbedBuilder()
                                                                                    .setColor("Green")
                                                                                    .addFields(
                                                                                        {name: "\u200b", value:"\n"},
                                                                                        {name: "**Senin Kartların**", value: "\n"},
                                                                                        {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                        {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                        {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                                        {name: "Kart4", value: `${ucard4}`, inline: true},
                                                                                        {name: "Toplam:", value:`${utoplam3}`},
                                                                                        {name: "\u200b", value:"\n"},
                                                                                        {name: "**Benim Kartlarım**", value: "\n"},
                                                                                        {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                        {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                                        {name: "Kart3", value: `${bcard3}`, inline: true},
                                                                                        {name: "Toplam:", value:`${btoplam2}`},
                                                                                        {name: "\u200b", value:"\n"},
                                                                                    )
                                                                                    if (btoplam2 > utoplam3) {
                                                                                        return interaction.channel.send({embeds: [less, iwin]})
                                                                                    } else if (btoplam2 < utoplam3) {
                                                                                        return interaction.channel.send({embeds: [less, uwin]})
                                                                                    }
                                                                                } else {
                                                                                    if (btoplam3 >= 17) {
                                                                                        const less = new EmbedBuilder()
                                                                                        .setColor("Green")
                                                                                        .addFields(
                                                                                            {name: "\u200b", value:"\n"},
                                                                                            {name: "**Senin Kartların**", value: "\n"},
                                                                                            {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                            {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                            {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                                            {name: "Kart4", value: `${ucard4}`, inline: true},
                                                                                            {name: "Toplam:", value:`${utoplam3}`},
                                                                                            {name: "\u200b", value:"\n"},
                                                                                            {name: "**Benim Kartlarım**", value: "\n"},
                                                                                            {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                            {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                                            {name: "Kart3", value: `${bcard3}`, inline: true},
                                                                                            {name: "Kart4", value: `${bcard4}`, inline: true},
                                                                                            {name: "Toplam:", value:`${btoplam3}`},
                                                                                            {name: "\u200b", value:"\n"},
                                                                                        )
                                                                                        if (btoplam3 > utoplam3) {
                                                                                            return interaction.channel.send({embeds: [less, iwin]})
                                                                                        } else if (btoplam3 < utoplam3) {
                                                                                            return interaction.channel.send({embeds: [less, uwin]})
                                                                                    }
                                                                                    } else {
                                                                                        if(btoplam4 >= 17) {
                                                                                            const less = new EmbedBuilder()
                                                                                            .setColor("Green")
                                                                                            .addFields(
                                                                                                {name: "\u200b", value:"\n"},
                                                                                                {name: "**Senin Kartların**", value: "\n"},
                                                                                                {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                                {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                                {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                                                {name: "Kart4", value: `${ucard4}`, inline: true},
                                                                                                {name: "Toplam:", value:`${utoplam3}`},
                                                                                                {name: "\u200b", value:"\n"},
                                                                                                {name: "**Benim Kartlarım**", value: "\n"},
                                                                                                {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                                {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                                                {name: "Kart3", value: `${bcard3}`, inline: true},
                                                                                                {name: "Kart4", value: `${bcard4}`, inline: true},
                                                                                                {name: "Kart5", value: `${bcard5}`, inline: true},
                                                                                                {name: "Toplam:", value:`${btoplam4}`},
                                                                                                {name: "\u200b", value:"\n"},
                                                                                            )
                                                                                            if (btoplam4 > utoplam3) {
                                                                                                return interaction.channel.send({embeds: [less, iwin]})
                                                                                            } else if (btoplam4 < utoplam3) {
                                                                                                return interaction.channel.send({embeds: [less, uwin]})
                                                                                        }
                                                                                        } else {
                                                                                            if(btoplam5 >= 17) {
                                                                                                const less = new EmbedBuilder()
                                                                                                .setColor("Green")
                                                                                                .addFields(
                                                                                                    {name: "\u200b", value:"\n"},
                                                                                                    {name: "**Senin Kartların**", value: "\n"},
                                                                                                    {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                                    {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                                    {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                                                    {name: "Kart4", value: `${ucard4}`, inline: true},
                                                                                                    {name: "Toplam:", value:`${utoplam3}`},
                                                                                                    {name: "\u200b", value:"\n"},
                                                                                                    {name: "**Benim Kartlarım**", value: "\n"},
                                                                                                    {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                                    {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                                                    {name: "Kart3", value: `${bcard3}`, inline: true},
                                                                                                    {name: "Kart4", value: `${bcard4}`, inline: true},
                                                                                                    {name: "Kart5", value: `${bcard5}`, inline: true},
                                                                                                    {name: "Kart6", value: `${bcard6}`, inline: true},
                                                                                                    {name: "Toplam:", value:`${btoplam5}`},
                                                                                                    {name: "\u200b", value:"\n"},
                                                                                                )
                                                                                                if (btoplam5 > utoplam3) {
                                                                                                    return interaction.channel.send({embeds: [less, iwin]})
                                                                                                } else if (btoplam5 < utoplam3) {
                                                                                                    return interaction.channel.send({embeds: [less, uwin]})
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                    }
                                                                
                                                        }
                                                                        
                                                                    })
                                                                    collector.on('end', () => {
                                                                        if (!ck3ButtonClicked) {
                                                                            ck3ButtonClicked = true
                                                                        }
                                                                    })
                                                                })
                                                            } else if (interaction.customId == "bj_kal1") {
                                                                const stay = new EmbedBuilder()
                                                                .setColor("Blue")
                                                                .addFields(
                                                                    {name: "\u200b", value:"\n"},
                                                                    {name: "**Senin Kartların**", value: "\n"},
                                                                    {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                    {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                    {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                    {name: "Toplam:", value:`${utoplam2}`},
                                                                    {name: "\u200b", value:"\n"},
                                                                    {name: "**Benim Kartlarım**", value: "\n"},
                                                                    {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                    {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                    {name: "Toplam:", value:`${btoplam1}`},
                                                                    {name: "\u200b", value:"\n"},
                                                                )

                                                            const iwin = new EmbedBuilder()
                                                                .setColor("Red")
                                                                .setTitle("BEN KAZANDIM")
                                                                .setDescription("\n\u200bBunun için üzülme sonuçta ben bir botum ve amacım seni eğlendirmek.\n\u200bTekrar denemeye var mısın?\n\u200b")

                                                            const uwin = new EmbedBuilder()
                                                                .setColor("Green")
                                                                .setTitle("TEBRİKLER SEN KAZANDIN")
                                                                .setDescription(`Beni yendiğini istediğine anlatabilirsin ama lütfen ${root}'a söyleme yoksa 40 yıl dilinden düşemem.\n\u200bTekrar oynamaya ne dersin?`)

                                                                if(21 >= btoplam1 && btoplam1 >= 17) {
                                                                    if (btoplam1 > utoplam2) {
                                                                        return interaction.channel.send({embeds: [stay, iwin]})
                                                                        
                                                                    } else if (btoplam1 < utoplam2) {
                                                                        return interaction.channel.send({embeds: [stay, uwin]})
                                                                    }
                                                                } else {
                                                                    if (btoplam2 >= 17) {
                                                                        const less = new EmbedBuilder()
                                                                        .setColor("Green")
                                                                        .addFields(
                                                                            {name: "\u200b", value:"\n"},
                                                                            {name: "**Senin Kartların**", value: "\n"},
                                                                            {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                            {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                            {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                            {name: "Toplam:", value:`${utoplam2}`},
                                                                            {name: "\u200b", value:"\n"},
                                                                            {name: "**Benim Kartlarım**", value: "\n"},
                                                                            {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                            {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                            {name: "Kart3", value: `${bcard3}`, inline: true},
                                                                            {name: "Toplam:", value:`${btoplam2}`},
                                                                            {name: "\u200b", value:"\n"},
                                                                        )
                                                                        if (btoplam2 > utoplam2) {
                                                                            return interaction.channel.send({embeds: [less, iwin]})
                                                                        } else if (btoplam2 < utoplam2) {
                                                                            return interaction.channel.send({embeds: [less, uwin]})
                                                                        }
                                                                    } else {
                                                                        if (btoplam3 >= 17) {
                                                                            const less = new EmbedBuilder()
                                                                            .setColor("Green")
                                                                            .addFields(
                                                                                {name: "\u200b", value:"\n"},
                                                                                {name: "**Senin Kartların**", value: "\n"},
                                                                                {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                                {name: "Toplam:", value:`${utoplam2}`},
                                                                                {name: "\u200b", value:"\n"},
                                                                                {name: "**Benim Kartlarım**", value: "\n"},
                                                                                {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                                {name: "Kart3", value: `${bcard3}`, inline: true},
                                                                                {name: "Kart4", value: `${bcard4}`, inline: true},
                                                                                {name: "Toplam:", value:`${btoplam3}`},
                                                                                {name: "\u200b", value:"\n"},
                                                                            )
                                                                            if (btoplam3 > utoplam2) {
                                                                                return interaction.channel.send({embeds: [less, iwin]})
                                                                            } else if (btoplam3 < utoplam2) {
                                                                                return interaction.channel.send({embeds: [less, uwin]})
                                                                        }
                                                                        } else {
                                                                            if(btoplam4 >= 17) {
                                                                                const less = new EmbedBuilder()
                                                                                .setColor("Green")
                                                                                .addFields(
                                                                                    {name: "\u200b", value:"\n"},
                                                                                    {name: "**Senin Kartların**", value: "\n"},
                                                                                    {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                    {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                    {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                                    {name: "Toplam:", value:`${utoplam2}`},
                                                                                    {name: "\u200b", value:"\n"},
                                                                                    {name: "**Benim Kartlarım**", value: "\n"},
                                                                                    {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                    {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                                    {name: "Kart3", value: `${bcard3}`, inline: true},
                                                                                    {name: "Kart4", value: `${bcard4}`, inline: true},
                                                                                    {name: "Kart5", value: `${bcard5}`, inline: true},
                                                                                    {name: "Toplam:", value:`${btoplam4}`},
                                                                                    {name: "\u200b", value:"\n"},
                                                                                )
                                                                                if (btoplam4 > utoplam2) {
                                                                                    return interaction.channel.send({embeds: [less, iwin]})
                                                                                } else if (btoplam4 < utoplam2) {
                                                                                    return interaction.channel.send({embeds: [less, uwin]})
                                                                            }
                                                                            } else {
                                                                                if(btoplam5 >= 17) {
                                                                                    const less = new EmbedBuilder()
                                                                                    .setColor("Green")
                                                                                    .addFields(
                                                                                        {name: "\u200b", value:"\n"},
                                                                                        {name: "**Senin Kartların**", value: "\n"},
                                                                                        {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                        {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                        {name: "Kart3", value: `${ucard3}`, inline: true},
                                                                                        {name: "Toplam:", value:`${utoplam2}`},
                                                                                        {name: "\u200b", value:"\n"},
                                                                                        {name: "**Benim Kartlarım**", value: "\n"},
                                                                                        {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                        {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                                        {name: "Kart3", value: `${bcard3}`, inline: true},
                                                                                        {name: "Kart4", value: `${bcard4}`, inline: true},
                                                                                        {name: "Kart5", value: `${bcard5}`, inline: true},
                                                                                        {name: "Kart6", value: `${bcard6}`, inline: true},
                                                                                        {name: "Toplam:", value:`${btoplam5}`},
                                                                                        {name: "\u200b", value:"\n"},
                                                                                    )
                                                                                    if (btoplam5 > utoplam2) {
                                                                                        return interaction.channel.send({embeds: [less, iwin]})
                                                                                    } else if (btoplam5 < utoplam2) {
                                                                                        return interaction.channel.send({embeds: [less, uwin]})
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                        }
                                                    
                                            }
                                                            
                                                        })
                                                        collector.on('end', () => {
                                                            if (!ck2ButtonClicked) {
                                                                ck2ButtonClicked = true
                                                            }
                                                        })
                                                    })

                                                } else if (interaction.customId === "bj_kal") {
                                                    const stay = new EmbedBuilder()
                                                        .setColor("Blue")
                                                        .addFields(
                                                            {name: "\u200b", value:"\n"},
                                                            {name: "**Senin Kartların**", value: "\n"},
                                                            {name: "Kart1", value: `${ucard1}`, inline: true},
                                                            {name: "Kart2", value: `${ucard2}`, inline: true},
                                                            {name: "Toplam:", value:`${utoplam1}`},
                                                            {name: "\u200b", value:"\n"},
                                                            {name: "**Benim Kartlarım**", value: "\n"},
                                                            {name: "Kart1", value: `${bcard1}`, inline: true},
                                                            {name: "Kart2", value: `${bcard2}`, inline: true},
                                                            {name: "Toplam:", value:`${btoplam1}`},
                                                            {name: "\u200b", value:"\n"},
                                                        )

                                                    const iwin = new EmbedBuilder()
                                                        .setColor("Red")
                                                        .setTitle("BEN KAZANDIM")
                                                        .setDescription("\n\u200bBunun için üzülme sonuçta ben bir botum ve amacım seni eğlendirmek.\n\u200bTekrar denemeye var mısın?\n\u200b")

                                                    const uwin = new EmbedBuilder()
                                                        .setColor("Green")
                                                        .setTitle("TEBRİKLER SEN KAZANDIN")
                                                        .setDescription(`Beni yendiğini istediğine anlatabilirsin ama lütfen ${root}'a söyleme yoksa 40 yıl dilinden düşemem.\n\u200bTekrar oynamaya ne dersin?`)

                                                        if(21 >= btoplam1 && btoplam1 >= 17) {
                                                            if (btoplam1 > utoplam1) {
                                                                console.log("girdim")
                                                                return interaction.channel.send({embeds: [stay, iwin]})
                                                                
                                                            } else if (btoplam1 < utoplam1) {
                                                                console.log("girdim")
                                                                return interaction.channel.send({embeds: [stay, uwin]})
                                                            }
                                                        } else {
                                                            if (btoplam2 >= 17) {
                                                                const less = new EmbedBuilder()
                                                                .setColor("Green")
                                                                .addFields(
                                                                    {name: "\u200b", value:"\n"},
                                                                    {name: "**Senin Kartların**", value: "\n"},
                                                                    {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                    {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                    {name: "Toplam:", value:`${utoplam1}`},
                                                                    {name: "\u200b", value:"\n"},
                                                                    {name: "**Benim Kartlarım**", value: "\n"},
                                                                    {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                    {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                    {name: "Kart3", value: `${bcard3}`, inline: true},
                                                                    {name: "Toplam:", value:`${btoplam2}`},
                                                                    {name: "\u200b", value:"\n"},
                                                                )
                                                                if (btoplam2 > utoplam1) {
                                                                    return interaction.channel.send({embeds: [less, iwin]})
                                                                } else if (btoplam2 < utoplam1) {
                                                                    return interaction.channel.send({embeds: [less, uwin]})
                                                                }
                                                            } else {
                                                                if (btoplam3 >= 17) {
                                                                    const less = new EmbedBuilder()
                                                                    .setColor("Green")
                                                                    .addFields(
                                                                        {name: "\u200b", value:"\n"},
                                                                        {name: "**Senin Kartların**", value: "\n"},
                                                                        {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                        {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                        {name: "Toplam:", value:`${utoplam1}`},
                                                                        {name: "\u200b", value:"\n"},
                                                                        {name: "**Benim Kartlarım**", value: "\n"},
                                                                        {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                        {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                        {name: "Kart3", value: `${bcard3}`, inline: true},
                                                                        {name: "Kart4", value: `${bcard4}`, inline: true},
                                                                        {name: "Toplam:", value:`${btoplam3}`},
                                                                        {name: "\u200b", value:"\n"},
                                                                    )
                                                                    if (btoplam3 > utoplam1) {
                                                                        return interaction.channel.send({embeds: [less, iwin]})
                                                                    } else if (btoplam3 < utoplam1) {
                                                                        return interaction.channel.send({embeds: [less, uwin]})
                                                                }
                                                                } else {
                                                                    if(btoplam4 >= 17) {
                                                                        const less = new EmbedBuilder()
                                                                        .setColor("Green")
                                                                        .addFields(
                                                                            {name: "\u200b", value:"\n"},
                                                                            {name: "**Senin Kartların**", value: "\n"},
                                                                            {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                            {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                            {name: "Toplam:", value:`${utoplam1}`},
                                                                            {name: "\u200b", value:"\n"},
                                                                            {name: "**Benim Kartlarım**", value: "\n"},
                                                                            {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                            {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                            {name: "Kart3", value: `${bcard3}`, inline: true},
                                                                            {name: "Kart4", value: `${bcard4}`, inline: true},
                                                                            {name: "Kart5", value: `${bcard5}`, inline: true},
                                                                            {name: "Toplam:", value:`${btoplam4}`},
                                                                            {name: "\u200b", value:"\n"},
                                                                        )
                                                                        if (btoplam4 > utoplam1) {
                                                                            return interaction.channel.send({embeds: [less, iwin]})
                                                                        } else if (btoplam4 < utoplam1) {
                                                                            return interaction.channel.send({embeds: [less, uwin]})
                                                                    }
                                                                    } else {
                                                                        if(btoplam5 >= 17) {
                                                                            const less = new EmbedBuilder()
                                                                            .setColor("Green")
                                                                            .addFields(
                                                                                {name: "\u200b", value:"\n"},
                                                                                {name: "**Senin Kartların**", value: "\n"},
                                                                                {name: "Kart1", value: `${ucard1}`, inline: true},
                                                                                {name: "Kart2", value: `${ucard2}`, inline: true},
                                                                                {name: "Toplam:", value:`${utoplam1}`},
                                                                                {name: "\u200b", value:"\n"},
                                                                                {name: "**Benim Kartlarım**", value: "\n"},
                                                                                {name: "Kart1", value: `${bcard1}`, inline: true},
                                                                                {name: "Kart2", value: `${bcard2}`, inline: true},
                                                                                {name: "Kart3", value: `${bcard3}`, inline: true},
                                                                                {name: "Kart4", value: `${bcard4}`, inline: true},
                                                                                {name: "Kart5", value: `${bcard5}`, inline: true},
                                                                                {name: "Kart6", value: `${bcard6}`, inline: true},
                                                                                {name: "Toplam:", value:`${btoplam5}`},
                                                                                {name: "\u200b", value:"\n"},
                                                                            )
                                                                            if (btoplam5 > utoplam1) {
                                                                                return interaction.channel.send({embeds: [less, iwin]})
                                                                            } else if (btoplam5 < utoplam1) {
                                                                                return interaction.channel.send({embeds: [less, uwin]})
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                }
                                                
                                        }})
                                            collector.on('end', () => {
                                                // Actions to take when button click time expires
                                                if (!ck1ButtonClicked) {
                                                    ck1ButtonClicked = true;
                                                }
                                            });
                                    })},6000)

                                    // if no, the game is explained
                            } else if (interaction.customId === "bj_hayır") {
                                    
                                    const dontKnow = new EmbedBuilder()
                                        .setColor("Green")
                                        .setTitle("Dur Sana Anlatayım")
                                        .setDescription("Oyun ilk başladığında sana 2 adet açık şekilde kart vereceğim (Bu kartları ikimiz de bileceğiz). Kendime de 2 adet kart alacağım ve sen bu kartlardan sadece 1 tanesini göreceksin. Daha sonra sana kart isteyip istemediğini soracağım. Cevabın çek ya da kal şeklinde olacak.")
                                        .addFields(
                                            {name:"\u200b", value:"\u200b"},
                                            {name:"Oyunun Kuralarına Gelecek Olursak", value:"\n"},
                                            {name:"1:", value:"Oyunda 21'e en yakın olan kazanır fakat 21'i geçersen kaybedersin yani 21'den küçük en yakın olan kazanır."},
                                            {name:"2:", value:"maksimum 4 kere kart çekebilirsin."},
                                            {name:"3:", value:"kartların sembolleri önemli değil önemli olan sayılar."},
                                            {name:"4:", value:"çek dediğinde sana bir kart daha veririm. kal dediğinde elindeki kartların değerleri toplamı ne ise ona göre değerlendiririm."},
                                            {name:"5:", value:"kal dediğinde 2. kartımı da açarım ve eğer değeri 17'den küçükse 17'yi geçene kadar kart çekerim, eğer değeri 17'den büyükse kart çekmem ve puanları karşılaştırırım."},
                                            {name:"\n", value:"[Daha detaylı anlatım için](https://www.youtube.com/watch?v=9bhDhbrcGKo)"},
                                            {name:"\u200b", value:"\u200b"}
                                        )
                                    message.channel.send({embeds: [dontKnow]})
                                }
                            }
                    });
            
                    collector.on('end', () => {
                        // Actions to take when button click time expires
                        if (!ckButtonClicked) {
                            ckButtonClicked = true;
                        }
                    });
                })},4000)

        }

    })

}