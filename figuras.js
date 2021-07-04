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

// TALLER 2
const cupons = [
    {
        nombre: "platzi",
        descuento: 10
    },
    {
        nombre: "estudiante",
        descuento: 15
    },
    {
        nombre: "empresa",
        descuento: 20, 
    }
];

const inputPrecio = document.getElementById("inputPrecio").value;
const inputDescuento = document.getElementById("inputDescuento").value;
const inputCupon = document.getElementById("inputCupon").value;

function precioDescuento(precio,descuento){
    const total = precio - (precio*descuento)/100;   
    return total;   
}

function precioDescuentoCupon(cupon){
    const cuponDescuento = cupons.find(c =>c.nombre === cupon);    
    if(cuponDescuento){
        const descuentoCupon = cuponDescuento.descuento;    
        return descuentoCupon;
    }
    /*else{
        console.log("descuento no disponible");   }*/
}

function calcularPrecio(){
    const precioTotalDescuento = precioDescuento(inputPrecio, inputDescuento); 
    const descuentoCupon = precioDescuentoCupon(inputCupon);
    const sumaDescuento= parseInt(inputDescuento) + parseInt(descuentoCupon);
    const precioTotalDescuentoBono = precioDescuento(inputPrecio,sumaDescuento);

    if(inputCupon == ''){
        console.log(precioTotalDescuento);
    }else{
        console.log(precioTotalDescuentoBono);
    }
    
}