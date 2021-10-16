var hamburguer = document.querySelector(".hamburguer"); //animação do manu para deixar aberto ou fechado.

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});