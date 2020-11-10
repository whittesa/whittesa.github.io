// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// console.log(multiply(3,4))

// flip between two images of blum when you click the image
// you can also go between three (or more) images by using an else if (or multiple) statement
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/blum-leaf.JPG') {
      myImage.setAttribute('src','images/blum-book.JPG');
    } else {
      myImage.setAttribute('src','images/blum-leaf.JPG');
    }
}

// creating a personalized message and allowing the user to change their name
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// if username is empty, they'll be prompted to enter something (this will prevent empty values)
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Hi, ' + myName + '. Meet Blum!';
    }
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hi, ' + storedName + '. Meet Blum!';
}

myButton.onclick = function() {
    setUserName();
  }

