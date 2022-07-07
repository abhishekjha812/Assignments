let btn = document.querySelector('button');
btn.addEventListener('click', fn);

function fn() {
    let name = confirm('Are you Sure You want to view image?');
    window.location.href = "images.html";
}