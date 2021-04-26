let startTime = 0;
let start = 0;
let end = 0;
let diff = 0;
let timerID = 0;

const chrono = () => {
    end = new Date()
    diff = end - start
    diff = new Date(diff)
    let msec = diff.getMilliseconds()
    let sec = diff.getSeconds()
    let min = diff.getMinutes()
    let hr = diff.getHours() - 1

    if (min < 10) min = "0" + min
    if (sec < 10) sec = "0" + sec
    if (msec < 10) msec = "00" + msec
    if (msec < 100) msec = "0" + msec


    document.getElementById("chronotime").innerHTML = `${hr}:${min}:${sec}:${msec} `
    timerID = setTimeout("chrono()", 10)
}

const chronoclicks = () => {
    document.chronoForm.startstop.value = "Stop!"
    document.chronoForm.startstop.onclick = chronoStop
    document.chronoForm.reset.onclick = chronoReset
}
const chronoStart = () => {
    chronoclicks()
    start = new Date()
    chrono()
}

const chronoContinue = () => {
    chronoclicks()
    start = new Date() - diff
    chrono()
}

const chronoReset = () => {
    document.getElementById("chronotime").innerHTML = "0:00:00:000"
    start = new Date()
}

const chronoStopReset = () => {
    document.getElementById("chronotime").innerHTML = "0:00:00:000"
    document.chronoForm.startstop.onclick = chronostart
}

const chronoStop = () => {
    document.chronoForm.startstop.value = "Start!"
    document.chronoForm.startstop.onclick = chronoContinue
    document.chronoForm.reset.onclick = chronoStopReset
    clearTimeout(timerID)
}