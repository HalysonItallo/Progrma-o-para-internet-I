var DiasSemana;
(function (DiasSemana) {
    DiasSemana["Domingo"] = "Domingo";
    DiasSemana["Segunda"] = "Segunda";
    DiasSemana["Terca"] = "Terca";
    DiasSemana["Quarta"] = "Quarta";
    DiasSemana["Quinta"] = "Quinta";
    DiasSemana["Sexta"] = "Sexta";
    DiasSemana["Sabado"] = "Sabado";
})(DiasSemana || (DiasSemana = {}));
var DiasSema = /** @class */ (function () {
    function DiasSema(diaSemana) {
        this.diaSemana = diaSemana;
    }
    ;
    return DiasSema;
}());
(function (DiasSemana) {
    function isDiaUtil(diasSema) {
        for (var diaSemana in diasSema.diaSemana) {
            if (diasSema.diaSemana[diaSemana] === 'Domingo' || diasSema.diaSemana[diaSemana] === 'Sabado') {
                return false;
            }
        }
        return true;
    }
    DiasSemana.isDiaUtil = isDiaUtil;
})(DiasSemana || (DiasSemana = {}));
var diasSema = new DiasSema(DiasSemana);
console.log(DiasSemana.isDiaUtil(diasSema));
