class Transacao{
  constructor(
    readonly valor: number, 
    readonly desconto: number, 
  ) {}
  
  getValor(){
    return this.valor;
  }
  
  getDesconto(){
    return this.desconto;
  }
  
  taxa(){
    return this.valor * (1-this.desconto/100);
  }
 
}

let transacao = new Transacao(100,12); 

console.log(transacao.taxa());
console.log(transacao.getValor());
console.log(transacao.getDesconto());
