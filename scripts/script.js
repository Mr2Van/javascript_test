/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {

    let score = document.querySelector('.zoneScore span')
    
    let afficheScore = `${score}/ ${afficheScore}`
    
    score.inner.html= afficheScore

    console.log("Votre score est de " + score + " sur " + nbMotsProposes)
}

/**
 * Cette fonction demande à l'utilisateur de choisir entre "mots" et "phrases" et retourne le choix de l'utilisateur
 * @return {string} : le choix de l'utilisateur, ce choix est nécessairement "mots" ou "phrases
 */
/**function choisirPhrasesOuMots() {
    // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    }
    return choix
}
 */

/**
 * Cette fonction lance la boucle de jeu, c'est à dire qu'elle demande à l'utilisateur de saisir tous les mots
 * contenus dans le tableau listePropositions. A chaque mot saisi, on incrémente le score de l'utilisateur
 * 
 * @param {array[string]} listePropositions 
 * @return {number} : le score de l'utilisateur
 */
// function lancerBoucleDeJeu(listePropositions) {
//     let score = 0
//     for (let i = 0; i < listePropositions.length; i++) {
//         // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
//         let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
//         if (motUtilisateur === listePropositions[i]) {
//             // Si le mot saisi par l'utilisateur est correct, on incrémente le score
//             score++
//         }
//     }
//     return score
// }

function afficheProposition(proposition){

    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText=proposition

}

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu(){

    // Initialisations
    let score = 0
    let i =0
    let btnValide= document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")

    btnValide.addEventListener("click", ()=>{
    console.log(inputEcriture.value)
    if(inputEcriture === listeMots[i]){
        score++
    }
    i++
    afficherResultat(score,i)
    inputEcriture.value=" "
    if(listeMots[i]== undefined){
        afficheProposition(" jeu terminer")
        btnValide.disabled= true
    }
    afficheProposition(listeMots[i])
   })
   
    afficherResultat(score, i)
}

