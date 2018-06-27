function runCalc() {
	var textField = document.getElementById("textField");
	let pPrinciple = document.getElementById('princText').value;
	let intPrinc = parseFloat(pPrinciple);
	let origPrinc = intPrinc;
	let pRate = document.getElementById('intstText').value;
	let intRate = parseFloat(pRate);
	let pMonthlyPayment = document.getElementById('mnthPmtText').value;
	let intPmt = parseFloat(pMonthlyPayment);
	let monthsToPay = 0;
	let yearsToPay = 0;
	
	intRate = intRate / 100.0;
	textField.value = intPrinc;

	
	// Calculates amount of time in months/years needed to pay off loan with specific payment amount.
	// Calculation based on common percentage rates drawn by banks and loan institutions ~ interest is added 
	// on a daily basis, therefore interest rate must be divided by 365, then multiplied by average days per month
	while (intPrinc > 0)
	{
		intPrinc = intPrinc - (intPmt);
		let tempPrinc = intPrinc + (intPrinc * ((intRate / 365) * 30.42));
		if (tempPrinc > origPrinc) {
			document.getElementById("output").innerHTML = "Payment amount is too small to pay off loan";
			break;
		} else {
			intPrinc = tempPrinc;
		}
		monthsToPay = monthsToPay + 1;
		yearsToPay = monthsToPay / 12;
    	textField.value += ", " + intPrinc;
    	document.getElementById("output").innerHTML = "It will take " + monthsToPay + " months to pay off the loan, or " + yearsToPay.toFixed(1) + " years.";
	}

	
}

function clearFields() {
	var textField = document.getElementById("textField");
	var princText = document.getElementById("princText");
	var intstText = document.getElementById("intstText");
	var mnthPmtText = document.getElementById("mnthPmtText");
	textField.value = "";
	princText.value = "";
	intstText.value = "";
	mnthPmtText.value = "";
	document.getElementById("output").innerHTML = "";
}