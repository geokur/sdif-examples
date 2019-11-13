class OrderService {
    constructor({ logger }) {
        this.logger = logger
    }
    createOrder(purchase) {
        this.logger.log(`Create order for: ${purchase}`)
    }
}

module.exports = OrderService