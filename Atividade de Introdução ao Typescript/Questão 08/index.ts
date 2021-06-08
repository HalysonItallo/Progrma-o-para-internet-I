class MeuNumero{
  constructor(
    readonly numero: number, 
  ) {}
  
  getInteiro(){
    return Math.round(this.numero);
  }
  getDecimal(){
    return (this.numero - this.getInteiro()).toPrecision(8);
  }
}

let meuNumero = new MeuNumero(11.32323231231); 

console.log(meuNumero.getInteiro());
console.log(meuNumero.getDecimal());