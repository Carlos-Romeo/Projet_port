


fetch('http://localhost:5000/rapport/SelRapport')

.then( response => response.json())

.then(  data => {

    let parcours = data.result

    console.log(parcours[0].contenu);

    for(i=0; i<parcours.length; i++){
        let contenu = document.querySelector(".container");


        let sectionRapport = document.createElement("section");

        sectionRapport.className = "reportContainer";

        contenu.appendChild(sectionRapport);

        let param = document.createElement("h1");

        let param2 = document.createElement('p');



        param.className = 'paramstyle';

        param2.className = 'param2style';

    

        sectionRapport.appendChild(param);

        sectionRapport.appendChild(param2);


        param.textContent = parcours[i].rapportTitre;

        let space1 = document.createElement("br");

        sectionRapport.appendChild(space1);

        param2.textContent = parcours[i].contenu;
        

        let space2 = document.createElement("br");

        contenu.appendChild(space2);

 










































    }

})

.catch(error => {

    console.error("Erreur lors de la reception des données au serveur:", error);

});

