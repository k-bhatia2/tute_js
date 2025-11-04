// const mybox = document.getElementById("mybox");

// mybox.addEventListener("click", event => {
//     mybox.style.backgroundColor = "tomato"
//     mybox.textContent="Ouch!🙏🏻"
// });

// mybox.addEventListener("mouseout", event => {
//     mybox.style.backgroundColor = "greenyellow"
//     mybox.textContent="Click Me again"
// })

console.log("test message");

const box1 = document.getElementById("box-1");

box1.addEventListener("click", event => {
    box1.style.backgroundColor = "red"
});

const box2 = document.getElementById("box-2");

box2.addEventListener("click", event => {
    box2.style.backgroundColor = "blue"
});

const box3 = document.getElementById("box-3");

box3.addEventListener("click", event => {
    box3.style.backgroundColor = "green"
});

const box4 = document.getElementById("box-4");

box4.addEventListener("click", event => {
    box4.style.backgroundColor = "yellow"
});

const form = document.querySelector('.for');
const input = document.getElementById('text');
const bar = document.querySelector('.bar');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    bar.textContent = "Hello, " + input.value;
});

    