// solution 1

// function longestWord(str){
//     let words = str.plit(' ');
//     let maxLength = 0;

//     for(let i = 0; i < words.length; i++){
//         if(words[i].length > maxLength){
//             maxLength = words[i].length;
//         }
//     }
//     return maxLength;
// }


// solution 2

// function longestWord(str){
//     return str.split(' ').reduce((x, y) => {
//         return Math.max(x, y.length)
//     }, 0)
// }

// Solution 3 

function longestWord(str) {

    str = str.split(" ");

    if (str.length == 1) { return str[0].length; }

    if (str[0].length >= str[1].length) {
        str.splice(1, 1);
        return longestWord(str.join(" "));
    }

    if (str[0].length <= str[1].length) {
        return longestWord(str.slice(1, str.length).join(" "));
    }
}

// To be continued