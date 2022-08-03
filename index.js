var display_btn=document.querySelector('.display_btn');
var close_btn=document.querySelector('.close_btn');
var notfication_box=document.querySelector('.notfication_box');
var action;

display_btn.addEventListener('click',function(){
    notfication_box.classList.add('active');
    action=setTimeout(function(){ notfication_box.classList.remove('active')},3000)
})

close_btn.addEventListener('click',function(){
    notfication_box.classList.remove('active');
    clearTimeout(action);
})