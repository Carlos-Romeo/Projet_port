

document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); 
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;


        const formData = {
            email: email,
            password: password
        };


        fetch("http://localhost:5000/user/login", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
             body: JSON.stringify(formData) 
        })
        .then(response => {
            if (response.ok) {
                console.log("ok");
                console.log("c est bon")
                
            } else {

                console.error("Échec de l'authentification");
            }
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi des données au serveur:", error);
        });
    });
}); 
