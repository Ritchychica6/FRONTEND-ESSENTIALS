
   //hier vul ik een object met variabelen van voornaam  enz. En de user geeft input,prompt zorgt hier voor.
    
   let persoon=  {
    voornaam: prompt("naam"),
    achternaam: prompt("achternaam"),
    leeftijd: prompt("leeftijd?"),
    eamail: prompt ("email"),
    woonplaats: prompt ("woonplaats")
};

//ik moet hier de voornaam laten zien die de gebruiker heeft ingetypt, dit doe ik met persoon.voornaam 
document.getElementById("voornaam").innerHTML=persoon.voornaam;
document.getElementById("achternaam").innerHTML=persoon.achternaam; 
document.getElementById("email").innerHTML=persoon.email;
document.getElementById("woonplaats").innerHTML=persoon.woonplaats;

if(persoon.leeftijd==16){
// om de achtergrond van de body te veranderen gebruik ik in java script .style.backgrondColor=kleur
document.getElementById("achtergrond").style.backgroundColor="orange";
}

    else if(persoon.leeftijd==17){
    document.getElementById("achtergrond").style.backgroundColor="blue";
    }
    else if(persoon.leeftijd==18){
        document.getElementById("achtergrond").style.backgroundColor="gold";
        }
    else if(persoon.leeftijd==19){
            document.getElementById("achtergrond").style.backgroundColor="green";
            }