function main(){

    const botonAbreVentanaEl = document.querySelector(".abre-ventana");
    const botonCerrarVentanaEl = document.querySelector(".ventana__cierra-ventana");
    const ventanaEl= document.querySelector(".ventana");
    
    botonAbreVentanaEl.addEventListener("click", ()=>{
        ventanaEl.style.display= "inherit";
    });
    
    botonCerrarVentanaEl.addEventListener("click",()=>{
        ventanaEl.style.display="";
    })
    };
    
    main ()