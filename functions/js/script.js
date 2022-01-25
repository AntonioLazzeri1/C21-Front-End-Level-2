let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  _______hij staat niet geactiveerd_______ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype ______p______ waarom? ____omdat het dan ondersteunt________ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? ______ander gaat het fout______ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen _____2 de_________ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de P________is de stuk tekst___ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde ______p______ de waarde noemen we een Apparaat_______ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een _____een fout melding__ op het scherm met de tekst _____alert____ deze tekst staan op regel ____3___ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? _____ja______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? ____________laten zien_______ en waar wordt deze in je HTML aangeroepen? _______regel 4_____ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML ___hide________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? _____dan luisterd het naar de id______________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? _____________het laat de display zien______ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen _______bij butten bereken mij_______ en wanneer wordt deze aangeroepen ____als er op klikt_______ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan _____de waarde die je typ_________ en waar komt de waarde van getal vandaan? ____plus 3________ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? _______het kan gebruikt worden bij alles____________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? _het laat het verdwijnen ____________________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? _________het gaat weg____________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen _____het komt aan _________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan ________zeker waar______ en waar komt de waarde van kleur vandaan? _________oke___ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? ________jetcoh____ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? _________oke____________ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven ___het laat de naam zien________ en wanneer gebeurt dat _als je erop kliktt_________ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? ____het gaat weg_______________ vul je antwoord in op de lijn.