const formCalculator = document.querySelector('.calculatorForm');
const boxWidth = document.querySelector('.boxWidth');
const boxLength = document.querySelector('.boxLength');
const cubes = document.querySelector('.cubes');
const button = document.querySelector('.submitButton');
const metres = document.querySelector('.metresCompleted');

formCalculator.addEventListener('submit', function(e){

  boxWidthInput = boxWidth.value;
  boxLengthInput = boxLength.value;
  cubesInput = cubes.value;

  const boxNumbers = cubesInput / (boxWidthInput * boxLengthInput * 0.1);

  const metresCompleted = boxNumbers * boxLengthInput;

  metres.value = metresCompleted.toFixed(1);

    e.preventDefault();
});
