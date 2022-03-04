function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");
    

     if(pontos.style.display === "none") {
         pontos.style.display="inline";
         maisTexto.style.display="none";
         btnLeiaMais.innerHTML="Leia Mais";
     }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
     }

}
/* função para o segundo post intependente*/
function leiaMais2(){
    var pontos=document.getElementById("pontos2");
    var maisTexto=document.getElementById("mais2");
    var btnLeiaMais2=document.getElementById("btnLeiaMais2");
    

     if(pontos.style.display === "none") {
         pontos.style.display="inline";
         maisTexto.style.display="none";
         btnLeiaMais2.innerHTML="Leia Mais";
     }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais2.innerHTML="Leia Menos";
     }

}