// backgroundColors array

const backgroundColors = [
  'green',
  'Yellow',
  'Pink',
  'rgba(133,122,200)',
  'linear-gradient(315deg, #20bf55 0%, #01baef 74%)',
  '#f15025',
];

// variables for the HTML content

// getting the btn id from the index.html
const btn = document.getElementById('btn');
// the color texts
const colorText = document.querySelector('.color');

// adding a event listener to our btn id button
btn.addEventListener('click', function () {
  // I want to get a number between 0 - 6 with math.random
  const randomColorNumber = getRandomNumber();

  // Why am not getting a number am getting a decimal otr float point number to fix we use Math.floor()
  console.log(randomColorNumber);

  // making it where if the array index is 4 then the styles select is backgroundImage
  if (randomColorNumber == 4) {
    document.body.style.backgroundImage = backgroundColors[randomColorNumber];

    // display the color string text
    colorText.textContent = 'gradient(315deg, #20bf55 0%, #01baef 74%)';
  } else {
    // changing the body's background
    document.body.style.backgroundColor = backgroundColors[randomColorNumber];

    // displaying the color value
    colorText.textContent = backgroundColors[randomColorNumber];
  }
});

// create a random number function
function getRandomNumber() {
  // return from the function a random number
  return Math.random();

  // Why am not getting a number am getting a decimal otr float point number to fix we use Math.floor()
}
