
fetch('http://localhost:5000/access/SelAccess')

.then( response => response.json())

.then(  data => {

    let parcours = data.result

    console.log(parcours[0].nom);




/* 
    <section class="content1">
    <section class="user_authoriser">
      <section class="nom">
        <h2>nom</h2>
        <p>code</p>
      </section>
      <section class="possibilite">
        <button class="bt1" >accepter</button>
        <button class="bt2">signaler</button>
      </section>
    </section> 
  </section>
 */


    for(i=0; i<parcours.length; i++){

        let selectHo = document.createElement("section");

        selectHo.className = 'content1';

        let parent = document.querySelector(".content")

        parent.appendChild(selectHo);

        let selectUse = document.createElement("section");

        selectUse.className = 'user_authoriser';

        let selectNom = document.createElement("section");

        selectNom.className = 'nom';

        let selectPoss = document.createElement("section");

        selectPoss.className = 'possibilite';


        selectHo.appendChild(selectUse);

        selectUse.appendChild(selectNom);

        selectUse.appendChild(selectPoss)

        let param = document.createElement("p");

        let H1 = document.createElement("h1");

        selectNom.appendChild(H1);

        H1.textContent=parcours[i].nom;

        selectNom.appendChild(param);

        param.textContent = parcours[i].code;

        param.style.fontSize = '23px';

        param.style.color = "#fca311"

        let bt1 = document.createElement("button");

        bt1.className = 'bt1';

        bt1.textContent = 'accepter'

        let bt2 = document.createElement("button");

        bt2.className = "bt2";

        bt2.textContent = "signaler";

        selectPoss.appendChild(bt1)

        selectPoss.appendChild(bt2)


        bt1.addEventListener('click', ()=>{

            bt1.textContent = 'authoriser';

            bt1.style.backgroundColor = 'green';

            bt2.style.backgroundColor='#fca311';

            bt2.textContent = "signaler";

        })

        bt2.addEventListener('click', ()=>{

            bt2.textContent = 'non auth';

            bt2.style.backgroundColor = 'red'

            bt1.style.backgroundColor ='#fca311'

            bt1.textContent = 'accepter'

        })

        
        let space2 = document.createElement("br");

        parent.appendChild(space2);        


    }

})

.catch(error => {

    console.error("Erreur lors de la reception des données au serveur:", error);

});
