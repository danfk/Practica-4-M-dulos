let greet = require('./greet');
//greet();

let obj = {};

let persona = {
    nombre: "Carlos",
    apellido: "Santana",
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        minicipio: "Colima"
    },
    getDomicilio: function () {
        return `${this.domicilio.calle} ${this.domicilio.colonia} ${this.domicilio.cp} ${this.domicilio.minicipio}`
    }
}

//console.log(persona.getName());
//console.log(persona.domicilio);
console.log(persona.getDomicilio());
//console.log(persona.nombre);
//console.log(persona.apellido);