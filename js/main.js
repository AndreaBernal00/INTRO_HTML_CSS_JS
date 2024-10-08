// document.write("<h1>Holaaa</h1>");
// alert('Mensaje usando la funcion "alert"');

/* alert("Holaaaaaaaaaaaaaaaaaaa");
["Bienvenidos a", "TalentoTech"].forEach(alert); */

//Constructores de objetos

let disco1 = {
    artist: 'Radiohead',
    album: 'Kid A',
    year: 2000
}

let disco2 = {
    artist: 'Tame',
    album: 'Currents',
    year: 2015
}

//Función constructor para crear objetos
function Disco(artist,album,year){
    this.artist = artist;
    this.album = album;
    this.year = year;
}

let disco3 = new Disco('Beach House', 'Bloom', 2012);
console.log(disco3);

//Clases

class Player{
    //Constructor de la clase donde estan los atributos
    constructor(nombre, colorSombrero){
        this._nombre = nombre;
        this._colorSombrero = colorSombrero;
    }
    //Metodos o funciones de la clase
    saltar(){}
    correr(){}
    saludar(){
        return `Hola soy ${this._nombre} y mi sombrero es ${this._colorSombrero}`;
    }
    //Metodo get para obtener el valor de un atributo
    get nombre(){
        return this._nombre;
    }
    //Metodo set para modificar el valor de un atributo
    set cambiarNombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
}

//Creandos dos objetos e imprimiendolos

let player1 = new Player('Mario', 'Rojo');
console.log(player1);
let player2 = new Player('Luigi', 'Verde');
console.log(player2);

//Llamando a los metodos o funciones de los objetos

console.log(player1.saludar());
console.log(player2.saludar());

//Usando metodos get y set

console.log(player1.nombre);
player1.cambiarNombre = 'Alberto';
console.log(player1.nombre);

//Creación de una SUBCLASE

//Clase hija(Pet) de la clase padre(Player)
class Pet extends Player{
    constructor(nombre, colorSombrero, colorPiel){
        //Se usa la palabra super y entre parentesis los nombres de los atributos heredados
        super(nombre,colorSombrero);
        this._colorPiel = colorPiel;
    }
    get colorPiel(){
        return this._colorPiel;
    }
    set colorPiel(nuevoColorPiel){
        this._colorPiel = nuevoColorPiel; 
    }
    comer(){
        return 'Yo como manzanas.';
    }
    //Sobreescribiendo un metodo heredado
    saludar(){
        return super.saludar() + ', además soy una mascota.'
    }
}

let pet1 = new Pet('Yoshi','Invisible','Verde');
console.log(pet1);

console.log(pet1.saludar());
console.log(pet1.nombre);
pet1.cambiarNombre = 'Rufus';
console.log(pet1.nombre);

console.log(pet1.comer());

