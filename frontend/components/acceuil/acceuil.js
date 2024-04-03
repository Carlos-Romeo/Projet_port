let parent = document.querySelector(".grand_parent");

let first_child = document.querySelector(".first_parent");

let seconde_child = document.querySelector(".seconde_parent");

let third_parent = document.querySelector(".parent_3");







let user = document.getElementById("user");

let horaire = document.getElementById("time");

let rapport = document.getElementById("rapport");







fetch('http://localhost:5000/user/users')

.then( response => response.json())

.then(  data => {

    let parcours = data.result

    console.log(parcours[0].nom);

    for(i=0; i<parcours.length; i++){

        let selectUs = document.createElement("section");

        selectUs.className = 'users'

        first_child.appendChild(selectUs);

        
        let param = document.createElement("p");

        param.className = 'paramstyle'

        selectUs.appendChild(param);

        param.style.color =''

        param.textContent = parcours[i].nom;
        let param1 = document.createElement("p");
        
        param1.className = 'paramstyle'
        
        selectUs.appendChild(param1);
        
        param1.textContent = "Ecrire à Mr/M ";
        let param2 = document.createElement("section");

        param2.className = 'DD'

        selectUs.appendChild(param2);


        let space = document.createElement("br")

        first_child.appendChild(space)

        selectUs.addEventListener("click", ()=>{
            window.location.href = "../chat-app-main/public/index.html";
        })

    }

})

.catch(error => {

    console.error("Erreur lors de la reception des données au serveur:", error);

});






fetch('http://localhost:5000/horaire/SelHoraire')

.then( response => response.json())

.then(  data => {

    let parcours = data.result

    console.log(parcours[0].navire);

    for(i=0; i<parcours.length; i++){

        let selectHo = document.createElement("section");

        selectHo.className = 'horaire';

        seconde_child.appendChild(selectHo);


        let param = document.createElement("p");

        let param2 = document.createElement('p');

        let param3 = document.createElement('p');


        param.className = 'paramstyle';

        param2.className = 'param2style';

        param3.className = 'param3style';


        selectHo.appendChild(param3);

        selectHo.appendChild(param);

        selectHo.appendChild(param2);


        param.textContent = parcours[i].navire;

        let space1 = document.createElement("br");

        selectHo.appendChild(space1);

        param2.textContent = parcours[i].navire_contenu;

        let space2 = document.createElement("br");

        selectHo.appendChild(space2);

        param3.textContent = parcours[i].time;

        param3.style.fontSize = "20px";

        let space = document.createElement("br")

        seconde_child.appendChild(space)

    }

})

.catch(error => {

    console.error("Erreur lors de la reception des données au serveur:", error);

});













document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('form').addEventListener('submit', function (e) {

        e.preventDefault(); 

        const rapportTitre = document.querySelector('#titre').value;

        const contenu = document.querySelector('textarea').value;

        const formData = {

            rapportTitre: rapportTitre,

            contenu: contenu,

        };

        console.log(formData)
        
        fetch("http://localhost:5000/rapport/InsRapport", {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json'

            },

            body: JSON.stringify(formData)

        })

        .then(  response => {            

            if (response.ok) {

            console.log("ok");

        } else {

            console.error("Rapport non envoyer");

        }}  

)
        
        .then(data => {

            console.log(data);

        })

        .catch(error => {

            console.error("Erreur lors de l'envoi des données au serveur:", error);

        });

    });

});

