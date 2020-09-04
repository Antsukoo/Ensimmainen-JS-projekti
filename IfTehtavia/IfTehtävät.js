function järjestys(){
  var numEns = parseInt(document.getElementById("num1").value);
  var numToi = parseInt(document.getElementById("num2").value);
  var numKol = parseInt(document.getElementById("num3").value);


  if (numEns > numToi && numEns > numKol){
    if (numToi > numKol){
      document.write('Järjestys on suurimmasta pienimpään: ', numEns, ', ', numToi, ', ', numKol);
    }else {
      document.write('Järjestys on suurimmasta pienimpään: ', numEns, ', ', numKol, ', ', numToi);
    }
  }
  else if (numToi > numEns && numToi > numKol){
    if (numEns > numKol){
      document.write('Järjestys on suurimmasta pienimpään: ', numToi, ', ', numEns, ', ', numKol);
    }else {
      document.write('Järjestys on suurimmasta pienimpään: ', numToi, ', ', numKol, ', ', numEns);
    }
  }
  if (numKol > numToi && numKol > numEns){
    if (numToi > numEns){
      document.write('Järjestys on suurimmasta pienimpään: ', numKol, ', ', numToi, ', ', numEns);
    }else {
      document.write('Järjestys on suurimmasta pienimpään: ', numKol, ', ', numEns, ', ', numToi);
    }
  }
}

function Suurin(){
  var lukuEns = parseInt(document.getElementById('luku1').value);
  var lukuToi = parseInt(document.getElementById('luku2').value);
  var lukuKol = parseInt(document.getElementById('luku3').value);
  var lukuNel = parseInt(document.getElementById('luku4').value);
  var lukuVii = parseInt(document.getElementById('luku5').value);

  if (lukuEns > lukuToi && lukuEns > lukuKol && lukuEns > lukuNel && lukuEns > lukuVii){
    document.write('Antamistasi luvuista suurin on: ', lukuEns);
  }
  if (lukuToi > lukuEns && lukuToi > lukuKol && lukuToi > lukuNel && lukuToi > lukuVii){
    document.write('Antamistasi luvuista suurin on: ', lukuToi);
  }
  if (lukuKol > lukuEns && lukuKol > lukuToi && lukuKol > lukuNel && lukuKol > lukuVii){
    document.write('Antamistasi luvuista suurin on: ', lukuKol);
  }
  if (lukuNel > lukuEns && lukuNel > lukuToi && lukuNel > lukuKol && lukuNel > lukuVii){
    document.write('Antamistasi luvuista suurin on: ', lukuNel);
  }
  if (lukuVii > lukuEns && lukuVii > lukuToi && lukuVii > lukuKol && lukuVii > lukuNel){
    document.write('Antamistasi luvuista suurin on: ', lukuVii);
  }
}

function Parillinen(){
  var pariLuku = parseInt(document.getElementById('lukuP').value);


  if (pariLuku%2 == 0){
    document.write('Antamasi luku on parillinen.');
  }else {
    document.write('Antamasi luku ei ole parillinen.');
  }

}

function MopVai(){
  var ika = parseInt(document.getElementById('Mopovai').value)

  if (ika < 16){
    document.write('Käyttäjä saa ajaa polkupyörää.');
  }else if (ika >= 16 && ika < 18) {
    document.write('Käyttäjä saa ajaa mopoa.');
  }else {
    document.write('Käyttäjä saa ajaa autoa.');
  }
}

function kaanna(){
  var kieliVal = document.getElementById('kieli').value;

  if (kieliVal == "en"){
    document.write('Hello world!');
  }

  if (kieliVal == "sw"){
    document.write('Hej världen!');
  }

  if (kieliVal == "es"){
    document.write('Hola mundo!');
  }
}
