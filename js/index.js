
// en _index.html_ se pueda ingresar un dato al localStorage
const btn = document.getElementById("buttonText");

btn.addEventListener("click", () => {
    const inputValue = document.getElementById("inputText").value;
    localStorage.setItem("inputValue", inputValue);
});


