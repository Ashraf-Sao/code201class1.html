'use strict';

const userName = prompt('introduce your name please'); 
alert('Welcome to my guessing game ' + userName);
console.log(userName)


let student = prompt('Do I study at LTUC?'); 
//console.log('yes');
alert('correct answer is yes'); 
if(student === 'yes') {
  alert('that is correct ');
} else {
  alert('Please check you answers ');
}

let beginner = prompt('Do you think I am still a beginner?'); 
//console.log('yes');
alert('correct answer is yes'); 
if(beginner === 'yes') {
  alert('of course I am ');
} else {
  alert('change your answer please ' );
}

let chef = prompt('Was I a chef before'); 
//console.log('yes');
alert('correct answer is yes');
 if(chef === 'yes') {
  alert('and a very good chef');
} else {
  alert('you are mistaken, sorry ');

}
let language = prompt('Do I speak Spanish'); 
//console.log('yes');
alert('correct answer is yes'); 
if(language === 'yes') {
  alert('siiiiiii');
} else {
  alert('you know me so little ' + userName); 
}

let live = prompt('Do I live in Irbid'); 
//console.log('no');
alert('correct answer is no');
if(live === 'yes') {
  alert('check that answer again ' + userName);
} else {
  alert('yes I do ' + userName);
}


