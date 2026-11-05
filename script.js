const myImg = document.getElementById('myImg');
const Button = document.getElementById('Button');
function changePicture() {
    myImg.src = 'img2.jpg';
}
Button.addEventListener('click', changePicture);