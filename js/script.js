//get all required elements
const body = document.querySelector('body');
const userNumber = document.querySelector('.user-number');
const computerNumber = document.querySelector('.computer-number');
const ImageSection = document.querySelector('.images');
const toggleImage = document.querySelector('.image-content');
const choiceButton = document.querySelectorAll('button');
const resetButton = document.querySelector('button.reset');
const parentDivForCounter = document.querySelectorAll('.title');
const parentDivForUserCounter = document.querySelector('.user');
const parentDivForComputerCounter = document.querySelector('.computer');

//rock, paper and scissors buttons each
const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('paper-button');
const scissorsButton = document.querySelector('scissors-button');

let count = 0;
const image = document.createElement('img');

//set counters to zero
userNumber.textContent = count;
computerNumber.textContent = count;

//create image reusable function
const createImage = (src, alt) => {
  // const image = document.createElement('img');
  image.src = src;
  image.alt = alt;
  return toggleImage.appendChild(image);
};

//check which button is clicked and show image
choiceButton.forEach((button) => {
  button.addEventListener('click', () => {
    toggleImage.setAttribute('class', 'image-content');
    if (button.name === 'rock') {
      createImage('images/rock.svg', 'Hand playing rock');
      toggleImage.parentNode.removeChild(image);
    }
  });
  button.addEventListener('click', () => {
    toggleImage.setAttribute('class', 'image-content');
    button.name === 'paper' &&
      createImage('images/paper.svg', 'Hand playing paper');
    toggleImage.parentNode.removeChild(image);
  });
  button.addEventListener('click', () => {
    toggleImage.setAttribute('class', 'image-content');
    button.name === 'scissors' &&
      createImage('images/scissors-straight.svg', 'Hand playing scissors');
    toggleImage.parentNode.removeChild(image);
  });
});

//reset counter & remove images
resetButton.addEventListener('click', () => {
  userNumber.textContent = 0;
  computerNumber.textContent = 0;
  toggleImage.setAttribute('class', 'remove-image');
});

// resetButton.addEventListener('click', () => {
//   pointsCounter.forEach((counter) => {
//     counter.textContent = 0;
//     toggleImage.setAttribute('class', 'remove-image');
//     // ImageSection.removeChild(toggleImage);
//   });
// });

// console.log(rockButton);

//calculate scores
const countPoints = (user, computer) => {
  if (
    (user === rockButton.name && computer === rockButton.name) ||
    (user === paperButton.name && computer === paperButton.name) ||
    (user === scissorsButton.name && computer === scissorsButton.name)
  ) {
    toggleImage.textContent = "It' a tie!";
  }
  if (user === rockButton.name && computer === paperButton.name) {
    computerNumber.textContent = count + 1;
  }
  if (user === rockButton.name && computer === scissorsButton.name) {
    userNumber.textContent = count + 1;
  }
  if (user === paperButton.name && computer === rockButton.name) {
    userNumber.textContent = count + 1;
  }
  if (user === paperButton.name && computer === scissorsButton.name) {
    computerNumber.textContent = count + 1;
  }
  if (user === scissorsButton.name && computer === rockButton.name) {
    computerNumber.textContent = count + 1;
  }
  if (user === scissorsButton.name && computer === paperButton.name) {
    userNumber.textContent = count + 1;
  }

  user > computer
    ? (toggleImage.textContent = 'User Wins!')
    : (toggleImage.textContent = 'Computer Wins!');
};

//rock paper scissors logic + increment points counter based on winner of each round
