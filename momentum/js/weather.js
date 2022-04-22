const API_KEY = '705da7de01195f9445064176c704b749';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url) // fetch : promise입니다..ㅎㅎ..
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}
function onGeoError(params) {
  alert("Can't find you. No weather for you.");
}

// const cart = { name: '도서', price: 1500 };
// const getTotal = () => cart.price + '원';
// // const myCart = '장바구니에 ' + cart.name + '가 있습니다. 총 금액은 ' + getTotal(cart) + '입니다.';
// const myCart = `장바구니에 ${cart.name}가 있습니다. 총 금액은 ${getTotal(cart)}입니다.`
// console.log(myCart);

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
