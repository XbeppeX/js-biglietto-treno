//Inserimento Km e anni
const numeroKm = prompt("Quanti Km vuoi percorrere?");
const numeroAnni = prompt("Quanti anni hai?");

//Definizione variabili
const costoKm = (numeroKm * 0.21);
const sconto20 = 20 / 100;
const totale = costoKm - (costoKm*sconto20);
const sconto40 = 40 / 100;
const totale2 = costoKm - (costoKm*sconto40);

//esecuzione If/else + fixed a soli 2 numeri decimali
if ((numeroAnni>0) && (numeroKm>0)){
    if(numeroAnni<18){
        document.getElementById("total").innerHTML = `${totale.toFixed(2)} €`;
    } else if(numeroAnni>=65){
        document.getElementById("total").innerHTML = `${totale2.toFixed(2)} €`;
    } else{
        document.getElementById("total").innerHTML = `${costoKm.toFixed(2)} €`;
    }
} else {
    alert("Hai dimenticato di inserire anni e/o Km !");
}

//document.getElementById("total").innerHTML = totale

