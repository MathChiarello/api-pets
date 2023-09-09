import './style.css';

const btnDog = document.querySelector('#btnDog');
const btnCat = document.querySelector('#btnCat');
const btnRandom = document.querySelector('#btnRandom');
const imgPet = document.querySelector('#imgPet');

const getDog = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then(({ message }) => {
      imgPet.src = message;
    });
};

const getCat = () => {
  return fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data) => {
      imgPet.src = data[0].url;
    });
};

const getRandom = () => Promise.any([getCat(), getDog()]);

btnCat.addEventListener('click', getCat);
btnDog.addEventListener('click', getDog);
btnRandom.addEventListener('click', getRandom);
