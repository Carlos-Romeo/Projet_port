


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); 


        let nom = document.getElementById('nom').value;
        let code = document.getElementById("code").value;
        
        const nombre = 2323;
        

        if ( code == nombre){
            const formData = {
                nom: nom,
                code: code
            };

            console.log(formData);
                    

        fetch("http://localhost:5000/access/InsAccess", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(  response => {            
            if (response.ok) {
            console.log("ok");
            window.location.href='../acceuil/acceuil.html';
            
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
        }else{
            console.log("votre code est incorrect vous n'avez aucune chance d'être autoriser")
        }

    });
});


