// switch(expression){
//     case label_1:
//         statements_1
//         break;
//     case label_2:
//         statements_2
//         break;
//     default: 
//         statements_def
//         break;
// }


// switch (fruittype) {
//     case 'Oranges':
//         console.log('Oranges are $0.59 a pound. ');
//         break;
//     case 'Apples':
//         console.log('Apples are $0.32 a pound.');
//         break;
//     default:
//         console.log(`Sorry, we are out of ${fruittype}.`);
// }

let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

console.log('Today is: ' + day);