let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        const classesBtn = e.currentTarget.classList;

        if (classesBtn.contains('decrease')) count--;
        if (classesBtn.contains('increase')) count++;
        if (classesBtn.contains('reset')) count = 0;

        if (count > 0) value.style.color = "green";
        if (count < 0) value.style.color = "red";
        if (count === 0) value.style.color = "black";

        value.textContent = count;

    });
});