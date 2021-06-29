export default class Data {
  private media_casos_14_dias: number;
  private media_casos_hoje: number;
  
  
  constructor(media_casos_14_dias: number, media_casos_hoje: number){
    this.media_casos_14_dias = media_casos_14_dias;
    this.media_casos_hoje = media_casos_hoje;
  }
  
  calculo_variação(): number{
    return 100 - ((this.media_casos_hoje/this.media_casos_14_dias) * 100)
  }
  
  
  mostrar_variacao(): string{
    const variacao = this.calculo_variação();
    
    if(variacao < 0){
      return 'Em queda'
    } else if (variacao > 0 && variacao < 15) {
      return 'Em Estabilidade'
    } else if (15 < variacao){
      return 'Em Alta'
    }
  }
}
