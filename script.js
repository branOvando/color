let esRojo = false;
const boton = document.getElementById('botonColor');

boton.addEventListener('click', () => {
if (esRojo) {
document.body.style.backgroundColor = 'white';
} else {
document.body.style.backgroundColor = 'red';
}
esRojo = !esRojo;
});