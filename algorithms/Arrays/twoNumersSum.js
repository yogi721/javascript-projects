
let numArray = [1, 2, 3, 4, 5, 6, 7, 8]

function twoSum(numbers) {
    const sets = [];

    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const a = numbers[i];
            const b = numbers[j];
            if (a + b === 10) {
                sets.push(`${a} + ${b}`);
            }
        }
    }
    return sets;
}

console.log(twoSum(numArray));