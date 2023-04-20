let toggle=document.getElementById('dark');
let body = document.querySelector('body');

toggle.onclick=function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}