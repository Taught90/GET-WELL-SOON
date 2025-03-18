const introduction = document.querySelector('.introduction');
const content = document.querySelector('.content');
const H = document.querySelector('.H');
const E = document.querySelector('.E');
const L = document.querySelector('.L');
const l = document.querySelector('.l');
const O = document.querySelector('.O');
const pookie = document.querySelector('.pookie');
const button = document.querySelector('.button');
const img = document.querySelector('.img');



setTimeout(function(){
    H.style.opacity = 1;
},200)
setTimeout(function(){
    E.style.opacity = 1;
},400)
setTimeout(function(){
    L.style.opacity = 1;
},600)
setTimeout(function(){
    l.style.opacity = 1;
},800)
setTimeout(function(){
    O.style.opacity = 1;
},1000)
setTimeout(function(){
    pookie.style.opacity = 1;
},2000)
setTimeout(function(){
    button.style.opacity = 1;
},3500)

button.addEventListener('click', () => {

    setTimeout(function(){
        content.style.display = 'flex';
    },2000)
    setTimeout(function(){
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    },2500)
    setTimeout(function(){
        img.style.opacity = 1;
    },2500)

})
