//Factory de objetos
module.exports = () => {
    return {
        valor : 1,
        incrementarValor() {
            this.valor++;
        }
    }
}