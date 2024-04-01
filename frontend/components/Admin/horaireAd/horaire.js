
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); 


        const navire = document.getElementById("navire").value;
        const navire_contenu = document.getElementById("navire_contenu").value;
        const time = document.getElementById("time").value;
        const formData = {
            navire: navire,
            navire_contenu: navire_contenu,
            time: time
        };


        console.log(formData)

        fetch("http://localhost:5000/horaire/InsHoraire", {
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
            console.error("Échec de l'authentification");
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
