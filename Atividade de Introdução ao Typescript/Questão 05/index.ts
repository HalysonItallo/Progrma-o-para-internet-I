enum DiasSemana {
  Domingo = 'Domingo',
  Segunda = 'Segunda',
  Terca = 'Terca',
  Quarta = 'Quarta',
  Quinta = 'Quinta',
  Sexta = 'Sexta',
  Sabado = 'Sabado'
}


 class DiasSema{
  constructor (public diaSemana: any){};
 }


namespace DiasSemana{
  export function isDiaUtil(diasSema: DiasSema) : boolean {
    for(let diaSemana in diasSema.diaSemana){
      if(diasSema.diaSemana[diaSemana] === 'Domingo' || diasSema.diaSemana[diaSemana] === 'Sabado'){
        return false;
      }
    }
      
    return true;
  }
}

let diasSema = new DiasSema(DiasSemana);

console.log(DiasSemana.isDiaUtil(diasSema)); 














