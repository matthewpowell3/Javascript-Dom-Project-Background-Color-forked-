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
const color = document.getElementsByClassName('color');

// adding a event listener to our btn id button
btn.addEventListener('click', function () {
  // I want to get a number between 0 & 6 with math.random
  const randomColorNumber = 4;

  // making it where if the array index is 4 then the styles select is backgroundImage
  if (randomColorNumber == 4) {
    document.body.style.backgroundImage =
      'linear-gradient(315deg, #20bf55 0%, #01baef 74%)';
  }

  // changing the body's background
  document.body.style.backgroundColor = backgroundColors[randomColorNumber];
});
