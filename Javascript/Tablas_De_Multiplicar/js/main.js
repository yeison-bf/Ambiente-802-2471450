let contenido = document.getElementById("contenido");

function obtenerTabla() {
  let valor = parseInt(document.getElementById("opcion").value);
  let resultado;

  for (let i = 0; i <= 10; i++) {
    resultado = i * valor;

    imprimir(valor, i, resultado);
  }
}

function imprimir(valor, i, resultado) {
  contenido.innerHTML += ` ${valor} * ${i} = ${resultado} </br>`;
}
