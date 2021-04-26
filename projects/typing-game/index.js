const statsDiv = document.getElementById("stats");
const typingDiv = document.getElementById("typing");
const startGameBtn = document.getElementById("start-game");

const paragraphs = `look straight ahead. make sure your eyes look directly into your monitor the same way you would look at someone across the table from you.`;

const startGame = () => {
    startGameBtn.classList.add("hidden");
    typingDiv.innerHTML = "";
    statsDiv.innerHTML = "";

    const text = paragraphs;

    const characters = text.split("").map((char) => {
        const span = document.createElement("span");
        span.innerText = char;
        typingDiv.append(span);
        return span;
    });

    let cursorIndex = 0;
    let cursorCharacter = characters[cursorIndex];
    cursorCharacter.classList.add("cursor");

    let startTime = null;

    const keydown = ({ key }) => {
        if (!startTime) {
            startTime = new Date();
        }

        if (key === cursorCharacter.innerText) {
            cursorCharacter.classList.remove("cursor");
            cursorCharacter.classList.add("done");
            cursorCharacter = characters[++cursorIndex];
        }

        if (cursorIndex >= characters.length) {
            //game ended
            const endTime = new Date();
            const delta = endTime - startTime;
            const seconds = delta / 1000;
            const numberOfWords = text.split(" ").length;
            const wps = numberOfWords / seconds;
            const wpm = wps * 60.0;

            document.getElementById("stats").innerText = `wpm = ${parseInt(wpm)}`;
            document.removeEventListener("keydown", keydown);
            startGameBtn.classList.remove("hidden");
            return;
        }

        cursorCharacter.classList.add("cursor");
    };

    document.addEventListener("keydown", keydown);

}

const getCharFromText = () => {

}