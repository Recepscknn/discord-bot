import { SlashCommandBuilder } from "@discordjs/builders"

export default client => {
    
    data: new SlashCommandBuilder().setName("rps").setDescription("Rock Paper Scissors")

    // emojis
    let partyFace = ":partying_face:"
    let star = ":star_struck:"
    let hi = ":saluting_face:"
    let rock = ":rock:"
    let paper = ":scroll:"
    let scissors = ":scissors:"

    // answers

    let tas = `Taş`
    let kagıt = `Kağıt`
    let makas = `Makas`


    // messages

    let win = `${partyFace} Tebrikler! Sen Kazandın.`
    let lose = `${star} Üzgünüm. Ben Kazandım`
    let draw = `${hi} Berabere. Tekrar Deneyelim.`



    client.on("messageCreate", message => {
        if (message.content.toLowerCase() == "./taş") {
            
            // Random answer
            let answers = [tas, kagıt, makas]
            let answer = answers[Math.floor(Math.random()*answers.length)]
            
            // emoji by answer
            let emoji;

            if (answer == tas) {
                emoji = rock
            } else if (answer == kagıt) {
                emoji = paper
            } else if (answer == makas) {
                emoji = scissors
            }

            // message by answer
            let messages;

            if (answer == tas) {
                messages = draw
            } else if (answer == kagıt) {
                messages = lose
            } else if (answer == makas) {
                messages = win
            }

            message.reply(
                `${emoji} ${answer}\n${messages}`
            )
        } else if (message.content.toLowerCase() == "./kağıt") {

            // Random answer
            let answers = [tas, kagıt, makas]
            let answer = answers[Math.floor(Math.random()*answers.length)]

            let emoji;

            // emoji by answer
            if (answer == tas) {
                emoji = rock
            } else if (answer == kagıt) {
                emoji = paper
            } else if (answer == makas) {
                emoji = scissors
            }

            // message by answer
            let messages;

            if (answer == tas) {
                messages = win
            } else if (answer == kagıt) {
                messages = draw
            } else if (answer == makas) {
                messages = lose
            }

            message.reply(
                `${emoji} ${answer}\n${messages}`
            )
        } else if (message.content.toLowerCase() == "./makas") {

            // random answer
            let answers = [tas, kagıt, makas]
            let answer = answers[Math.floor(Math.random()*answers.length)]

            // emoji by answer
            let emoji;

            if (answer == tas) {
                emoji = rock
            } else if (answer == kagıt) {
                emoji = paper
            } else if (answer == makas) {
                emoji = scissors
            }

            // message by answer
            let messages;

            if (answer == tas) {
                messages = lose
            } else if (answer == kagıt) {
                messages = win
            } else if (answer == makas) {
                messages = draw
            }

            message.reply(
                `${emoji} ${answer}\n${messages}`
            )
        }
    })

}