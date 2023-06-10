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

let entrada = prompt("¿desea comprar un NFT?SI/NO");
// //Repetimos hasta que se ingresa "SI"
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

for (let i = 1; i <= 2; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
   
    // Informamos el turno asignado usando el número de repetición (i). cuando llega al 2 se corta el bucle
    alert(" Prioridad  N° "+i+" Nombre: "+ingresarNombre);
    }



    
    

//SWITCH
/*
let numeros = parseInt(prompt("Ingresar Numero"));
switch(numeros) {   case 1:
    alert("es un uno")
    break;
  case 2:
    alert("es un dos")
    break;
  case 3:
    alert("es un tres")
    break;
  default:
    alert("es mas de tres")
    break;
 }

 


//alert('Bienvenido a esta página')//

let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
    
}else{
    alert("Error: Ingresar nombre y apellido");
}

let edad = Number(prompt('ingrese edad de usuario: '))
if (edad < 18){
alert("Es menor de edad")
} else if(edad === 18){
alert ("La edad es 18")
} else if(edad > 18){
alert ("La edad es mayor 18")
}

let nombreIngresado2   = prompt("Ingresar nombre");

if((nombreIngresado2 == "ANA") || (nombreIngresado2 =="ana")){
    alert("El nombre ingresado es Ana"); 
}else{
    alert("El nombre ingresado NO ES Ana"); 
}

for (let index = 0; index < 10; index++) {
    alert(index)
    
}

//me muestra del o al 2
for (let index = 0; index < 3; index++) {
    alert(index);
}

//Solicitamos un valor al usuario y lo multiplica por uno, por3.por5 
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
//En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 5; i+=2) {
let resultado = ingresarNumero * i ;
alert(ingresarNumero +" multiplicado_por "+ i +" = "+ resultado);
}

//me muestra del 0 al 6 y cuando es igual a 5 corta el bucle con break o lo continua al siguiente en 6 con continue
for (let index = 0; index <= 6; index++) {
    if (index === 5) {
        continue;
    }
       alert(index);
}

for (let i = 1; i <= 2; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i). cuando llega al 2 se corta el bucle
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
    }

    let entrada = prompt("Ingresar un nombre");
// //Repetimos hasta que se ingresa "ESC"
while( entrada == "" )
{
   switch (entrada) {
       case  "":
            alert("CAMPO OBLIGATORIO");
            break;
       default:
           alert("BIENVENIDO "+ entrada);
           break; 
   }
   
   entrada = prompt("Ingresar un nombre");
   
}
*/
