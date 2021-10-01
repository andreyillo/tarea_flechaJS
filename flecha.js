//sumar
//1ra metodo de suma

var suma = (numero1, numero2) => {
    return numero1 + numero2;
  }

  //2da metodo de suma
  // Asignamos la funcion a una variable para reutilizarla
var suma = (numero1, numero2) => numero1 + numero2
var a = suma(2, 3);
// 5
var b = suma(4, 5);
// 9
//--------------------------------//----------------
//sacar promedio
function mostrarResultado(operacionA, operacionB) {
    document.write(operacionA()+operacionB()/operacionB());
  } 
  mostrarResultado(() => 2+2/3);

  //mayor y menor
  var numero01;
  var numero02;


	if(numero01 >= numero02)
	{
        //imprime numero mayor
	console.log("El numero mayor es: " + numero01 + " ( Numero 1 )");
	}
	else
	{
       //imprime numero mayor
	console.log("El Numero mayor es : " + numero02 + " ( Numero 2 )");
	}