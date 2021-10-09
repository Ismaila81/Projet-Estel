
var div=document.getElementById('myDiv');
alert(div);
var prénoms=[], prénom;
while (prénom=prompt("Entrez un prénom ")){
	prénoms.push(prénom);
} if (prénoms.length>0){
	alert(prénoms.join(' '));
} else {
	alert('Il n\'y a aucun prénom en mémoire');
}

var tAmis=['Idy', 'Binta', "Ali", 'Astou', 'Soda'];
for (var i =0, c=tAmis.length; i<c;i++ ){
	alert(tAmis[i]);
	document.writeln(tAmis)
} var mytableau=['Binta', 'Ali', 'Kady', 'Adja'];
alert(mytableau[2])

var phrase='Ceci est une phrase';
alert(phrase.length);
alert(phrase.toUpperCase());
alert(phrase.toLowerCase());

function DeuxArg(first, second) {
	alert("Votre premier argument est :" + first);
	alert('Votre second argument est: ' +second);
}
DeuxArg( (prompt('Entrez votre premier argument :')),
		 prompt('Entrez votre deuxième agrument :')
);

function Xde2(){
	var result=parseInt(prompt("Donnez le nombre à multiplier par 2"));
	alert(result*2);
}
Xde2();
alert('Vous êtes à la moitié !');
Xde2();
for ( var allo =0; allo <=10; allo ++){
	alert(allo++ +" est un nombre paire");
}

var prenoms="", prenom;
while(true){
	prenom=prompt('Entrez votre prenom');
if (prenom){
	prenoms+=prenom+ '';
}else{
	break;
}
} alert(prenoms);
document.writeln(prenoms);

var nùmero =0;
while( nùmero < 10){
	nùmero++;
}
alert(nùmero)

var genre= "je suis de : ", sexe,
question=confirm("Vous êtes de quel sexe ?");
sexe=genre?  "Masculin" : "Féminin";
alert(genre + sexe);


var prof="Vous êtes un : ", metier,
prof1=confirm('vous êtes étudiant ?');
metier=prof1? 'Etudiant':'Maçon';
alert(prof + metier);

//commentaire vers le bas
var number1 = 0;
number1++;
alert(number1);
numner1--;
alert(number1);
//===================
var age= parseInt(prompt("Entrez votre âge de 1 à 120 "));
if (1<=age && age <=6){
	alert("Vous êtes un jeune enfant");
}
else if ( 6<= age && age <=11){
	alert("Vous êtes un enfant qui a atteint l'âge de la raison");
} else if ( 12 <=age && age <= 17){
	alert("Vous êtes un adolescent");
}
else if (18<= age && age <= 120){
	alert("vous êtes un adulte");
}else{
	alert('Erreur');
}
//+++++++++++++++++++

alert('JE suis là');
var reponse = window.prompt('Taper blanc, rouge ou jaune. Puis cliquez sur OK');
switch (reponse.toLowerCase()){
	case "blanc":
	alert('Vous avez tapé blanc'); break;
	case "rouge":
	alert('Vous avez tapé rouge');break;
	case "noir":
	alert("vous avez tapé noir"); break;
	default:
	alert('Désolé, cette couleur est indisponible');
}
//boucles
var i = 0;
while( i <= 10){
	console.log("le numéro:",i);
	i++;

};
for (var i= 0; i <= 10; i+=2){
	console.log("numéro:",i);  
};

function validateForm() {
  if(document.getElementById('myField').value == '') {
    document.getElementById('myFieldError').innerHTML = 'Le champ ne peut être vide';
    return false;
  } else {
    document.getElementById('myFieldError').innerHTML = '';
    alert('Le formulaire peut être envoyé');
    return true;
  }
}
var porte = parseInt(prompt("Entrez le numéro de porte d'où vous allez ( de -2 à 20?"));
if (porte == 0){
	alert("Vous êtes à la porte de départ");
}else if ( -2 <= porte && porte <= 20){
	alert("Vous êtes sur la porte N° " +porte );
}else{
	alert('cette porte n\'existe pas sur la maison');

}
// Switch
var tiroir=parseInt(prompt("Ouvrez votre tiroir par son numero( 0 à 5)"));
switch (tiroir) {
case 1:
alert('Vous avez ouvert un trior contenant des vetements');
break;
case 2:
	alert('C \'est pas votre tiroir  ');
	break;
case 3:
		alert ("merci de passer voir le 4");
		break;
case 4 :
	alert("Félicitaios c'est votre tiroir. la clé c'est 4");
	break;
	case 5:
		alert("Le tiroir est vide");
		break;
		default:
			alert("Merci de reessayer");
};
// ternaires
var sms = "Votre genre :",endsms,
adult= confirm(" Ëtes-vous une fille ?");
endsms= adult ?'fille':"garçon";
alert(sms + endsms);