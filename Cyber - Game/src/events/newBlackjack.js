export default client => {

        // Kart destesi
    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    // Oyuncu ve bot elindeki kartlar
    let playerCards = [];
    let botCards = [];

    // Oyun başlatma komutu
    client.on('message', message => {
    if (message.content === '!blackjack') {
        // Yeni bir oyuna başlamak için kartları karıştırıyoruz
        shuffle(cards);

        // İlk olarak oyuncu ve bot birer kart çekiyor
        playerCards.push(drawCard());
        botCards.push(drawCard());

        // İkinci kartları da dağıtıyoruz
        playerCards.push(drawCard());
        botCards.push(drawCard());

        // Oyuncuya kartlarını gösteriyoruz
        message.channel.send(`Kartlarınız: ${playerCards.join(', ')}`);

        // Botun elindeki kartları gösteriyoruz
        message.channel.send(`Botun kartı: ${botCards[0]}`);

        // Oyuncuya "Hit" veya "Stand" seçeneklerini sunuyoruz
        message.channel.send('Hit or Stand?');

        // Yeni bir oyuna başlamak için kartları sıfırlıyoruz
        playerCards = [];
        botCards = [];
    }
    });

    // Kartları karıştıran fonksiyon
    function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    }

    // Desteden kart çeken fonksiyon
    function drawCard() {
    return cards[Math.floor(Math.random() * cards.length)];
    }

}