//Factory de objetos
module.exports = () => {
    return {
        valor : 10,
        aumentarValor() {
            this.valor++;
        }
    }
}