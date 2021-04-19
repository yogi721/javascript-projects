const statsDiv = document.getElementById("stats");
const typingDiv = document.getElementById("typing");
const startGameBtn = document.getElementById("start-game");

const paragraph = `look straight ahead. make sure your eyes look directly into your monitor the same way you would look at someone across the table from you.`;


const startGame = () => { }
const getText = (paragraph) => {
    let pg = paragraph.split('')
    return pg
}
const getWords = (paragraph) => {
    let pg = paragraph.split(' ')
    return pg
}

const getWordsWithoutSign = (paragraph) => {
    let pg = getWords(paragraph)
    pg.forEach((word, i) => {
        pg[i] = word.replace(/[^a-zA-Z ]/g, "")
    });

    return pg
}

const isTextEnd = () => { }

console.log(getWordsWithoutSign(paragraph))
