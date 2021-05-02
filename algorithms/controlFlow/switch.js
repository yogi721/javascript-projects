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

switch (fruittype) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound. ');
        break;
    case 'Apples':
        console.log('Apples are $0.32 a pound.');
        break;
    default:
        console.log(`Sorry, we are out of ${fruittype}.`);
}