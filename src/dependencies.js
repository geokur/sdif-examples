const { Bindings, Container, Dependencies } = require('sdif')

class InMemoryLogger {
    constructor() {
        this.rows = []
    }
    log(row) {
        this.rows.push(row)
    }
    printLog() {
        this.rows.forEach(row => console.log(row))
    }
}

class CheckoutService {
    constructor({ logger, orderService }) {
        this.logger = logger
        this.orderService = orderService
    }
    checkout(purchase) {
        this.logger.log(`Checkout purchase: ${purchase}`)
        this.orderService.createOrder(purchase)
    }
}

class OrderService {
    constructor({ logger }) {
        this.logger = logger
    }
    createOrder(purchase) {
        this.logger.log(`Create order for: ${purchase}`)
    }
}

const bindings = new Bindings()
bindings.bindClass(CheckoutService, OrderService)
bindings.bind('logger').toClass(InMemoryLogger).asSingleton()

const container = new Container(bindings)
const dependencies = new Dependencies(container)

const { logger, checkoutService } = dependencies

checkoutService.checkout('iPhone 11')

logger.printLog()