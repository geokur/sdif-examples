const { Bindings, Container } = require('sdif')

class Car {
    constructor({ carModel, engine, transmission }) {
        this.carModel = carModel
        this.engine = engine
        this.transmission = transmission
    }
    get specs() {
        return  this.carModel.specs + ' specs:\n\t' + 
            this.engine.specs + '\n\t' +
            this.transmission.specs
    }
}

class CarModel {
    constructor({ maker, model }) {
        this.maker = maker
        this.model = model
    }
    get specs() {
        return `${this.maker} ${this.model}`
    }
}

class DieselEngine {
    constructor() {
        this.fuel = 'Diesel'
        this.type = 'I'
        this.cylinders = 4
        this.size = 1995
        this.power = 143
    }
    get specs() {
        return `Engine: ${this.fuel} ${this.type}-${this.cylinders} ${this.size} cm3 ${this.power} PS`
    }
}

class AutomaticTransmission {
    constructor() {
        this.type = 'Automatic'
        this.gears = 6
    }
    get specs() {
        return `Transmission: ${this.type} ${this.gears} gear`
    }
}

const bindings = new Bindings()

bindings.bindClass(Car, CarModel, DieselEngine, AutomaticTransmission) // shortcut for .bind('car').toClass(Car)
bindings.bind('maker').toValue('BMW')
bindings.bind('model').toValue('118d')
bindings.bind('engine').toKey('dieselEngine')
bindings.bind('transmission').toKey('automaticTransmission')

const container = new Container(bindings)
const bmw118 = container.getInstance('car')

console.log(bmw118.specs)