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

module.exports = InMemoryLogger