export default class Data {
    constructor(media_casos_14_dias, media_casos_hoje) {
        this.media_casos_14_dias = media_casos_14_dias;
        this.media_casos_hoje = media_casos_hoje;
    }
    calculo_variação() {
        return 100 - ((this.media_casos_hoje / this.media_casos_14_dias) * 100);
    }
    mostrar_variacao() {
        const variacao = this.calculo_variação();
        if (variacao < 0) {
            return 'Em queda';
        }
        else if (variacao > 0 && variacao < 15) {
            return 'Em Estabilidade';
        }
        else if (15 < variacao) {
            return 'Em Alta';
        }
    }
}
//# sourceMappingURL=calculoVariacao.js.map