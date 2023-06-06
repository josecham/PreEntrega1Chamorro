
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

