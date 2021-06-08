var siglas;
(function (siglas) {
    siglas["Um"] = "PI";
    siglas["Dois"] = "CE";
    siglas["Tres"] = "MA";
})(siglas || (siglas = {}));
// for (let sigla in siglas) {
//   console.log("sigla estados: ", siglas[sigla]);
// }
for (var sigla in siglas) {
    console.log("sigla estados: ", sigla);
}
