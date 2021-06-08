function exibir() {
    var rest_parametros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest_parametros[_i] = arguments[_i];
    }
    for (var i = 0; i < rest_parametros.length; i++) {
        console.log(rest_parametros[i]);
    }
}
exibir('a', 'b');
exibir('a', 'b', 'c');
exibir('a', 'b', 'c', 'd');
