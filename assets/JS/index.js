document.getElementById("range-slider").addEventListener("input", function() {
   const sliderValue = this.value;
   const fundo = document.querySelector("main");
   const olhos = document.querySelectorAll(".olhos div");
   const boca = document.querySelector(".boca-bom, .boca-regular, .boca-ruim");
   const botao = document.querySelector(".botao");

   // Remover todas as classes existentes do fundo
   fundo.classList.remove("fundo-bom", "fundo-regular", "fundo-ruim");

   // Remover todas as classes existentes dos olhos
   olhos.forEach(olho => {
       olho.classList.remove("olho-bom", "olho-regular", "olho-ruim");
   });
   
   // Remover todas as classes existentes da boca
   boca.classList.remove("boca-bom", "boca-regular", "boca-ruim");

   // Remover todas as classes existentes do botao
   botao.classList.remove("botao-bom", "botao-regular", "botao-ruim");


   // Adicionar as classes com base na posição do slider
   if (sliderValue == "0") {
      fundo.classList.add("fundo-bom");
       olhos.forEach(olho => olho.classList.add("olho-bom"));
       boca.classList.add("boca-bom");
       botao.classList.add("botao-bom");
   } else if (sliderValue == "1") {
      fundo.classList.add("fundo-regular");
       olhos.forEach(olho => olho.classList.add("olho-regular"));
       boca.classList.add("boca-regular");
       botao.classList.add("botao-regular");
   } else if (sliderValue == "2") {
      fundo.classList.add("fundo-ruim");
       olhos.forEach(olho => olho.classList.add("olho-ruim"));
       boca.classList.add("boca-ruim");
       botao.classList.add("botao-ruim");
   }
});
