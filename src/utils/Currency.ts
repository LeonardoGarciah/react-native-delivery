
const Currency = {
    currencyFormat(value: number) {
        return `R$ ${value.toFixed(2).replace(".", ",")}`
    }
}

export default Currency;