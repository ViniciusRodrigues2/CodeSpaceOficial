(function(){
    'use strict';
    var click = document.querySelector('.espand');
    var show = true;
    click.addEventListener('click',()=>{
        var addsMenu = document.querySelector('.navbar');
        addsMenu.classList.toggle('visible',show);
        var bar = document.querySelector('.hamburguer');
        document.body.style.overflowY = show ? "hidden" : "initial";
        bar.classList.toggle('open');
        click.classList.toggle('open');
        show = !show
    });
})();