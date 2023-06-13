//algoritmo con condicional if else
let condition = true
let años = Number(prompt('ingrese edad de usuario: '))
while (condition) {
if (años >= 18){
alert("Bienvenido")
condition = false
} else{
alert ("no puede ver la pagina")
años = Number(prompt('ingrese edad de usuario: '))

}
}

//Ciclo while que de repite en hasta que se ingresa "SI"
let entrada = prompt("¿desea comprar un NFT?SI/NO");
while( entrada !== "SI" )
{
   switch (entrada) {
       case  "NO":
            alert("no puede ver la pagina");
            break;
        case  "si":
            alert("en MAYÚSCULA");
            break;     
       default:
           alert("escriba SI o NO");
           break; 
   }
   
   entrada = prompt("¿desea comprar un NFT?SI/NO");
   
}

//Ciclo for para ordenar por turnos a medida que vayan ingresando
for (let i = 1; i <= 2; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
   
    // Informamos el turno asignado usando el número de repetición (i). cuando llega al 2 se corta el bucle
    alert(" Prioridad  N° "+i+" Nombre: "+ingresarNombre);
    }

let nft = prompt("¿que numero de NFT desea comprar del 1 al 12?");
while( nft !== "" )
{
   switch (nft) {
       case  "1":
            alert("NFT Nº 1");
            break;
       case  "2":
            alert("NFT Nº 2");
            break; 
       case  "3":
            alert("NFT Nº 3");
            break;
       case  "4":
            alert("NFT Nº 4");
            break;
       case  "5":
            alert("NFT Nº 5");
            break;
       case  "6":
            alert("NFT Nº 6");
            break;
       case  "7":
            alert("NFT Nº 7");
            break;
       case  "8":
            alert("NFT Nº 8");
            break;
       case  "9":
            alert("NFT Nº 9");
            break;
       case  "10":
            alert("NFT Nº 10");
            break;
       case  "11":
            alert("NFT Nº 11");
            break;
       case  "12":
            alert("NFT Nº 12");
            break;
            
       default:
           alert("escriba el numero de NFT desea comprar del 1 al 12");
           break; 
   }
   
   nft = prompt("seleccione aceptar para terminar la compra");
   
}

   
// Funcion quedan() para saber cuantos Nft tengo disponibles
    let nftdisponibles = 11
    function quedan(){ 
    console.log("quedan: "+nftdisponibles)
    alert("NFT DISPONIBLES: "+nftdisponibles);
    nftdisponibles = nftdisponibles -1; 
    return nftdisponibles
    }
    quedan()

    function saludar() {
             
            alert("Muchas Gracias!! solo resta completar el formulario para efectuar la compra")
        
        }
        
        saludar()   