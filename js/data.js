// en _index.html_ se pueda ingresar un dato al localStorage

//el mismo se pueda visualizar al abrir _data.html_
const span = document.getElementById("data");

const inputValue = localStorage.getItem("inputValue");
span.innerHTML += inputValue;
