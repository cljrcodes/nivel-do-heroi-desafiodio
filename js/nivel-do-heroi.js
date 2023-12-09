// descrição de variáveis

const nomeDoHeroi = "Natimortus";
let XP = 100000;
let classificacao = "";

if (XP<=1000) {
    classificacao = "Ferro."
} else if (XP>=1001&&XP<=2000) {
    classificacao = "Bronze."
} else if (XP>=2001&&XP<=5000) {
    classificacao = "Prata."
} else if (XP>=6001&&XP<=7000) {
    classificacao = "Ouro."
} else if (XP>=7001&&XP<=8000) {
    classificacao = "Platina."
} else if (XP>=8001&&XP<=9000) {
    classificacao = "Ascendente."
} else if (XP>=9001&&XP<=10000) {
   classificacao = "Imortal."
} else if (XP>10001) {
    classificacao = "Radiante."
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + classificacao);