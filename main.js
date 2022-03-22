const numeroKm = prompt("Quanti Km vuoi percorrere?");
const numeroAnni = prompt("Quanti anni hai?");

const costoKm = numeroKm * 0.21;
const sconto20 = 20 / 100;
const totale = costoKm - (costoKm*sconto20);
const sconto40 = 40 / 100;
const totale2 = costoKm - (costoKm * sconto40);

if(numeroAnni<18){
    alert(`Costo biglietto è:${totale}€`);
} else if(numeroAnni>=65){
    alert(`Costo biglietto è:${totale2}€`);
}

alert(`Costo biglietto è:${costoKm}€`);