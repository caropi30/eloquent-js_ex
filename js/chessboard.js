let tabla = '';
let tamano = 10;

for (let contadorExterno = 0; contadorExterno < tamano; contadorExterno++){
  for (let contadorInterno = 0; contadorInterno < tamano; contadorInterno++){
    if ((contadorInterno + contadorExterno) % 2 === 0){
      tabla += '#';
    }
    else {
      tabla += ' ';
    }
  }
 tabla += '\n';
};
