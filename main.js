const numeroKm = prompt("Quanti Km vuoi percorrere?");
const numeroAnni = prompt("Quanti anni hai?");

const costoKm = numeroKm * 0.21;
const sconto20 = costoKm - (20 / 100);
//const totale = costoKm - sconto20;

if(numeroAnni<18){
    if(costoKm - sconto20){
        alert(`Costo biglietto è:${totale}€`);
    }
   
}

alert(`Costo biglietto è:${costoKm}€`);