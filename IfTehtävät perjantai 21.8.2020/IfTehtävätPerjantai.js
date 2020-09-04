function etuMerkki(){
  var num = document.getElementById('etumerkki').value;
  var merkki = num[0];
  for (var i = 0; i < num.length; i++) {
    if (merkki == '-'){
      document.write('Antamasi luku on negatiivinen.');
      break;
    }else {
      document.write('Antamasi luku on positiivinen.');
      break;
    }
  }
}

function viikonPäivä(){
  var päivänNumero = parseInt(document.getElementById('viikonpäivä').value);

  if (päivänNumero == 1){
    document.write('Antamaasi lukua vastaava viikonpäivä on maanantai.');
  }else if (päivänNumero == 2) {
    document.write('Antamaasi lukua vastaava viikonpäivä on tiistai.');
  }else if (päivänNumero == 3) {
    document.write('Antamaasi lukua vastaava viikonpäivä on keskiviikko.');
  }else if (päivänNumero == 4) {
    document.write('Antamaasi lukua vastaava viikonpäivä on torstai.');
  }else if (päivänNumero == 5) {
    document.write('Antamaasi lukua vastaava viikonpäivä on perjantai.');
  }else if (päivänNumero == 6) {
    document.write('Antamaasi lukua vastaava viikonpäivä on lauantai.');
  }else if (päivänNumero == 7) {
    document.write('Antamaasi lukua vastaava viikonpäivä on sunnuntai.');
  }else{
    document.write('Antamasi luvun täytyy olla 1 ja 7 väliltä.');
  }
}

function karkausVuosi(){
  var vuosi = parseInt(document.getElementById('karkausvuosi').value);

  if (vuosi % 4 == 0 && vuosi % 100 != 0){
    document.write('Antamasi vuosi on karkausvuosi.');
  }else if (vuosi % 400 == 0){
    document.write('Antamasi vuosi on karkausvuosi.')
  }else{
    document.write('Antamasi vuosi ei ole karkausvuosi.');
  }
}

function sumKesk(){
  var luk1 = parseInt(document.getElementById('luku1').value);
  var luk2 = parseInt(document.getElementById('luku2').value);
  var luk3 = parseInt(document.getElementById('luku3').value);
  var luk4 = parseInt(document.getElementById('luku4').value);
  var luk5 = parseInt(document.getElementById('luku5').value);

  var sum = luk1 + luk2 + luk3 + luk4 + luk5;
  var kesk = sum / 5;
  document.write('Lukujen summa on: ', sum, '. \n Lukujen keskiarvo on: ', kesk, '.');
}

function Kert(){
  var kertLuku = parseInt(document.getElementById('kert').value);
  var kertTaulu;
  var kertLasku;

  for (var i = 0; i < 11; i++) {
    kertTaulu = i;
    kertLasku = kertLuku * i;
    document.write('Luvun ', kertLuku, ' ', kertTaulu, ' kertolasku on: ', kertLuku, ' x ', kertTaulu, ' ', kertLasku + "<br/>");
  }

}
