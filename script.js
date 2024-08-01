'use strict'
let arrProductos= ["Leche", "Azucar", "Yerba", "Pan", "Tomate", "Galletitas", "Caramelos"];
let arrPrecios= [15, 10, 20, 8, 7, 5, 3];
let arrStock = [100, 10, 200, 80, 90, 120, 200];


/*let cantidadesDeInputs=inputs;
let inputArreglo=new Array(cantidadesDeInputs);
for (indice = 0; indice < cantidad; indice++) {
    v[indice] = rls.questionInt(`Ingrese v[ ${indice} ]: `));


console.log(inputArreglo);*/

let nuevoElemento=document.createElement("h6");
let nuevoTexto= document.createTextNode("Productos");
let productos= document.querySelector(".titulos");
nuevoElemento.appendChild(nuevoTexto);
productos.appendChild(nuevoElemento);

let nuevoElemento2=document.createElement("h6");
let nuevoTexto2= document.createTextNode("Precios");
let precios= document.querySelector(".titulos");
nuevoElemento2.appendChild(nuevoTexto2);
precios.appendChild(nuevoElemento2);

let productos3= document.querySelector(".productos__lista");

function funcionProductos(){
    for(let i=0; i<arrProductos.length; i++){
        let li=document.createElement("li");
        li.textContent=arrProductos[i];
        productos3.appendChild(li);
    }
    
}
funcionProductos();

let precios3= document.querySelector(".precios__lista");

function funcionPrecios(){
    for(let i=0; i<arrPrecios.length; i++){
            let li=document.createElement("li");
        li.textContent=arrPrecios[i];
        precios3.appendChild(li); 
    }
    
}
funcionPrecios();



function funcionStock(){
    for(let i=0; i<arrStock.length; i++){
            if(arrStock[i]<=0){ //agregue menor igual a 0
            alert("Sin Stock");
        } 
            //if(arrStock[i]>arrStock[i]){   «----- ver variable para asignar
            //alert("Ha superado el Stock disponible");    
         
    }
   
    }

funcionStock();

let inputs= document.querySelector(".inputs");
function funcionInputs(){
    for(let i=0; i<arrProductos.length; i++){
        let input=document.createElement("input");
        input.type = "number";
        input.value=0;
        input.min=0;
        input.max=arrStock[i];
        inputs.appendChild(input);
    }
}
    
funcionInputs();


let inputsArray = [];
let inputElements = inputs.querySelectorAll(".inputs");
for (let i = 0; i < inputElements.length; i++) {
    inputsArray.push(inputElements[i]);
}
console.log(inputsArray);
document.querySelector("div button").addEventListener("click", function funcionComprar(){
    let cantidad=document.querySelector("input").value;
    
    //cantidad=Number(cantidad);
    



    
    if(cantidad>0 && (inputsArray[0] -cantidad)>0){
        comprar(cantidad);
        total+= cantidad*arrPrecios[0];
    
    }else{
        alert("ingrese una cantidad mayor a cero o no hay stock")
    
}
})

function comprar(cantidad) {
    document.getElementById("total").innerText=cantidad*arrPrecios[0];
}