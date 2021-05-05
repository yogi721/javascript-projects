const correctAnswers = ['B', 'B', 'B', 'B']
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault()

    let score = 0
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    // check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25
        }
    })


    scrollTo(0, 0) // same as window.scrollto()
    result.classList.remove('d-none')

    // Animate the score
    let output = 0
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`
        if (output === score) {
            clearInterval(timer)
        } else {
            output++
        }
    }, 20)
})


// window object (global object)
// console.log('Hello')     console is under global object the as writing window.console.log()
