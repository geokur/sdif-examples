const path = require('path')
const { Bindings, Container, Dependencies, BindingsLoader } = require('sdif')

const loadedPath = path.join(__dirname, 'loaded')
const bindings = new Bindings()

// Load bindings
BindingsLoader.loadDir(loadedPath, bindings)

/* After this command bindings will be the same as we would
manually require all classes from files and bind using:

bindings.bindClass(CheckoutService, OrderService, InMemoryLogger)

*/

// The only binding which needs to be set manually to bind Logger to existing binding 
// and specify that it should be singleton 
bindings.bind('logger').toKey('inmemoryLogger').asSingleton()

const container = new Container(bindings)
const dependencies = new Dependencies(container)

const { logger, checkoutService } = dependencies

checkoutService.checkout('iPhone 11')

logger.printLog()