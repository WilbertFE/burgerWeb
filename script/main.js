// toggle button section
const toggleButton = document.querySelector('.toggleButton');
const navigation = document.querySelector('.navigation');

toggleButton.addEventListener('click', function(){
    navigation.classList.toggle('geser');
    console.log('ok');
});

console.log('mulai');