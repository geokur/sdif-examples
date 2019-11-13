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

module.exports = CheckoutService