//Variables générales
let limiteList;
let nombre;
let choix;
const btnTirage=document.querySelector(".btn-selection"); //btn séléction aléatoire
let resultatTirage=document.querySelector(".resultatMovie");

// Variables Liste perso
const inputTitle=document.querySelector(".addTitles");//input
const btnAdd=document.querySelector(".btn-add");//bouton d'ajout
const listperso=document.querySelector(".perso-list");//bloc ul LISTE PERSO
const predef=document.querySelector(".predef_title");//bloc ul PREDEFINI
let btnCategorie=document.querySelectorAll(".btn--cat");
let msgError=document.querySelector(".msg");
let listTabPerso=[];//création du tabeau à personnaliser


//Création d'array prédéfini
let comedie=[' Good Morning England',' Astérix et Obélix: Mission Cléopatre','Shaun of the Dead','OSS 117'];
let horreur=['Bienvenue à Zombieland','28 jours plus tard','Esther','The Conjuring','Insidius'];
let superhero=['Spider-Man 2', 'Avenger 1','Iron man','Wonder Woman','The Dark Knight'];
let sf=['Retour vers le Futur 1','Avatar','La Guerre des Mondes','Star Wars : Un nouvel espoir'];
let comrom=['30 ans sinon rien','Coup de foudre à Manhattan','Pretty Woman','A tous les garçons que j\'aimé','Le temps d\' automne'];
let animation=['Dragon','Raiponce','La reine des neiges','Les indestructibles ','Toys story','Spider-man: Nouvelle génération'];

//Functions
function addTitles(e){
    e.preventDefault();
        let conv=inputTitle.value;//conversion  pour test 

    if (conv.length>=2){
            msgError.classList.remove("msgError");
            const divListPerso=document.createElement("div");
            divListPerso.classList.add("bloc-listP");
            listperso.appendChild(divListPerso);


        let addLi=document.createElement("li");
            addLi.classList.add("titres");  
            addLi.innerHTML='<i class="fas fa-film"></i>'+inputTitle.value;

        listTabPerso.push(inputTitle.value);    
            
        divListPerso.appendChild(addLi);

        trash =document.createElement('button'); 
            trash.innerHTML='<i class="fas fa-minus"></i>';
            trash.classList="deleted-btn";
            trash.value=inputTitle.value;
        addLi.appendChild(trash);

        inputTitle.value="";
        return listTabPerso;
    }else{
       msgError.classList.add("msgError");
       msgError.innerHTML="le titre ne peux être inférieur à 2 caractères";
       return msgError;
    }
   
}
function deleteMovie(e){
    e.preventDefault();
    const item=e.target;
    if(item.classList[0]==="deleted-btn"){
        const deleteIndex=listTabPerso.indexOf(item.value);//récupérer l'index de l'élément à supprimer dans le tableau 
        listTabPerso.splice(deleteIndex);// supprimer du tableau
            
        const movie=item.parentElement; //récupère le parent de la class vérifié au dessus
        movie.remove();// supprimer l'élément html
    };
}
function calcul(limite){
    nombre =Math.floor(Math.random()*(limite-0)+0);
    return nombre;
}
function tirage(choix, listTabPerso){
     if(choix!=="libre"){
        switch (choix){
        case "comedie":
            limite=comedie.length;
            tirage(limite);
            resultatTirage.textContent=comedie[nombre];
            return
            case "horreur":
                limite=horreur.length;
                calcul(limite);
                resultatTirage.textContent=horreur[nombre];
            return
            case "superhero":
                limite=superhero.length;
                calcul(limite);
                resultatTirage.textContent=superhero[nombre];
            return
            case "sf":
                limite=sf.length;
                calcul(limite);
                resultatTirage.textContent=sf[nombre];
            return
            case "comrom":
                limite=comrom.length;
                calcul(limite);
                resultatTirage.textContent=comrom[nombre];
            return
            case "animation":
                limite=animation.length;
                calcul(limite);
                resultatTirage.textContent=animation[nombre];
            return
    
            default:
              return "error";
          }
    }else if(choix==="libre" && listTabPerso.length>0 ){
        limite=listTabPerso.length;
        calcul(limite);
        resultatTirage.textContent=listTabPerso[nombre];
    }else {
        msgError.classList.add("msgError");
        msgError.innerHTML="La liste est vide :'( ";
        return msgError;
    }
} 
//Events   
btnAdd.addEventListener("click",addTitles);
listperso.addEventListener("click",deleteMovie);
btnTirage.addEventListener("click",function(){
    tirage(choix,listTabPerso);
});
btnCategorie.forEach(element=> {
    element.addEventListener("click", function(e){
        let titre=e.target;
        choix=titre.value;
        return choix;
    });
});