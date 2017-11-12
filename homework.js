const myButton = document.querySelector('#myButton');

const myButtonClickHandler = function () {
    console.log('you clicked me!');
};

myButton.addEventListener('click', myButtonClickHandler);