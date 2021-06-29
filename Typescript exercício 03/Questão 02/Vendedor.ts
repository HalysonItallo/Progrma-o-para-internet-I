class Vendedor{
  private nome: string;
  private valor_total_vendas: number;
  private salário_fixo: number;
  
  constructor(nome: string, valor_total_vendas: number){
    this.nome = nome;
    if(valor_total_vendas < 0){
      this.valor_total_vendas = 0;
    } else {
      this.valor_total_vendas = valor_total_vendas;
    }
    
    this.salário_fixo = 1100;
  }
  
  comissao(): number {
    if(this.valor_total_vendas <= 5000 ){
      return this.salário_fixo;
    } else if (5000 < this.valor_total_vendas && this.valor_total_vendas <= 10000) {
      return this.salário_fixo + (((this.valor_total_vendas-5000) * 5) / 100)
    } else if (10000 < this.valor_total_vendas && this.valor_total_vendas <= 30000) {
      return this.salário_fixo + (((this.valor_total_vendas-5000) * 5) / 100) 
        + (((this.valor_total_vendas-10000) * 10) / 100)
    } else {
      return this.salário_fixo + ((this.valor_total_vendas * 20) / 100)
    }
  }
  
 
}


export default Vendedor;
