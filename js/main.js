//Utgångs Variablar
//Variablar namnget som flerrad funkar detsamma för flersälj. 
var flerradProcent;
var flerrad;
var antalTrans;
var targetPercent;
// xReq används för att räkna ut hur många trans saknas innan vi når 30%.
var flerradReq;
var antalTransReq;
//Antalet transaktioner som saknas
var missingMulti;

// - = [ STARTAR UTRÄKNINGEN NÄR MAN KLICKAR PÅ RÄKNA UT KNAPPEN] = -
function main() {
    //Kollar input på antalTrans
    antalTrans = parseInt(document.getElementById("antalTrans").value)
    //Kollar input på flerrad och räknar ut hur många av totala transaktioner är flerrad.
    //Procent * 0.01 (gör om % till decimalform) * antalTrans
    //Avrunda svaret till närmsta heltal (i och med att procenten vi ser är avrundad)
    flerradProcent = document.getElementById("flerrad").value;
    targetPercent = document.getElementById("percent").value * 0.01;
    flerrad = Math.floor(antalTrans * (flerradProcent * 0.01));

    // Hämta språk för klienten
    const lang = localStorage.getItem('lang')
    //RÄKNA UT
    calcResult(lang);
}

// - = [ RÄKNAR UT OCH SKRIVER UT ANTALEN FLERRADS/FLERSÄLJS TRANSAKTIONER - KOLLAR ÄVEN HUR MÅNGA TRANS IFRÅN VI ÄR 30%] = -
function calcResult(lang) {
    // xReq används för att räkna ut hur många trans saknas innan vi når 30%.
    flerradReq = flerrad;
    antalTransReq = antalTrans;
    //Om våran flerrad är minst "targetPercent", kolla hur många enradskvitton ifrån 30% vi är.
    if ((flerrad / antalTrans) >= targetPercent) {
        //Så länge våran flerrad är över eller lika med "targetPercent", lägg till +1 trans och kolla om vi har hamnat under 30%
        while ((flerrad / antalTransReq) >= targetPercent) {
            antalTransReq++;
        }
        //Räknar ut flerradsprocenten(samt avrundar till 2 decimaler) och skriver ut all information.
        if (lang == 'se')
            document.getElementById("resultat").innerHTML = "<b>Antal Transaktioner:</b> " + antalTrans + "<br><b>Varav flerrad:</b> " + flerrad + "<br><b>Flerrads/Flersäljs %:</b> " + ((flerrad / antalTrans) * 100).toFixed(2) + "%(<u id='saknas'>~" + Math.round((flerrad / antalTrans) * 100) + "%</u>)<br>(Om du inte subtraherade returer så kan raden över visa fel/avrundad ned betydligt)<br><br>Du är <u id='marginal'>" + (antalTransReq - antalTrans) + "</u> enradskvitto(n) från att hamna under ditt mål.";
        else
            document.getElementById("resultat").innerHTML = "<b>Antall transaksjoner:</b> " + antalTrans + "<br><b>Hvorav flerrad:</b> " + flerrad + "<br><b>Flerrad/Flersalgs %:</b> " + ((flerrad / antalTrans) * 100).toFixed(2) + "%(<u id='saknas'>~" + Math.round((flerrad / antalTrans) * 100) + "%</u>)<br>(Hvis du ikke trekker fra returer kan raden ovenfor vise feil.)<br><br>Du er <u id='marginal'>" + (antalTransReq - antalTrans) + "</u> enkelradskvittering(er) fra å ende under ditt mål.";
    }
    else {
        //Så länge våran flerrad är under 30%, lägg till +1 flerrad(och därmed +1 antalTrans) och kolla om vi har nått 30% igen
        while ((flerradReq / antalTransReq) < targetPercent) {
            flerradReq++;
            antalTransReq++;
        }
        //Räknar ut flerradsprocenten(samt avrundar till 2 decimaler) och skriver ut all information.
        if (lang == 'se')
            document.getElementById("resultat").innerHTML = "<b>Antal Transaktioner:</b> " + antalTrans + "<br><b>Varav flerrad:</b> " + flerrad + "<br><b>Flerrads/Flersäljs  %:</b> " + ((flerrad / antalTrans) * 100).toFixed(2) + "%(<u id='marginal'>~" + Math.round((flerrad / antalTrans) * 100) + "%</u>)<br>(Om du inte subtraherade returer så kan raden över visa fel/avrundad ned betydligt)<br><br>Du behöver <u id='saknas'>" + (antalTransReq - antalTrans) + "</u> till flerradskvitto/flersäljskvitto(n) för att nå ditt mål.";
        else
            document.getElementById("resultat").innerHTML = "<b>Antall transaksjoner:</b> " + antalTrans + "<br><b>Hvorav flerrad:</b> " + flerrad + "<br><b>Flerrads/Flersalgs  %:</b> " + ((flerrad / antalTrans) * 100).toFixed(2) + "%(<u id='marginal'>~" + Math.round((flerrad / antalTrans) * 100) + "%</u>)<br>(Hvis du ikke trekker fra returer kan raden ovenfor vise feil.)<br><br>Du trenger <u id='saknas'>" + (antalTransReq - antalTrans) + "</u> flere flerrads/flersalgskvittering(er) for å nå ditt mål.";
    }
    //Kör funktionen som uppdaterar tabellen
    graph();
}

// - = [ UPPDATERAR TABELLEN ] = -
function graph() {
    //Laddar in HTML tabellen så att man kan hantera den mycket enklare via JavaScript
    var graf = document.getElementById('graf');

    //Går igenom varje cell en i taget och räknar ut vilken procent flerrad man får vid specifierad antal Flerrads kvitton och Enrads kvitton
    //Cell 1 > 10 på rad 1 (börjar alltså längst upp åt vänster och vi rör oss höger)
    for (let onRow = 1; onRow <= 10; onRow++) {

        //Row 1 > 10 på rad 1 (börjar alltså längst upp vänster och rör oss ned)
        for (let onCell = 1; onCell <= 10; onCell++) {
            //Skriver ut i konsollen vad för uträkning som görs för den valda cellen
            console.log("+" + (onRow - 1) + " Enrad +" + (onCell - 1) + " Flerrad/Flersälj = " + (flerrad + onCell - 1) / (antalTrans + onCell + onRow - 2) + " " + (flerrad + onCell - 1) + "/" + (antalTrans + onCell + onRow - 2));
            //Om våran flerradsprocent är över "targetPercent", gör den cellen grön
            if (((flerrad + onCell - 1) / (antalTrans + onCell + onRow - 2)) >= targetPercent) {
                graf.rows[onRow].cells[onCell].style.backgroundColor = "MediumAquaMarine";
            }
            //Annars gör vi den röd, eftersom då måste procenten vara under "targetPercent"
            else {
                graf.rows[onRow].cells[onCell].style.backgroundColor = "Tomato";
            }
            //Skriver ut vilken procenten i den cellen
            graf.rows[onRow].cells[onCell].innerHTML = Math.round((flerrad + onCell - 1) / (antalTrans + onCell + onRow - 2) * 100) + "%"
        }
        //Här hoppar vi upp igen till "for(let onRow..." för att byta rad ett steg ned.
    }
}

// - = [ KÖR OM UTRÄKNINGEN MED UPPDATERADE VARIABLAR NÄR MAN KLICKAR PÅ +/- KNAPPARNA] = -
function addFlerrad() {
    document.getElementById("antalTrans").value = "";
    document.getElementById("flerrad").value = "";
    flerrad++;
    antalTrans++;
    calcResult();
}
function subtFlerrad() {
    document.getElementById("antalTrans").value = "";
    document.getElementById("flerrad").value = "";
    flerrad--;
    antalTrans--;
    calcResult();
}
function addEnrad() {
    document.getElementById("antalTrans").value = "";
    document.getElementById("flerrad").value = "";
    antalTrans++;
    calcResult();
}
function subtEnrad() {
    document.getElementById("antalTrans").value = "";
    document.getElementById("flerrad").value = "";
    antalTrans--;
    calcResult();
}
