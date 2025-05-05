const grid = document.getElementById('numberGrid');
const button = document.getElementById('toggleButton');

let isOriginal = true;

const numbersOriginal = [1, 2, 3, 4, 5, 6];
const numbersReversed = [6, 5, 4, 3, 2, 1];

function renderNumbers(numbers) 
{
  grid.innerHTML = '';
  numbers.forEach(num => 
    {
    const div = document.createElement('div');
    div.textContent = num;
    grid.appendChild(div);
    });
}

renderNumbers(numbersOriginal);

button.addEventListener('click', () => 
{
  isOriginal = !isOriginal;
  if (isOriginal) 
    {
    renderNumbers(numbersOriginal);
    } 
    else 
    {
    renderNumbers(numbersReversed);
    }
});