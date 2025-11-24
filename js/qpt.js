// - = [ STARTAR UTRÄKNINGEN NÄR MAN KLICKAR PÅ RÄKNA UT KNAPPEN] = -
function main() {
    //Hämtar totala transaktioner
    transactions = parseInt(document.getElementById("transactions").value);
	transactionsMax = 1;
    //Hämtar nuvarande QPT
    qpt = parseFloat(document.getElementById("qpt").value);
    //Hämtar QPT mål
    qptTarget = parseFloat(document.getElementById("qptTarget").value);
    // Hämta språk för klienten
    lang = localStorage.getItem('lang');
	console.log("lang: " + lang);
	
    //RÄKNA UT
    calc(lang);
}
function calc(lang) {
	itemsSold = Math.round(transactions*qpt);
	itemsSoldTarget = transactions*qptTarget;

    results();
}

// - = [ Calculate Results ] = -
function results() {
		// _________________ [ Input ] _________________
        document.getElementById("resultTransactions").innerHTML = transactions;
        document.getElementById("resultQpt").innerHTML = qpt;
        document.getElementById("resultQptTarget").innerHTML = qptTarget;
			
		// _________________ [ Varor ] _________________
		if (itemsSoldTarget>itemsSold) {
			document.getElementById("resultItems").innerHTML = itemsSold + " (<span style='color: red'>-" + (Math.round(transactions*qptTarget)-itemsSold) + "</span>)";
		}
		else {
			document.getElementById("resultItems").innerHTML = itemsSold + " (<span style='color: lime'>+" + (Math.round(itemsSold-transactions*qptTarget)) + "</span>)";
		}
		
        document.getElementById("resultItemsTarget").innerHTML = Math.round(transactions*qptTarget);
		
		resultsAnalyze(lang);
}
// - = [ Calculate Results ] = -
function resultsAnalyze() {
	transactionsForward = parseInt(document.getElementById("transactionsForward").value);
	if (lang == 'se') {
		if (qpt<qptTarget) {
			//__________________ [ Diagnos ] __________________	
			document.getElementById("resultTransactionsTarget").innerHTML = "Om du tar " + transactionsForward + " transaktioner till...";

			itemsRequired = Math.round((transactions+transactionsForward)*qptTarget);
			document.getElementById("resultItemsTotal").innerHTML = "Så behöver du sälja " + (itemsRequired-itemsSold) + " varor sammanlagt.";
		}
		else {
			console.log("here");
			while(((itemsSold+transactionsMax)/(transactions+transactionsMax))>qptTarget & transactionsMax<100) {
				console.log(itemsSold+transactionsMax + "/" + transactions+transactionsMax + ">" + qptTarget);
				transactionsMax++;
			}
			document.getElementById("transactionsForward").value = transactionsMax;
			document.getElementById("resultTransactionsTarget").innerHTML = "Om du tar " + transactionsMax + " transaktioner till...";
			//QPT = ITEMS/TRANSACTIONS... TRANSACTIONS = ITEMS/QPT
			document.getElementById("resultItemsTotal").innerHTML = "med 1 vara per kvitto, så kommer du hamna under målet.";
			transactionxMax = transactions;
		}
	}
	else  {
		// DET HÄR HAR INTE BLIVIT ÖVERSATT ÄNNU!
		if (qpt<qptTarget) {
			//__________________ [ Diagnos ] __________________	
			document.getElementById("resultTransactionsTarget").innerHTML = "Om du tar " + transactionsForward + " transaktioner till...";

			itemsRequired = Math.round((transactions+transactionsForward)*qptTarget);
			document.getElementById("resultItemsTotal").innerHTML = "Så behöver du sälja " + (itemsRequired-itemsSold) + " varor sammanlagt.";
		}
		else {
			console.log("here");
			while(((itemsSold+transactionsMax)/(transactions+transactionsMax))>qptTarget & transactionsMax<100) {
				console.log(itemsSold+transactionsMax + "/" + transactions+transactionsMax + ">" + qptTarget);
				transactionsMax++;
			}
			document.getElementById("transactionsForward").value = transactionsMax;
			document.getElementById("resultTransactionsTarget").innerHTML = "Om du tar " + transactionsMax + " transaktioner till...";
			//QPT = ITEMS/TRANSACTIONS... TRANSACTIONS = ITEMS/QPT
			document.getElementById("resultItemsTotal").innerHTML = "med 1 vara per kvitto, så kommer du hamna under målet.";
			transactionxMax = transactions;
		}
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
