function exibir(...rest_parametros: string[]) {
  for(let i = 0; i < rest_parametros.length; i++){
    console.log(rest_parametros[i]);
  }
  
}

exibir('a', 'b');
exibir('a', 'b', 'c');
exibir('a', 'b', 'c', 'd');