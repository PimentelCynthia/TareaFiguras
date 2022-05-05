alert ("Tarea figuras JS!!!!");

figura= prompt("Ingrese una opcion \n 1.- Triangulo \n 2.- Cuadrado \n 3.-Rectangulo \n 4.-Circulo ");

switch (figura){
    case "1":
        console.log("Seleccionaste Triangulo");
        let base=parseFloat(prompt("Ingresa la base"));
        let altura=parseFloat(prompt("Ingresa la altura"));
        let lado1= parseFloat(prompt("Ingresa lado 1"));
        let lado2= parseFloat(prompt("Ingresa lado 2"));
        let area=base*altura/2;
        let perimetro=lado1+lado2+base;
        alert (area);
        alert (perimetro);
        console.log("El area es:", area, "El perimetro :",perimetro);
    break;
    case "2":
        console.log("Seleccionaste la opcion cuadrado");
        let ladoC=parseFloat(prompt("Ingresa el lado"));
        let areaC=ladoC*ladoC;
        let perimetroC=ladoC+ladoC+ladoC+ladoC;
        alert (areaC);
        alert (perimetroC);
        console.log("El area es:", areaC, "El perimetro :",perimetroC);
        break;
    case "3":
        console.log("Seleccionaste la opcion rectangulo");
        let baseR=parseFloat(prompt("Ingresa la base"));
        let alturaR=parseFloat(prompt("Ingresa la altura"));
        let areaR=baseR*alturaR;
        let perimetroR=baseR+baseR+alturaR+alturaR;
        alert (areaR);
        alert (perimetroR);
        console.log("El area es:", areaR, "El perimetro :",perimetroR);
        break;
    case "4":
        console.log("Seleccionaste Circulo");
        let radio=parseFloat(prompt("Ingresa el radio"));
        let areaCi=3.1416*radio**2;
        let perimetroCi=2*3.1416*radio;
        alert (areaCi);
        alert (perimetroCi);
        console.log("El area es:", areaCi, "El perimetro :",perimetroCi);
        break;

    default:
        console.log("Ingresaste un dato erroneo");        

}

console.log(typeof(opcion));