'use strict';

const userName = prompt('introduce your name please'); 
alert('Welcome to my guessing game ' + userName);
console.log(userName)



let student = prompt('Do I study at LTUC?', 'Yes or NO').toLowerCase();
while (student !== 'yes' && student !== 'no') {
  student = prompt('acceptable answers are yes or no only' , 'Yes or No').toLowerCase()
//console.log('yes');
}
alert('correct answer is yes');

let beginner = prompt('Do you think I am still a beginner?', 'Yes or NO').toLowerCase();
while (beginner !== 'yes' && beginner !== 'no') {
  student = prompt('acceptable answers are yes or no only' , 'Yes or No').toLowerCase()
//console.log('yes');
}

alert('correct answer is yes');

let chef = prompt('Was I a chef before?', 'Yes or NO').toLowerCase();
while (chef !== 'yes' && chef !== 'no') {
  student = prompt('acceptable answers are yes or no only' , 'Yes or No').toLowerCase()
//console.log('yes');
}

alert('correct answer is yes');

let language = prompt('Do I speak Spanish?', 'Yes or NO').toLowerCase();
while (language !== 'yes' && language !== 'no') {
  student = prompt('acceptable answers are yes or no only' , 'Yes or No').toLowerCase()
//console.log('yes'); 
}

alert('correct answer is yes');

let live = prompt('Do I live in Irbid?', 'Yes or NO').toLowerCase();
while (live !== 'yes' && live !== 'no') {
  student = prompt('acceptable answers are yes or no only' , 'Yes or No').toLowerCase()
//console.log('no');
}

alert('correct answer is no');

