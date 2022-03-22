const numeroKm = prompt("Quanti Km vuoi percorrere?");
const numeroAnni = prompt("Quanti anni hai?");

const costoKm = (numeroKm * 0.21).toFixed(2);
const sconto20 = 20 / 100;
const totale = costoKm - (costoKm*sconto20).toFixed(2);
const sconto40 = 40 / 100;
const totale2 = costoKm - (costoKm * sconto40).toFixed(2);

if(numeroAnni<18){
    document.getElementById("total").innerHTML = totale;
} else if(numeroAnni>=65){
    document.getElementById("total").innerHTML = totale2;
} else{
    document.getElementById("total").innerHTML = costoKm;
}

//document.getElementById("total").innerHTML = totale
//document.getElementById("total").innerHTML = totale2
//document.getElementById("total").innerHTML = totale
