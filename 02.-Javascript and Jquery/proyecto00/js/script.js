//script preloader
let preloader=document.getElementById("preloader");
        setTimeout(function(){
            preloader.style.visibility="hidden"
        },5000)
// script menu hamburguesa
function llamar(){
                let botonera=document.getElementById("botonera");
                botonera.classList.toggle("botonera-open");
                let menu=document.getElementById("menu");
                menu.querySelector(".menu .bi.bi-list").classList.toggle("bi-x-lg")
            }
//script boton subir
            let subir=document.getElementById("subir")
            window.addEventListener("scroll",bajar)
            function bajar(){
              let posy=window.pageYOffset;
              if(posy>100){
                  subir.style.display="block";
              }
              else{
                  subir.style.display="none"
              }
            }
//script galeria 
            let num=1;
        function adelante(){
            num++;
            if(num>8)
            num=1;
        let img=document.getElementById("img");
                  img.src="img/"+"spa0"+num+".jpg";
        }
        function atras(){
           num--;
        if(num<1)
           num=8;
        let img=document.getElementById("img");
            img.src="img/"+"spa0"+num+".jpg";
        }
//script del header
        let header=document.getElementById("header");
        window.addEventListener("scroll",scroll);
        function scroll(){
              let ejey=window.pageYOffset;
              if(ejey>300){
                header.style.background="deeppink";
              }
              else{
                header.style.background="none";
                header.style.transition="0.5s";
              }
            }