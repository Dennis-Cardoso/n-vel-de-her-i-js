
let nomeDoHeroi = "Chapolin";
let xpDoHeroi = 7002;


let nivelDoHeroi;

if (xpDoHeroi <= 1000) {
    nivelDoHeroi = "Ferro";
} else if (xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (xpDoHeroi <= 6000) {
    nivelDoHeroi = "Ouro";
} else if (xpDoHeroi <= 7000) {
    nivelDoHeroi = "Platina Diamante";
} else if (xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}


console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);

