
const Currency = {
    currencyFormat(value: number) {
        return `R$ ${Number(value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
    }
}

export default Currency;