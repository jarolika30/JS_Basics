const ball = document.querySelector(".ball");
ball.className += ' animated';
const image = document.querySelector('img');
console.log(image.hasAttribute('alt'));
image.removeAttribute('alt');
console.log(image.hasAttribute('alt'));
image.setAttribute("src", "img/girl.jpg");
console.log(image.getAttribute('src'));
