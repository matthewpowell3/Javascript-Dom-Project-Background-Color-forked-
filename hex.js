const hex = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

const colorSelector = document.getElementById('btn');
const colorText = document.querySelector('.color');

colorSelector.addEventListener('click', function () {
  let hexCode = '#';
  // use loop to loop there hexCode
  // looping there each hexcode
  for (let i = 0; i < 6; i++) {
    // adding hashtag to haxcode
    hexCode += hex[randomHexCode()];
  }

  colorText.textContent = hexCode;
  // copy to clipboard
  navigator.clipboard.writeText(hexCode);
  document.body.style.backgroundColor = hexCode;
});

function randomHexCode() {
  return Math.floor(Math.random() * hex.length);
}
