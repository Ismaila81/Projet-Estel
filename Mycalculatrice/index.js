let Ecran = document.getElementById('EcranResult');

let buttons = Array.from(document.getElementsByClassName('button'));
// forEach
buttons.map( button => {
    
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CE':
            if (!Ecran.innerText){
               Ecran.innerText = '0'; 
            }else{
              Ecran.innerText = ''; 
            }
               break;

            case '=':
                try{
                    Ecran.innerText = eval(Ecran.innerText);
                } catch {
                    Ecran.innerText = "Error"
                }
                break;

            case '←':
                if (Ecran.innerText){
                   Ecran.innerText = Ecran.innerText.slice(0, -1);
                   Ecran.style.height="36px";
                }
                break;

                case '+-':
                if (Ecran.innerText>=1) {
                    Ecran.innerText='-'+Ecran.innerText;
              }else{
              Ecran.innerText='+'+Ecran.innerText.slice(-1, 0)+Ecran.innerText;
              }
                break;

                case '%':
                if (Ecran.innerText) {
                    Ecran.innerText=Ecran.innerText+"/100";
                } break;
            default:
                Ecran.innerText += e.target.innerText;
        }
    });
});
//La méthode Array.from() permet de créer une nouvelle instance d'Array (une copie superficielle)
// à partir d'un objet itérable ou semblable à un tableau.
//  map() nous permet de parcourir tous les éléments d'un tableau, en effectuant des actions sur chaque élément.
// Les résultats de cette activité nous sont retournés dans un nouveau tableau .
// La condition Switch vérifie successivement les différentes valeurs des étiquettes 
// jusqu'à ce qu'il trouve le bon contenu qui correspond à l'éxpression entre les parenthèses.
// event. target: Obtenir  l'élément qui a déclenché un événement spécifique