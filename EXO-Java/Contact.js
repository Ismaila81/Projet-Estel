/*document.getElementById('email2').addEventListener('input', function(){
   var pragraphErreur=getElementById("erreur");
    if  (this.value != document.getElementById("email").value ){
        document.getElementById("erreur").innerHTML="Les deux adreeses sont differentes";

    }else{
   pragraphErreur.innerHTML="";

    }
})*/

document.getElementById("inscrption").addEventListener("submit", function(e){
    // met le formu par defaut
 // variable pour verifier si les champs sont vides
 var erreur;
 var inputs =document.getElementsByTagName("input");
 for (var i = 0; i < inputs.length; i++){
     if (!inputs[i].value){
         erreur="Veuillez renseigner tous les champs";
     }
 }

//  var pseudo=document.getElementById("pseudo");
//  var email=document.getElementById("email");
//  var email2=document.getElementById("email2");
//  var mdp=document.getElementById("mdp");
//  if (!mdp.value){
    // erreur="Veuillez rensigner le mot de passe";
// }
// if (!email2.value){
    // erreur="Veuillez rensigner la confirmation de l'email";
// }
// if (!email.value){
    // erreur="Veuillez rensigner le email";
//  }
//  if (!pseudo.value){
    // erreur="Veuillez rensigner votre nom";
// }
if (erreur){
    e.preventDefault();
    document.getElementById("erreur").innerHTML=erreur;
    return false;
} else {
    alert("Formulaire envoyé !")
}
})// on emets une alert apres l'envoie du formulaire
