// Asignando valores numericos
var x = 1;
var y = 2;
var z = x + y;

// Asigno cadenas
var nombre = 'Lalo';
var apellido = 'Espinoza';

var a = '10'; // Cadena
var b = '100';

// Objetos
var persona = {
  'nombre': 'Eduardo Espinoza',
  'edad': 31,
  'sexo': 'M',
  'aptitudes': {
    'apt1': 'Programacion',
    'apt2': 'HTML5',
    'apt3': 'JS'
  }
};

// Objecto vacío
var perro = {};

var producto = function(a, b) {
  return a * b;
}

var incrementar = function(a) {
  return a+1;
}


// Objeto con atributos de funciones
var medico = {
  'nombre': 'Julio',
  'apellido': 'Condori',
  'edad': 50,
  'inicio': 1998,
  'fin': 2015,
  'servicio': function() {
    return this.fin - this.inicio;
  },
  'completo': function() {
    return this.nombre + ' ' + this.apellido;
  }
}

document.write('<h1>' + medico.completo() + '</h1>');