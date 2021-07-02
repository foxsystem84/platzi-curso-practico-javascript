console.group("Cuadrados")

const perimetroCuadrado = (lado)=>lado * 4;
const areaCuadrado = (lado) => lado * lado;

console.groupEnd();


console.group("Triangulos")

const perimetroTriangulo = (lado1,lado2,base) => lado1+lado2+base;
const areaTriangulo = (altura,base) => (base*altura)/2;

console.groupEnd();

console.group("Circulo");

const diametroCirculo = (radio) => 2*radio*Math.PI;
const areaCirculo = (radio) => radio*radio*Math.PI;

console.groupEnd();



function calculaPerimetroCuadrado(){
    const lado = document.getElementById("inputCuadrado");
    const valor = lado.value;
    const perimetro = perimetroCuadrado(valor);
    document.getElementById("resultado").innerHTML = "Perimetro mide: "+perimetro;

}
function calculaAreaCuadrado(){
    const lado = document.getElementById("inputCuadrado");
    const valor = lado.value;
    const area = areaCuadrado(valor);
    document.getElementById("resultado").innerHTML = "Area mide: "+area;

}