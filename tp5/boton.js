btnN1= document.getElementByid("btn-N1");
btnN2= document.getElementByid("btn-N2");
btnN3= document.getElementByid("btn-N3");
btnN4= document.getElementByid("btn-N4");
btnN5= document.getElementByid("btn-N5");
btnN6= document.getElementByid("btn-N6");
nombre= document.getElementById("nombre");

btnN1.addEventListener("click",function(){
    alert(" Elemento: " + elementos[i].value + "\n Seleccionado: " + elementos[i].checked);
})

btnN2.addEventListener("click",imprimir);
function imprimir(){
    alert(" Elemento: " + elementos[i].value + "\n Seleccionado: " + elementos[i].checked);
}

btnN3.addEventListener("click",function(){
    alert(" Elemento: " + elementos[i].value + "\n Seleccionado: " + elementos[i].checked);
})

btnN4.addEventListener("click",function(){
    alert(" Elemento: " + elementos[i].value + "\n Seleccionado: " + elementos[i].checked);
})

btnN5.addEventListener("click",function(){
    alert(" Elemento: " + elementos[i].value + "\n Seleccionado: " + elementos[i].checked);
})

btnN6.addEventListener("click",mostrarTexto);
function mostrarTexto(){
    alert(" Elemento: " + elementos[i].value + "\n Seleccionado: " + elementos[i].checked);
}
    

   

