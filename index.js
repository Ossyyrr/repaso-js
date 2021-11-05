//------------------------------

let lapices = 6;
let coches = 14;

function operacion(num1, num2, operacion) {
    if (operacion === 'suma') {
        return num1 + num2;
    }
    else if (operacion === 'resta') {
        return num1 - num2;
    }
    else if (operacion === 'multiplicar') {
        return num1 * num2;
    }
}

let resultado = operacion(lapices, coches, 'multiplicar');

console.log(resultado);

//------------------------------  FOREACH


let frutas = ["Manzana", "Banana", "pera", "kiwi", "naranja", "limon"];

var frutasMayusculas = [];

frutas.forEach((elemento) => {
    frutasMayusculas.push(elemento.toUpperCase());
});

console.log(frutasMayusculas);



//------------------------------  TYPE OF


let frutasNumeros = ["Manzana", 3, "Banana", 6, "pera", 8, 9, 4, "kiwi", "naranja", "limon"];

frutasNumeros.forEach((elemento) => {

    if (typeof elemento === 'string') {
        console.log(elemento.toUpperCase());
    } else {
        console.log('Esto no es un estring, es el número: ' + elemento);
    }

});


//------------------------------ OBJETOS y  FOR IN


var coche = {
    "color": "morado",
    "tipo": "minivan",
    "registroDia": new Date('2012-02-03'),
    "capacidad": 7
};

coche.puertas = 3;
coche.añosUso = { "pepe": 2, "juan": 1, "Adri": 9, "ana": 37, "paco": 4 }

console.log(coche);

let suma = 0;

let cantidad = 0;

for (let persona in coche.añosUso) {
    //console.log(persona);
    //console.log(coche.añosUso[persona]);
    suma = suma + coche.añosUso[persona];
    cantidad = cantidad + 1;
}

console.log(suma);
console.log(cantidad);

let media = suma / cantidad;
console.log(media);
//let media = suma / coche.añosUso[persona]

//------------------------------  FOR OF = FOREACH


const cars = ["Saab", "Volvo", "BMW", "Renault", "Ford", "Audi"];

for (let coche of cars) {
    console.log(coche.toUpperCase());
};

cars.forEach((coche) => {
    console.log(coche.toLowerCase())
});


//------------------------------ 


let api = {
    count: 1118,
    next: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    previous: null,
    results: [
        {
            name: "bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            name: "ivysaur",
            url: "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            name: "venusaur",
            url: "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
            name: "charmander",
            url: "https://pokeapi.co/api/v2/pokemon/4/"
        },
        {
            name: "charmeleon",
            url: "https://pokeapi.co/api/v2/pokemon/5/"
        },
        {
            name: "charizard",
            url: "https://pokeapi.co/api/v2/pokemon/6/"
        },
        {
            name: "squirtle",
            url: "https://pokeapi.co/api/v2/pokemon/7/"
        },
        {
            name: "beedrill",
            url: "https://pokeapi.co/api/v2/pokemon/15/"
        },
        {
            name: "pidgey",
            url: "https://pokeapi.co/api/v2/pokemon/16/"
        },
        {
            name: "pidgeotto",
            url: "https://pokeapi.co/api/v2/pokemon/17/"
        },
        {
            name: "pidgeot",
            url: "https://pokeapi.co/api/v2/pokemon/18/"
        },
        {
            name: "rattata",
            url: "https://pokeapi.co/api/v2/pokemon/19/"
        },
        {
            name: "raticate",
            url: "https://pokeapi.co/api/v2/pokemon/20/"
        }
    ]
}

let numeroPokemon = 0;

for (pokemon of api.results) {

    numeroPokemon += 1;

    pokemon.num = "pokemon " + numeroPokemon;

    console.log(pokemon);
}


//----------------------------

