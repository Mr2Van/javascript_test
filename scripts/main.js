/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
*********************************************************************************/


/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
/**
 * Cette fonction lance la boucle de jeu, c'est à dire qu'elle demande à l'utilisateur de saisir tous les mots
 * contenus dans le tableau listePropositions. A chaque mot saisi, on incrémente le score de l'utilisateur
 * 
 * @param {array[string]} listePropositions 
 * @return {number} : le score de l'utilisateur
 */


// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur
const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]


function afficherResultat(score, nbMotsProposes) {
    let score = document.querySelector('.zoneScore span')
    let afficheScore = `${score}/ ${afficheScore}`
    
    score.inner.html= afficheScore

    console.log("Votre score est de " + score + " sur " + nbMotsProposes)
}




function afficheProposition(proposition){

    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText=proposition

}

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




lancerJeu()



// J'ai mis ce code en commentaire, nous pourrons le récupérer lorsque nous en auront besoin :

// let inputEcriture = document.getElementById("inputEcriture")
// console.log(inputEcriture)

// let btnValiderMot = document.getElementById("btnValiderMot")
// console.log(btnValiderMot)

// let zoneProposition = document.querySelector(".zoneProposition")
// console.log(zoneProposition)

// let spanScore = document.querySelector(".zoneScore span")
// console.log(spanScore)

// let listeBtnRadio = document.querySelectorAll(".optionSource input")
// console.log(listeBtnRadio)


