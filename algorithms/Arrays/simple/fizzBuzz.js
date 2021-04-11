// fizz buzz is a function that logs 

// My first solution

const fizzBuzz = (num) => {

    for (let i = 0; i <= num; i++) {
        let result = i;

        // if(i > 0 && i % 15 == 0) {result = "FizzBuzz";}
        if (i > 0 && i % 3 == 0 && i % 5 == 0) { result = "FizzBuzz"; }
        else if (i > 0 && i % 3 == 0) { result = "Fizz"; }
        else if (i > 0 && i % 5 == 0) { result = "Buzz"; }

        console.log(result);

    }
}

fizzBuzz(20)