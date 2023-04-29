function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === 'audio') {
    elemento.play();
  } else {
    // alert('Elemento não encontrado');
    console.log('Elemento não encontrado ou seletor inválido.')
  }

}

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
//while (contador < listaDeTeclas.length) {
for (let contador = 0; contator < listaDeTeclas.length; contador++) {
  
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; // template string
  
  //console.log(idAudio);

  tecla.onclick = function() {
    tocaSom(idAudio);
  };
  //console.log(contador);
  tecla.onkeydown = function (evento) {
    console.log(evento.code)
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa');
    }

  }
}