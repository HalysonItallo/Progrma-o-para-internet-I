var MeuNumero = /** @class */ (function () {
    function MeuNumero(numero) {
        this.numero = numero;
    }
    MeuNumero.prototype.getInteiro = function () {
        return Math.round(this.numero);
    };
    MeuNumero.prototype.getDecimal = function () {
        return (this.numero - this.getInteiro()).toPrecision(8);
    };
    return MeuNumero;
}());
var meuNumero = new MeuNumero(11.32323231231);
console.log(meuNumero.getInteiro());
console.log(meuNumero.getDecimal());
