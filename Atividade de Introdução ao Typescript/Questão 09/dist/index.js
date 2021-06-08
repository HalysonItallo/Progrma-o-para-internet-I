var Transacao = /** @class */ (function () {
    function Transacao(valor, desconto) {
        this.valor = valor;
        this.desconto = desconto;
    }
    Transacao.prototype.getValor = function () {
        return this.valor;
    };
    Transacao.prototype.getDesconto = function () {
        return this.desconto;
    };
    Transacao.prototype.taxa = function () {
        return this.valor * (1 - this.desconto / 100);
    };
    return Transacao;
}());
var transacao = new Transacao(100, 12);
console.log(transacao.taxa());
console.log(transacao.getValor());
console.log(transacao.getDesconto());
